import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { projects } from './content.json';
import { Tween, Easing, update as tweenUpdate, add } from '@tweenjs/tween.js';

const buffer = 1; // amount of seconds before end of clip to start transition
const transitionDuration = 500;

export default class Projects {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'projects' });

    this.video = createEl('video', { className: 'projects-video hidden', src: 'assets/videos/test.mp4'});
    this.video.muted = true;
    this.video.play();
    addEl(this.el, this.video);

    // add projects
    projects.forEach((project) => {

      const projectSelect = createEl('div', { className: 'projects-select', innerText: project.label });
      projectSelect.addEventListener('mouseenter', () => this.onMouseEnter(project));
      projectSelect.addEventListener('click', () => this.onClick(project));

      addEl(this.el, projectSelect);

    });
    
  }

  onClick(project) {
    const event = new Event('videoselect');
    event.detail = this.video;
    this.el.dispatchEvent(event);

    this.el.classList.add('up');

    setTimeout(() => window.addEventListener('click', this.onExitClick), 100);
  }

  onExitClick() {
    console.log('hi');
    window.removeEventListener('click', this.onExitClick);
    this.el.classList.remove('up');


    const event = new Event('videoexit');
    this.el.dispatchEvent(event);
  }

  onMouseEnter(project) {
    this.setVideo(`assets/videos/${project.video}.mp4`);
  }

  setVideo(videoPath) {
    // transition in new video
    const newVideo = createEl('video', { className: 'projects-video hidden', src: videoPath});
    newVideo.style.opacity = 0;
    addEl(this.el, newVideo);
    this.currentVideo = videoPath;

    new Tween(newVideo).to({opacity : 1}, transitionDuration).start().onComplete(() => {
      this.el.removeChild(this.video);
      this.video = newVideo;

      const event = new Event('videochange');
      event.detail = this.video;
      this.el.dispatchEvent(event);

      //todo add a promise for safari
      this.video.muted = true;
      this.video.play();
    });
  }

}
