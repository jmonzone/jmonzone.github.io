import autoBind from 'auto-bind';
import { BoxGeometry, MeshBasicMaterial, Mesh, VideoTexture, Vector3 } from 'three';

import { Tween, Easing, update as tweenUpdate } from '@tweenjs/tween.js';

export default class Monitor {
  constructor(scene, video, position, scale = new Vector3(1, 1, 1)) {
    autoBind(this);

    this.scene = scene;
    this.defaultPosition = position;
    this.defaultScale = scale;

    const texture = new VideoTexture(video);
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ map: texture, opacity: 1, transparent: true });
    this.object = new Mesh(geometry, material);
    this.object.position.set(position.x, position.y, position.z);
    this.object.scale.set(scale.x, scale.y, scale.z);
    this.scene.add(this.object);

    this.rotationSpeed = 0.01;
  }

  update() {
      this.object.rotation.y += this.rotationSpeed;
  }

  setVideo(video) {
      const texture = new VideoTexture(video);
      this.object.material.map = texture;
  }

  onZoomIn(customPosition = this.defaultPosition, customScale = new Vector3(1, 1, 1), spin = true) {
    const transitionDuration = 1000;
    new Tween(this.object.position).to({x: customPosition.x, y: customPosition.y, z: customPosition.z}, transitionDuration).easing(Easing.Quadratic.InOut).start();
    new Tween(this.object.scale).to({x: customScale.x, y: customScale.y, z: customScale.z}, transitionDuration).easing(Easing.Quadratic.InOut).start();
   
    if (spin) new Tween(this.object.rotation).to({x: Math.PI * 2, y: Math.PI * 2, z: Math.PI * 2}, transitionDuration * 1.5).easing(Easing.Quadratic.InOut).start();
    else new Tween(this.object.rotation).to({y: 0}, transitionDuration).easing(Easing.Quadratic.InOut).start();

}

  onZoomOut() {
    const transitionDuration = 1000;
    new Tween(this.object.position).to({x: this.defaultPosition.x, y:  this.defaultPosition.y, z:  this.defaultPosition.z}, transitionDuration).easing(Easing.Quadratic.InOut).start();
    new Tween(this.object.scale).to({x: this.defaultScale.x, y: this.defaultScale.y, z: this.defaultScale.z}, transitionDuration).easing(Easing.Quadratic.InOut).start();
    new Tween(this.object.rotation).to({x: 0, y: 0, z: 0}, transitionDuration).easing(Easing.Quadratic.InOut).start();

  }
}
