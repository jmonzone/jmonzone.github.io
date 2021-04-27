import { addEl, createEl } from 'lmnt';

export default class About {
  constructor() {
    this.el = createEl('div', { className: 'about', id: 'about' });
    this.headshot = createEl('img', { className: 'about-headshot', src: 'assets/images/headshot.png' });
    this.description = createEl('div', { className: 'about-description' });
    this.header = createEl('div', { className: 'about-description-header', innerText: 'About Me' });
    this.body = createEl('div', { className: 'about-description-body', innerText: 'Hi reader, I’m a software developer, eager to dive into cool and innovative projects. I am interested in designing video games, websites, and augmented/virtual reality experiences (AR/VR). Hit me up if you have something to work on.' });
    addEl(this.description, this.header, this.body);
    addEl(this.el, this.headshot, this.description);
  }
}
