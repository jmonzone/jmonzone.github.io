import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { Scene, PerspectiveCamera, WebGLRenderer, PointLight, Color, sRGBEncoding, Fog, AnimationClip, AnimationMixer, Clock, PlaneGeometry, MeshBasicMaterial, DoubleSide,  Mesh, LoopOnce, Raycaster, Vector3, Vector2} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Tween, Easing, update as tweenUpdate } from '@tweenjs/tween.js';

export default class Game {
  constructor() {
    autoBind(this);
    this.el = createEl('div', { className: 'chess' }); 

    // create scene
    this.scene = new Scene();
    const backgroundColor = '#8FBC8F';
    this.scene.background = new Color(backgroundColor);
    this.scene.fog = new Fog(backgroundColor, 0, 25);

    // add camera
    this.camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.camera.position.set(0, 5, 5);
    this.camera.lookAt(0, 0, 0);

    // add rendererer
    this.renderer = new WebGLRenderer({powerPreference: 'low-power'});
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputEncoding = sRGBEncoding;
    addEl(this.el, this.renderer.domElement);

    // init objects
    this.initPidgeon();

    const geometry = new PlaneGeometry( 100, 50, 32, 32 );
    const material = new MeshBasicMaterial( {color: 0x003333} );
    this.plane = new Mesh( geometry, material );
    this.plane.rotateX(-Math.PI / 2);
    this.scene.add( this.plane );
    
    

    this.clock = new Clock();
    this.mouse = new Vector2();
    this.target = new Vector3();
    this.raycaster = new Raycaster();

    // events
    window.addEventListener( 'resize', this.onWindowResize, false );
    this.listen();

    // init animate
    this.animate();
  }

  listen() {
    window.addEventListener( 'mousemove', this.onMouseMove);
    window.addEventListener( 'click', this.onMouseClick);
  }
  
  unlisten() {
    window.removeEventListener( 'mousemove', this.onMouseMove);
    window.removeEventListener( 'click', this.onMouseClick);
  }

  animate() {
    requestAnimationFrame( this.animate );
    this.renderer.render( this.scene, this.camera );
    tweenUpdate();

    if (this.pidgeon) {
      const xDir = this.target.x - this.pidgeon.position.x;
      const zDir = this.target.z * 0.75 - this.pidgeon.position.z;

      this.pidgeon.lookAt(this.target.x, 0 , this.target.z);

      this.pidgeon.position.x += xDir * 0.01;
      this.pidgeon.position.z += zDir * 0.01;
    }

    // TODO improve logic
    if(this.mixer) this.mixer.update(this.clock.getDelta());
  }

  initPidgeon() {

    const gltfloader = new GLTFLoader();

    const onLoad = (gltf) => {

      this.pidgeon = gltf.scene;
      this.pidgeon.scale.setScalar(0.01);
      this.pidgeon.rotation.set(0, Math.PI / 4, 0);

      this.scene.add( this.pidgeon );

      this.mixer = new AnimationMixer( this.pidgeon );
      this.mixer.timeScale = 0.5;
      this.clips = gltf.animations;

      // Play a specific animation
      // this.idleAnim = AnimationClip.findByName( this.clips, 'Idle' );
      // const action = this.mixer.clipAction( this.idleAnim  );
      // action.play();

      this.flyAnim = AnimationClip.findByName( this.clips, 'Fly' );
      const action = this.mixer.clipAction( this.flyAnim  );
      action.play();

      this.peckAnim = AnimationClip.findByName( this.clips, 'Peck' );

    }

    gltfloader.load('assets/models/scene.gltf', onLoad);
  }

  onMouseMove(e){
    this.mouse.x = -((this.el.clientWidth / 2) - e.clientX) / (this.el.clientWidth / 2);
    this.mouse.y = ((this.el.clientHeight / 2) - e.clientY) / (this.el.clientHeight / 2);  

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.plane);

    if (intersects.length > 0) this.target = intersects[0].point;
  }

  onMouseClick(e) {
    const action = this.mixer.clipAction( this.peckAnim  );
    action.setLoop(LoopOnce);
    action.reset();
    action.play();
  }

  onWindowResize(){
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }
}
