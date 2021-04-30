import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import onChange from 'on-change';
import SceneManager from './scene';

export default class App {
  constructor() {
    autoBind(this);

    const state = {
      view: null, // <string> ['About', 'Projects', 'Resume']
    };
    this.state = onChange(state, this.update);

    this.el = createEl('div', { className: 'app' });
    this.scene = new SceneManager();
    addEl(this.el, this.scene.el);
  }


  update(path, current, previous) {
    console.log(path, ':', previous, ' -> ', current);
  }
}
