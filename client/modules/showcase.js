import { createEl } from 'lmnt';
import autoBind from 'auto-bind';

export default class Showcase {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'showcase' });
  }
}
