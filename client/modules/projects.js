import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';

export default class Projects {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'projects hidden' });

    // add videos
    this.videos = {};

    const video = createEl('video', { className: 'projects-video', src: 'assets/videos/test.mp4'});
    this.videos.test = video;
    video.muted = true;
    video.play();

    addEl(this.el, video);
  }
}
