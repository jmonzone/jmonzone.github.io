import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { WebGLRenderer, sRGBEncoding, Clock, OrthographicCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Avatar {
  constructor(game) {
    autoBind(this);
    this.el = createEl('div', { className: 'about-avatar' }); 

    // create scene
    this.scene = game.scene;
    this.game = game;

    // add camera
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10 );
    this.camera.position.set(0, 0.75, 2);

    // add rendererer
    this.renderer = new WebGLRenderer({powerPreference: 'low-power'});
    this.renderer.setSize( this.el.clientWidth, this.el.clientHeight );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputEncoding = sRGBEncoding;
    addEl(this.el, this.renderer.domElement);

    this.clock = new Clock();

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = false;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.5;

    // events
    window.addEventListener( 'resize', this.onWindowResize, false );

    // init animate
    this.animate();
  }
  
  animate() {
    requestAnimationFrame( this.animate );
    this.renderer.render( this.scene, this.camera );
    if(this.game.pidgeon) {
        const target = new Vector3(this.game.pidgeon.position.x, this.game.pidgeon.position.y + 0.75, this.game.pidgeon.position.z);
        this.controls.target = target;
    }
    this.controls.update();
  }

  onWindowResize(){
    this.camera.aspect = this.el.clientWidth / this.el.clientHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( this.el.clientWidth, this.el.clientHeight );
  }

  show() {
      this.onWindowResize();
  }
}
