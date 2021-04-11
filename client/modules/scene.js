import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { Scene, PerspectiveCamera, WebGLRenderer, Color, Fog, TextureLoader, BoxGeometry, PlaneGeometry, MeshBasicMaterial, Mesh, AmbientLight, VideoTexture, Vector3, Vector2, RepeatWrapping, MirroredRepeatWrapping, MeshPhysicalMaterial, Clock } from 'three';

import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import { Tween, Easing, update as tweenUpdate } from '@tweenjs/tween.js';

const degToRad = deg => deg / 180 * Math.PI;

export default class SceneManager {
  constructor(projects) {
    autoBind(this);

    this.video = projects.video;


    this.el = createEl('div', { className: 'game' });

    // create scene
    this.scene = new Scene();
    const backgroundColor = '#000000';
    this.scene.background = new Color(backgroundColor);
    this.scene.fog = new Fog(backgroundColor, 0, 25);

    // add camera
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 1, 0);
    this.cameraTarget = this.camera.position;

    // add rendererer
    this.renderer = new WebGLRenderer({ powerPreference: 'low-power' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    addEl(this.el, this.renderer.domElement);

    this.composer = new EffectComposer( this.renderer );

    const renderPass = new RenderPass( this.scene, this.camera );
    this.composer.addPass(renderPass);


    const bloomPass = new UnrealBloomPass( new Vector2( window.innerWidth, window.innerHeight ), 0.5, 1, 0 );
    this.composer.addPass(bloomPass);


    this.rgbPass = new ShaderPass( RGBShiftShader );
    this.rgbPass.uniforms.amount.value = 0.001;
    this.composer.addPass( this.rgbPass );

    // init objects
    this.initGround();
    this.initProjects();

    // init controls
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.target = new Vector3(0, this.camera.position.y, 0);
    // this.controls.update();

    // events
    window.addEventListener('resize', this.onWindowResize, false);
    window.addEventListener('mousemove', this.onMouseMove);
    projects.el.addEventListener('videoselect', this.onVideoSelect);
    projects.el.addEventListener('videochange', this.onVideoChange);
    projects.el.addEventListener('videoexit', this.onExitClick);


    this.clock = new Clock();
    this.isTweening = false;
    this.zoomed = false;

    // init animate
    this.animate();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.groundMirror.getRenderTarget().setSize(
      window.innerWidth * window.devicePixelRatio,
      window.innerHeight * window.devicePixelRatio
    );
  }

  onMouseMove(e) {
    const x = (e.screenX - (window.innerWidth / 2)) * 0.0005;
    const y = (e.screenY - (window.innerHeight / 2)) * 0.0005;

    this.camera.position.set(x, -y + 1, this.camera.position.z);

  }

  onVideoSelect(e) {
    this.zoomed = true;
    new Tween(this.camera.position).to({z: -3}, 1000).easing(Easing.Quadratic.InOut).start();
  }

  onExitClick() {
    new Tween(this.camera.position).to({z: 0}, 1000).easing(Easing.Quadratic.InOut).start().onComplete(() => {
      this.zoomed = false;
    });
  }

  onVideoChange(e) {
    if (this.zoomed) return;

    if(!this.isTweening) {
      this.isTweening = true;
      new Tween(this.rgbPass.uniforms.amount).to({value: 0.01}, 1000).easing(Easing.Quadratic.In).start().onComplete(() => {
        this.rgbPass.uniforms.amount.value = 0.001;
        this.isTweening = false;
      });
    }

    const texture = new VideoTexture(e.detail);
    this.projects.forEach((project) => {
      project.material.map = texture;
    })
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
    this.composer.render(this.clock.getDelta());


    if(!this.isTweening && this.zoomed) {
      this.isTweening = true;
      new Tween(this.rgbPass.uniforms.amount).to({value: 0.01}, 500).easing(Easing.Quadratic.InOut).start().onComplete(() => {
        this.rgbPass.uniforms.amount.value = 0.001;

        const random = Math.random() * 5000 + 5000;
        setTimeout(() => this.isTweening = false, random);
      });
    }

    tweenUpdate();

    this.projects.forEach((project) => {
      project.rotation.x += 0.001;
      project.rotation.y += 0.001;
      project.rotation.z += 0.001;
    });
  }

  initGround() {
    const geometry = new PlaneGeometry(100, 50, 32, 32);
    const material = new MeshBasicMaterial({ color: 0x000011, opacity: 0.75, transparent: true });
    this.ground = new Mesh(geometry, material);
    this.ground.position.set(0, 0, 0);
    this.ground.rotateX(-Math.PI / 2);
    this.scene.add(this.ground);

    this.groundMirror = new Reflector( geometry, {
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
    } );
    this.groundMirror.position.y = -0.01;
    this.groundMirror.rotateX( - Math.PI / 2 );
    this.scene.add(this.groundMirror)


  }

  initProjects() {
    this.projects = [];

    for ( let i = 0; i < 3; i += 1) {
      const position = new Vector3((i - 1) * 2, 1, -5);
      this.projects[i] = this.createTV(position);
    }
  }

  createTV(position) {

    const texture = new VideoTexture(this.video);
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ map: texture, opacity: 0.75, transparent: true });
    const tv = new Mesh(geometry, material);
    tv.position.set(position.x, position.y, position.z);


    this.scene.add(tv);
    return tv;
  }
}
