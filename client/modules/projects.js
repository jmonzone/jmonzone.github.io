import { addEl, createEl } from 'lmnt';
import PrettyList from 'prettylist';
import { projects } from './content.json';


export default class Projects {
  constructor() {
    this.el = createEl('div', { className: 'projects' });
    this.slider = createEl('div', { className: 'projects-slider' });
    this.uparrow = createEl('img', { className: 'projects-arrow up', src: 'assets/images/arrow.png' });
    this.downarrow = createEl('img', { className: 'projects-arrow down', src: 'assets/images/arrow.png' });
    addEl(this.el, this.slider, this.uparrow, this.downarrow);
    // addEl(this.el, this.slider);

    const items = [];

    Object.keys(projects).forEach((projectName) => {
      const project = createEl('div', { className: 'projects-slider-project' }, {}, { click: () => {
        if (projects[projectName].url) window.open(projects[projectName].url);
      } });

      const label = createEl('div', { className: 'projects-slider-project-label', innerText: projects[projectName].label });

      let card = null;
      if (projects[projectName].video) {
        card = createEl('video', { className: 'projects-slider-project-video', src: `assets/videos/${projects[projectName].video}.mp4`, volume: 0 }, { autoplay: true, muted: true, loop: true });
      } else if (projects[projectName].image) {
        card = createEl('img', { className: 'projects-slider-project-video', src: `assets/images/projects/${projects[projectName].image}` });
      } else if (projects[projectName].gif) {
        card = createEl('img', { className: 'projects-slider-project-video', src: projects[projectName].gif });
      }

      addEl(project, card, label);

      items.push(project);
    });

    const list = new PrettyList(items, this.slider, {
      visible: 3,
      rotation: 5,
      loop: true,
    });
  }
}
