import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { projects } from './content.json';
import { Tween, Easing, update as tweenUpdate, add } from '@tweenjs/tween.js';

const buffer = 1; // amount of seconds before end of clip to start transition
const transitionDuration = 500;

export default class Projects {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'projects up' });

    this.videos = {}

    // add projects
    projects.forEach((project) => {

      const projectSelect = createEl('div', { className: 'projects-select', innerText: project.label });
      projectSelect.addEventListener('mouseenter', () => this.onMouseEnter(project));
      projectSelect.addEventListener('click', () => this.onClick(project));

      const video = createEl('video', { className: 'projects-video hidden', src: `assets/videos/${project.video}.mp4`});
      video.muted = true;
      video.loop = true;
      video.preload = true;
      video.play();
      this.videos[project.video] = video;

      addEl(projectSelect, video);
      addEl(this.el, projectSelect);
    });

    this.video = this.videos['test'];
    
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
    this.video = this.videos[project.video];

    const event = new Event('videochange');
      event.detail = this.video;
      this.el.dispatchEvent(event);
  }

}
