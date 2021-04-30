import autoBind from 'auto-bind';
import { addEl, createEl } from 'lmnt';
import { AdditiveBlending, BufferAttribute, BufferGeometry, Clock, Color, Fog, Mesh, MeshBasicMaterial, PerspectiveCamera, Points, PointsMaterial, Scene, SphereBufferGeometry, TextureLoader, Vector2, WebGLRenderer } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class SceneManager {
  constructor() {
    autoBind(this);
    this.el = createEl('div', { className: 'scene' });
    this.scene = new Scene();
    this.scene.fog = new Fog(new Color(0x555555), 1, 4);

    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 1);

    this.renderer = new WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    addEl(this.el, this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minPolarAngle = 0;
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.enablePan = false;
    this.controls.enableZoom = false;

    this.composer = new EffectComposer(this.renderer);

    const renderPass = new RenderPass(this.scene, this.camera);
    const bloomPass = new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 1, 1, 0.8);

    this.composer.addPass(renderPass);
    this.composer.addPass(bloomPass);


    this.createParticles();
    this.createEnviroment();
    // this.createPlane();

    this.mouse = new Vector2();
    this.clock = new Clock();
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', this.onResize);

    this.update();
  }

  onMouseMove({ clientX, clientY }) {
    this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = (clientY / window.innerHeight) * 2 + 1;
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.composer.setSize(window.innerWidth, window.innerHeight);
  }

  update() {
    requestAnimationFrame(this.update);
    this.renderer.render(this.scene, this.camera);
    this.controls.update();
    this.composer.render();

    if (this.enviroment) this.enviroment.rotation.y += 0.001;
    this.particles.rotation.y += 0.001;
  }

  createEnviroment() {
    const geometry = new SphereBufferGeometry(1, 100, 50);
    const radius = 2;
    geometry.scale(radius, radius, -radius);
    new TextureLoader().load('assets/images/enviroment.jpg', (map) => {
      const material = new MeshBasicMaterial({ map });
      this.enviroment = new Mesh(geometry, material);
      this.scene.add(this.enviroment);
    });
  }

  createParticles() {
    const geometry = new BufferGeometry();
    const particlesCount = 500;

    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 1) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    geometry.setAttribute('position', new BufferAttribute(positions, 3));


    const loader = new TextureLoader();
    const sprite = loader.load('assets/images/favicon.png');
    const material = new PointsMaterial({
      size: 0.01,
      map: sprite,
      transparent: true,
      blending: AdditiveBlending,
    });

    this.particles = new Points(geometry, material);
    this.scene.add(this.particles);
  }
}
