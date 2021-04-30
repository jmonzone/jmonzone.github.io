import { addEl, createEl } from 'lmnt';
import VanillaTilt from 'vanilla-tilt';
import { projects } from './content.json';


export default class Projects {
  constructor() {
    this.el = createEl('div', { className: 'projects' });
    this.slider = createEl('div', { className: 'projects-slider' });

    addEl(this.el, this.slider);

    Object.keys(projects).forEach((projectName) => {
      const project = createEl('div', { className: 'projects-slider-project' });
      const label = createEl('div', { className: 'projects-slider-project-label', innerText: projects[projectName].label });

      if (projects[projectName].video) {
        const video = createEl('video', { className: 'projects-slider-project-video', src: `assets/videos/${projects[projectName].video}.mp4`, volume: 0 }, { autoplay: true, muted: true, loop: true });
        addEl(project, video);
      }

      if (projects[projectName].image) {
        const image = createEl('img', { className: 'projects-slider-project-video', src: `assets/images/projects/${projects[projectName].image}.png` });
        addEl(project, image);
      }

      addEl(project, label);


      VanillaTilt.init(project, {
        reverse: true,
        speed: 10000,
      });

      addEl(this.slider, project);
    });
  }
}
