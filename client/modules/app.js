import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import onChange from 'on-change';

export default class App {
  constructor() {
    autoBind(this);

    const state = {};
    this.state = onChange(state, this.update);

    this.el = createEl('div', { className: 'app', innerText: 'friend' }); 
  }

  update(path, current, previous) {
    console.log(path, ':', previous, ' -> ', current);
  }
}
