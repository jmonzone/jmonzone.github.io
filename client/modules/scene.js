import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { Scene, PerspectiveCamera, WebGLRenderer, Color, Fog, TextureLoader, BoxGeometry, PlaneGeometry, MeshBasicMaterial, Mesh, AmbientLight, VideoTexture, Vector3, Vector2, RepeatWrapping, MirroredRepeatWrapping } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { monitors } from './content.json';

const degToRad = deg => deg / 180 * Math.PI;

export default class SceneManager {
  constructor(videos) {
    autoBind(this);

    this.videos = videos;

    this.el = createEl('div', { className: 'game' });

    // create scene
    this.scene = new Scene();
    const backgroundColor = '#8FBC8F';
    this.scene.background = new Color(backgroundColor);
    this.scene.fog = new Fog(backgroundColor, 0, 25);

    // add camera
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 2, 5);

    // add rendererer
    this.renderer = new WebGLRenderer({ powerPreference: 'low-power' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    addEl(this.el, this.renderer.domElement);

    // init objects
    this.initGround();
    this.initProjects();

    const light = new AmbientLight(0x404040); // soft white light
    this.scene.add(light);

    // init controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // events
    window.addEventListener('resize', this.onWindowResize, false);

    // init animate
    this.animate();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);

    this.projects.forEach((project) => {
      // project.rotation.x += 0.01;
      // project.rotation.y += 0.001;
      // project.rotation.z += 0.01;
    });
  }

  initGround() {
    const geometry = new PlaneGeometry(100, 50, 32, 32);
    const texture = new TextureLoader().load('assets/images/floor.jpg');
    texture.repeat = MirroredRepeatWrapping;
    const material = new MeshBasicMaterial({ color: 0xffffff, map: texture });
    this.ground = new Mesh(geometry, material);
    this.ground.position.set(0, 0, 0);
    this.ground.rotateX(-Math.PI / 2);
    this.scene.add(this.ground);
  }

  initProjects() {
    this.projects = [];

    Object.keys(monitors).forEach((monitor, index) => {
      const position = new Vector3((index - 1) * 2, Math.random() + 1, 0);
      this.createTV(monitor, position, (tv) => { this.projects[index] = tv; });
    });
  }

  createTV(monitorType, position, onLoaded) {
    const loader = new GLTFLoader();

    const onLoad = (gltf) => {
      const tv = gltf.scene;
      tv.position.set(position.x, position.y, position.z);
      tv.scale.setScalar(monitors[monitorType].monitor.scale);
      tv.lookAt(this.camera.position.x, tv.position.y, this.camera.position.z);
      tv.rotateOnAxis(new Vector3(0, 1, 0), degToRad(monitors[monitorType].monitor.rotation));

      const aspect = monitors[monitorType].screen.aspect;
      const screen = this.createScreen(aspect.width, aspect.height);

      const screenPosition = monitors[monitorType].screen.position;
      screen.position.set(screenPosition.x, screenPosition.y, screenPosition.z);
      screen.rotateOnAxis(new Vector3(0, 1, 0), degToRad(monitors[monitorType].screen.rotation));

      screen.scale.setScalar(monitors[monitorType].screen.scale);
      tv.add(screen);

      this.scene.add(tv);
      onLoaded(tv);
    };
    // Load a glTF resource
    loader.load(`assets/models/tvs/${monitorType}/${monitors[monitorType].gltf}.gltf`, onLoad);
  }

  createScreen(width = 1, height = 1) {
    const texture = new VideoTexture(this.videos.test);

    const geometry = new PlaneGeometry(width, height);
    const material = new MeshBasicMaterial({ color: 0xffffff, map: texture });
    const screen = new Mesh(geometry, material);
    return screen;
  }
}
