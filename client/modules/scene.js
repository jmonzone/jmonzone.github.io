import autoBind from 'auto-bind';
import { addEl, createEl } from 'lmnt';
import { Color, Mesh, MeshBasicMaterial, PerspectiveCamera, PointLight, Scene, SphereBufferGeometry, TextureLoader, Vector2, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import { EffectPass } from 'three/examples/jsm/shaders/Eff';


export default class SceneManager {
  constructor() {
    autoBind(this);
    this.el = createEl('div', { className: 'scene' });
    // this.overlay = createEl('div', { className: 'scene-overlay' });
    // addEl(this.el, this.overlay);

    this.scene = new Scene();
    // this.scene.background = new Color(0xdddddd);

    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0.00001, 0, 0);

    this.renderer = new WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    addEl(this.el, this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enabled = false;
    // this.controls.rotateSpeed = 1000;
    // this.composer = new EffectComposer(this.renderer);

    // const renderPass = new RenderPass(this.scene, this.camera);
    // const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 10, 1, 0.87);

    // this.composer.addPass(renderPass);
    // this.composer.addPass(bloomPass);


    // this.createLights();
    this.loadEnviroment();
    this.update();
  }

  update() {
    requestAnimationFrame(this.update);
    this.renderer.render(this.scene, this.camera);
    this.controls.update();
    // this.composer.render();
  }

  loadEnviroment() {
    this.sphere = new SphereBufferGeometry(1, 100, 50);
    this.sphere.scale(1, 1, -1);
    new TextureLoader().load('assets/images/enviroment.jpg', (map) => {
      const panoramaNew = new Mesh(this.sphere, new MeshBasicMaterial({ map }));
      this.scene.add(panoramaNew);
    });
  }

  createLights() {
    const sun = new PointLight(0xffffff, 1);
    sun.position.set(0, 0, 0);
    this.scene.add(sun);
  }
}
