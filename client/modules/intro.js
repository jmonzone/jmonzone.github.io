import { addEl, createEl } from 'lmnt';

export default class Intro {
  constructor() {
    this.el = createEl('div', { className: 'intro' });
    this.title = createEl('div', { className: 'intro-title', innerText: 'Johnnan Monzon' });
    this.subtitle = createEl('div', { className: 'intro-subtitle', innerText: 'XR Developer' });
    this.description = createEl('div', { className: 'intro-description', innerText: 'Currently making games, websites, and AR/VR stuff' });

    this.resumeButton = createEl('div', { className: 'intro-resume', innerHTML: '<a href=\'assets/resume.pdf\' target="_blank">Resume/CV</a>' });
    this.contactButton = createEl('div', { className: 'intro-contact', innerHTML: '<a href="mailto:jjsalomonzon@gmail.com">Contact</a>' });

    addEl(this.el, this.title, this.subtitle, this.description, this.resumeButton, this.contactButton);
  }
}
