import { addEl, createEl } from 'lmnt';

export default class Navigation {
  constructor(about) {
    this.el = createEl('div', { className: 'navigation' });

    this.logo = createEl('div', { className: 'navigation-logo' });
    this.name = createEl('div', { className: 'navigation-logo-name', innerText: 'Johnnan Monzon' });
    this.title = createEl('div', { className: 'navigation-logo-title', innerText: 'XR Developer' });
    addEl(this.logo, this.name, this.title);

    this.buttons = createEl('div', { className: 'navigation-buttons' });
    this.about = createEl('div', { className: 'navigation-buttons-button', innerHTML: '<a href=\'#about\'>About</a>' });
    this.projects = createEl('div', { className: 'navigation-buttons-button', innerHTML: '<a href=\'#projects\'>Projects</a>' });
    this.resume = createEl('div', { className: 'navigation-buttons-button', innerHTML: '<a href=\'assets/resume.pdf\' target="_blank">Resume/CV</a>' });
    addEl(this.buttons, this.about, this.projects, this.resume);

    addEl(this.el, this.logo, this.buttons);
  }
}
