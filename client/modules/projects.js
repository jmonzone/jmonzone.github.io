import { addEl, createEl } from 'lmnt';
import VanillaTilt from 'vanilla-tilt';
import { projects } from './content.json';

export default class Projects {
  constructor() {
    this.el = createEl('div', { className: 'projects', id: 'projects' });
    this.header = createEl('div', { className: 'projects-header', innerText: 'Projects' });
    this.projects = createEl('div', { className: 'projects-projects' });
    Object.keys(projects).forEach((projectName) => {
      const project = createEl('div', { className: 'projects-projects-project' });
      const projectVideo = createEl('video', { className: 'projects-projects-project-video', src: `assets/videos/${projects[projectName].video}.mp4`, volume: 0 }, { autoplay: true, muted: true, loop: true });
      const projectLabel = createEl('div', { className: 'projects-projects-project-label', innerText: projects[projectName].label });

      VanillaTilt.init(project, {
        reverse: true,
        speed: 10000,
      });

      addEl(project, projectVideo, projectLabel);
      addEl(this.projects, project);
    });

    addEl(this.el, this.header, this.projects);
  }
}
