import { addEl, createEl } from 'lmnt';
import VanillaTilt from 'vanilla-tilt';
import { projects } from './content.json';

export default class Home {
  constructor() {
    this.el = createEl('div', { className: 'home' });

    this.intro = createEl('div', { className: 'home-intro' });
    this.header = createEl('div', { className: 'home-intro-header', innerHTML: 'Welcome to my portfolio :)' });
    this.subheader = createEl('div', { className: 'home-intro-subheader', innerHTML: 'I make video games, websites, and AR/VR experiences' });
    this.viewProjectsButton = createEl('div', { className: 'home-intro-view-projects', innerHTML: '<a href=\'#projects\'>View Projects</a>' });
    this.contactButton = createEl('div', { className: 'home-intro-contact-button', innerHTML: '<a href="mailto:someone@yoursite.com">Say Hello</a>' });
    addEl(this.intro, this.header, this.subheader, this.viewProjectsButton, this.contactButton);

    this.projects = createEl('div', { className: 'home-projects' });
    Object.keys(projects).forEach((projectName) => {
      const project = createEl('div', { className: 'home-projects-project' });
      const projectVideo = createEl('video', { className: 'home-projects-project-video', src: `assets/videos/${projects[projectName].video}.mp4`, volume: 0 }, { autoplay: true, muted: true, loop: true });
      const projectLabel = createEl('div', { className: 'home-projects-project-label', innerText: projects[projectName].label });

      VanillaTilt.init(project, {
        reverse: true,
        'full-page-listening': true,
        speed: 10000,
      });

      addEl(project, projectVideo, projectLabel);
      addEl(this.projects, project);
    });

    addEl(this.el, this.intro, this.projects);
  }
}
