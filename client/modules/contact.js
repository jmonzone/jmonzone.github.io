import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';

export default class Contact {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'contact hidden' }); 

    this.content = createEl('dive', {className: 'contact-content', innerText: 'LinkedIn: jmonzone'});
    addEl(this.el, this.content);

  }

  show() {
    this.el.classList.remove('hidden');
  }

  hide() {
    this.el.classList.add('hidden');
  }
}