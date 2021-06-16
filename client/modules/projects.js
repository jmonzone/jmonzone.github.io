import { addEl, createEl } from 'lmnt';
import VanillaTilt from 'vanilla-tilt';
import { projects } from './content.json';


export default class Projects {
  constructor() {
    this.el = createEl('div', { className: 'projects' });
    this.header = createEl('div', { className: 'projects-header', innerText: 'Projects' });
    this.gallery = createEl('div', { className: 'projects-gallery' });

    Object.keys(projects).forEach((projectName) => {
      const project = createEl('div', { className: 'projects-gallery-project' }, {}, { click: () => {
        window.open('assets/websites/pewter/index.html');
      } });
      const label = createEl('div', { className: 'projects-gallery-project-label', innerText: projects[projectName].label });

      let card = null;
      if (projects[projectName].video) {
        card = createEl('video', { className: 'projects-gallery-project-video', src: `assets/videos/${projects[projectName].video}.mp4`, volume: 0 }, { autoplay: true, muted: true, loop: true });
      } else if (projects[projectName].image) {
        card = createEl('img', { className: 'projects-gallery-project-video', src: `assets/images/projects/${projects[projectName].image}` });
      } else if (projects[projectName].gif) {
        card = createEl('img', { className: 'projects-gallery-project-video', src: projects[projectName].gif });
      }

      addEl(project, card, label);


      VanillaTilt.init(project, {
        reverse: true,
        speed: 10000,
      });

      addEl(this.gallery, project);
    });
    addEl(this.el, this.header, this.gallery);
    //   this.uparrow = createEl('img', { className: 'projects-arrow up', src: 'assets/images/arrow.png' });
    //   this.downarrow = createEl('img', { className: 'projects-arrow down', src: 'assets/images/arrow.png' });
    //   addEl(this.el, this.slider, this.uparrow, this.downarrow);

    //
  //   });
  }
}
