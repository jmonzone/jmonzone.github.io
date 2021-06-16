import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import SceneManager from './scene';
import Showcase from './showcase';
import Intro from './intro';
import Projects from './projects';


export default class App {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'app' });
    this.sceneContainer = createEl('div', { className: 'scene' });
    this.sceneOverlay = createEl('div', { className: 'overlay' });
    this.scene = new SceneManager(this.sceneContainer);

    this.showcase = new Showcase();
    this.intro = new Intro();
    this.projects = new Projects();
    addEl(this.el, this.sceneContainer, this.sceneOverlay, this.showcase.el, this.intro.el, this.projects.el);
  }
}
