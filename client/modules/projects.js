import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { projects } from './content.json';
export default class Projects {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'projects up' });

    this.videos = {}
    this.projectSelects = {}

    // add projects
    Object.keys(projects).forEach((project) => {

      const projectSelect = createEl('div', { className: 'projects-select', innerText: projects[project].label });
      projectSelect.addEventListener('mouseenter', () => this.onMouseEnter(project));
      projectSelect.addEventListener('click', () => this.onClick(project));
      this.projectSelects[project] = projectSelect;

      const video = createEl('video', { className: 'projects-video hidden', src: `assets/videos/${projects[project].video}.mp4`}, {}, {});
      video.muted = true;
      video.loop = true;
      video.preload = true;
      video.play();

      this.videos[projects[project].video] = video;
      

      addEl(projectSelect, video);
      addEl(this.el, projectSelect);
    });

    this.video = this.videos['earthbending'];
    
  }

  show() {
    this.el.classList.remove('up');
  }

  hide() {
    this.el.classList.add('up');
  }

  onClick(project) {
    const event = new Event('videoselect');
    event.detail = this.video;
    this.el.dispatchEvent(event);

    this.el.classList.add('up');

    setTimeout(() => window.addEventListener('click', this.onExitClick), 100);
  }

  onExitClick() {
    window.removeEventListener('click', this.onExitClick);
    this.el.classList.remove('up');

    const event = new Event('videoexit');
    this.el.dispatchEvent(event);
  }

  onMouseEnter(project) {
    this.video = this.videos[project];
    const event = new Event('videochange');
    event.detail = this.video;
    this.el.dispatchEvent(event);
  }

}
