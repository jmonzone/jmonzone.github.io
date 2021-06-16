import { addEl, createEl } from 'lmnt';
import Link from './link';

export default class Intro {
  constructor() {
    this.el = createEl('div', { className: 'intro' });
    this.title = createEl('div', { className: 'intro-title', innerText: 'Game Developer' });
    this.name = createEl('div', { className: 'intro-name', innerText: 'Johnnan Monzon' });

    this.wrapper = createEl('div', { className: 'intro-wrapper' });
    this.links = createEl('div', { className: 'intro-links' });

    const linkInfo = [
      {
        label: 'LinkedIn',
        sublabel: 'jmonzone',
        url: 'https://www.linkedin.com/in/jmonzone/',
      },
      {
        label: 'Email',
        sublabel: 'jjsalomonzon@gmail.com',
        url: 'mailto:jjsalomonzon@gmail.com',
      },
      {
        label: 'Resume',
        sublabel: 'Open as PDF',
        url: 'assets/resume.pdf',
      },
    ];

    linkInfo.forEach((info) => {
      const link = new Link(info);
      addEl(this.links, link.el);
    });

    this.about = createEl('div', { className: 'intro-about', innerText: 'A developer with a background in designing games, websites, and AR/VR experiences. I am always on the lookout for innovative projects to work on and people to work with.' });
    this.divider = createEl('div', { className: 'intro-divider' });

    addEl(this.wrapper, this.links, this.divider, this.about);
    addEl(this.el, this.title, this.name, this.wrapper);
  }
}
