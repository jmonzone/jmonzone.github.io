import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { Scene, PerspectiveCamera, WebGLRenderer, PointLight, Color, TextureLoader, sRGBEncoding, Fog} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Tween, Easing, update as tweenUpdate } from '@tweenjs/tween.js';

export default class Chess {
  constructor() {
    autoBind(this);
    this.el = createEl('div', { className: 'chess' }); 

    // create scene
    this.scene = new Scene();
    const backgroundColor = '#8FBC8F';
    this.scene.background = new Color(backgroundColor);
    this.scene.fog = new Fog(backgroundColor, 7, 7);


    // add camera
    this.camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.camera.position.set(0, 0, 6);

    this.duration = 2000;
    new Tween(this.camera.position).to({ x: 0, y: 3.5, z: 0.5}, this.duration).easing(Easing.Quadratic.InOut).start();


    // add rendererer
    this.renderer = new WebGLRenderer({powerPreference: 'low-power'});
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputEncoding = sRGBEncoding;
    addEl(this.el, this.renderer.domElement);

    // add lights
    this.light = new PointLight( 0xffffff, 1, 100 );
    this.light.position.set( 0, 2.5, 2.5 );
    this.scene.add( this.light );

    // add controls
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.controls.enabled = false;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.5;

    // init objects
    this.initChessboard();
    
    // init animate
    this.animate();

    window.addEventListener( 'resize', this.onWindowResize, false );
  }
  
  animate() {
    requestAnimationFrame( this.animate );
    this.renderer.render( this.scene, this.camera );
    this.controls.update();
    tweenUpdate();
  }
  
  onWindowResize(){
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );

}

  initChessboard() {

    const textureLoader = new TextureLoader();
    const texture = textureLoader.load( 'assets/models/chessboard/chess_board.jpg' );
    texture.encoding = sRGBEncoding;
    texture.flipY = false;

    const gltfloader = new GLTFLoader();

    const onLoad = (gltf) => {
      this.chessboard = gltf.scene;
      this.chessboard.scale.setScalar(0.1);
      this.chessboard.position.y += 1;
      // new Tween(this.chessboard.rotation).to({x: 0, y: Math.PI, z: 0}, this.duration).easing(Easing.Quadratic.InOut).start();

      this.chessboard .traverse ( ( o ) => {
        if ( o.isMesh ) {
          o.material.map = texture;
        }
      } );

      this.scene.add( this.chessboard );


    }

    // Load a glTF resource
    gltfloader.load('assets/models/chessboard/chessboard.gltf', onLoad,
      // called while loading is progressing
      function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      // called when loading has errors
      function ( error ) {
        console.log( 'An error happened' );
      }
    );
  }
}
