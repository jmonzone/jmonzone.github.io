import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { Scene, PerspectiveCamera, WebGLRenderer, Color, Fog, BoxGeometry, PlaneGeometry, MeshBasicMaterial, Mesh, VideoTexture, Vector3, Vector2, RepeatWrapping, MirroredRepeatWrapping, MeshPhysicalMaterial, Clock } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';

import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import { Tween, Easing, update as tweenUpdate } from '@tweenjs/tween.js';
import Monitor from './monitor';


export default class SceneManager {
  constructor(state, projects) {
    autoBind(this);

    this.state = state;
    this.projects = projects;

    this.el = createEl('div', { className: 'game' });

    // create scene
    this.scene = new Scene();
    const backgroundColor = '#000000';
    this.scene.background = new Color(backgroundColor);
    this.scene.fog = new Fog(backgroundColor, 0, 15);

    // add camera
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.cameraY = 2;
    this.camera.position.set(0, this.cameraY, 0);
    this.cameraTarget = this.camera.position;
    this.cameraAngle = Math.PI / 2;

    // add rendererer
    this.renderer = new WebGLRenderer({ powerPreference: 'low-power' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    addEl(this.el, this.renderer.domElement);

    this.composer = new EffectComposer( this.renderer );

    const renderPass = new RenderPass( this.scene, this.camera );
    this.composer.addPass(renderPass);


    // const bloomPass = new UnrealBloomPass( new Vector2( window.innerWidth, window.innerHeight ), 0.1, 1, 0 );
    // this.composer.addPass(bloomPass);

    const filmPass = new FilmPass(0.5, 0.1, 50, false);
    this.composer.addPass(filmPass);

    this.rgbPass = new ShaderPass( RGBShiftShader );
    this.rgbPass.uniforms.amount.value = 0.001;
    this.composer.addPass( this.rgbPass );

    // init objects
    this.mirrors = []
    this.mirrors[0] = this.initMirror(new Vector3(0, 0, 0), new Vector3(-Math.PI / 2, 0, 0), 0x111111, 0.9);
    // this.mirrors[1] = this.initMirror(new Vector3(0, 0, -7.5), new Vector3(0, 0, 0), 0x969A9A, 0.1);
    // this.mirrors[2] = this.initMirror(new Vector3(0, 0, 7.5), new Vector3(0, Math.PI, 0), 0x969A9A, 0.1);

    this.initMonitors();

    // init controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target = new Vector3(-5, this.cameraY, 0);
    this.controls.enabled = false;

    // events
    window.addEventListener('resize', this.onWindowResize, false);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('click', this.onClick);
    projects.el.addEventListener('videoselect', this.onVideoSelect);
    projects.el.addEventListener('videochange', this.onVideoChange);
    projects.el.addEventListener('videoexit', this.onExitClick);


    this.clock = new Clock();
    this.isTweening = false;
    this.zoomed = false;

    // init animate
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
    this.composer.render(this.clock.getDelta());
    this.controls.update();
    tweenUpdate();


    if(this.cameraTarget.distanceTo(this.camera.position) > 0.05) {
      const direction = this.cameraTarget.clone().sub(this.camera.position).normalize();
      const parallaxSpeed = 0.005 * this.cameraTarget.distanceTo(this.camera.position);
      this.camera.position.x += Math.cos(this.cameraAngle) * direction.x * parallaxSpeed;
      this.camera.position.y += direction.y * parallaxSpeed;
      this.camera.position.z += Math.sin(this.cameraAngle) * direction.z * parallaxSpeed;
    }
    
    if(!this.isTweening) {
      this.isTweening = true;
      const transitionDuration = 1000;
      new Tween(this.rgbPass.uniforms.amount).to({value: 0.0025}, transitionDuration).easing(Easing.Quadratic.InOut).start().onComplete(() => {
        this.rgbPass.uniforms.amount.value = 0.001;

        const random = Math.random() * 1000 + 1000;
        setTimeout(() => this.isTweening = false, random);
      });
    }

    if (!this.zoomed) { this.monitors.forEach((monitor) => { monitor.update(); }); }
    
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.mirrors.forEach((mirror) => {
      mirror.getRenderTarget().setSize(
        window.innerWidth * window.devicePixelRatio,
        window.innerHeight * window.devicePixelRatio
      );
    });
  }

  getCameraAngle(view) {
    switch(view) {
      case 'About': 
        return Math.PI / 2;
      case 'Projects':
        return  0;
      case 'Resume':
        return -Math.PI / 2
    }
  }

  onViewHasChanged(current) {
    const previousTarget = new Vector3(-5 * Math.sin(this.cameraAngle), this.cameraY,-5 * Math.cos(this.cameraAngle));
    this.cameraAngle = this.getCameraAngle(current);
    const currentTarget = new Vector3(-5 * Math.sin(this.cameraAngle), this.cameraY,-5 * Math.cos(this.cameraAngle));
    const transitionDuration = 1000;
    
    if (previousTarget.angleTo(currentTarget) > 2) {
      new Tween(this.controls.target).to({x: currentTarget.z, y: currentTarget.y, z: currentTarget.x}, transitionDuration / 2).easing(Easing.Quadratic.In).start().onComplete(() => {
        new Tween(this.controls.target).to({x: currentTarget.x, y: currentTarget.y, z: currentTarget.z}, transitionDuration / 2).easing(Easing.Quadratic.Out).start();
      });
    }
    else new Tween(this.controls.target).to({x: currentTarget.x, y: currentTarget.y, z: currentTarget.z}, transitionDuration).easing(Easing.Quadratic.InOut).start();
  }

  onMouseMove(e) {
    const parallaxScale = 0.0005;
    const x = -Math.cos(this.cameraAngle) * (e.screenX - (window.innerWidth / 2)) * parallaxScale;
    const z = Math.sin(this.cameraAngle) * (e.screenX - (window.innerWidth / 2)) * parallaxScale;
    let y = (e.screenY - (window.innerHeight / 2)) * parallaxScale * 2 + 2;

    const minimumY = 0.1
    if (y < minimumY) y = minimumY;
    this.cameraTarget = new Vector3(x, y, z);
  }

  onVideoSelect(e) {
    const transitionDuration = 1000;
    this.zoomed = true;
    new Tween(this.camera.position).to({x: 0, y: this.cameraY, z: -3}, transitionDuration).easing(Easing.Quadratic.InOut).start();

    this.monitors[0].onZoomIn(new Vector3(0, this.cameraY, -5), false)
    // const random = Math.floor(Math.random() * (this.monitors.length - 1));
    // for (let i = 0; i < this.monitors.length; i += 1) {
    //   if (i === 0) this.monitors[i].onZoomIn(new Vector3(0, this.cameraY, -5), false);
    //   else {
    //     const customPosition = this.monitors[i].object.position.clone();
    //     customPosition.x *= 0.8;
    //     // customPosition.y *= 1.5;
    //     customPosition.z = -6;
    //     this.monitors[i].onZoomIn(customPosition);
    //   }
    // }
  }

  onExitClick() {
    new Tween(this.camera.position).to({z: 0}, 1000).easing(Easing.Quadratic.InOut).start().onComplete(() => {
      this.zoomed = false;
    });

    this.monitors.forEach((monitor) => monitor.onZoomOut());
  }

  onVideoChange(e) {
    this.monitors[0].setVideo(e.detail);
  }

  initMirror(position, rotation, color, opacity) {
    const geometry = new PlaneGeometry(100, 50, 32, 32);
    const material = new MeshBasicMaterial({ color: color, opacity: opacity, transparent: true });
    const overlay = new Mesh(geometry, material);
    overlay.position.set(position.x, position.y, position.z);
    overlay.rotation.setFromVector3(rotation);

    const mirror = new Reflector( geometry, {
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
    } );
    mirror.position.z = -0.001;

    overlay.add(mirror)
    this.scene.add(overlay);

    return mirror;
  }

  initMonitors() {
    this.monitors = [];

    const scale = new Vector3(16/2, 9 /2, 0.001);
    this.monitors[0] = new Monitor(this.scene, this.projects.video, new Vector3(0, 3, -7), new Vector3(0, 0, 0), scale);
    this.monitors[1] = new Monitor(this.scene, this.projects.video, new Vector3(-8, 3, -6.5), new Vector3(0, Math.PI / 25, 0), scale);
    this.monitors[2] = new Monitor(this.scene, this.projects.video, new Vector3(8, 3, -6.5), new Vector3(0, Math.PI / -25, 0), scale);

    this.projectsMonitor = this.monitors[0];
    
    // this.monitors[3] = new Monitor(this.scene, this.video, new Vector3(-5, this.cameraY, 0), new Vector3(2, 3, 2));
    // this.monitors[4] = new Monitor(this.scene, this.video, new Vector3(-4, this.cameraY + 1, 2.5), new Vector3(1, 1, 1));


  }

}
