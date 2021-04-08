import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';

export default class Contact {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'contact hidden', innerText: 'Johnnan Monzon' }); 

    // add header
    this.name = createEl('div', {className: 'contact-name'});
    addEl(this.el, this.name);
  }
  
  show() {
      this.el.classList.remove('hidden');
    }

  hide() {
    this.el.classList.add('hidden');
  }
}
