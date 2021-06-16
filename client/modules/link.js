import { addEl, createEl } from 'lmnt';

export default class Link {
  constructor({ label, sublabel, url }) {
    this.el = createEl('div', { className: 'link' }, {}, { click: () => window.open(url) });
    this.image = createEl('img', { className: 'link-image', src: `assets/images/links/${label}.png` });
    this.label = createEl('div', { className: 'link-label', innerText: label });
    this.sublabel = createEl('div', { className: 'link-sublabel', innerText: sublabel });
    addEl(this.el, this.image, this.label, this.sublabel);
  }
}
