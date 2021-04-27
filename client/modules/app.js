import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import onChange from 'on-change';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Projects from './projects';

export default class App {
  constructor() {
    autoBind(this);

    const state = {
      view: null, // <string> ['About', 'Projects', 'Resume']
    };
    this.state = onChange(state, this.update);

    this.el = createEl('div', { className: 'app' });
    this.home = new Home();
    this.about = new About();
    this.projects = new Projects();
    this.navigation = new Navigation(this.about.el);
    addEl(this.el, this.navigation.el, this.home.el, this.about.el, this.projects.el);
  }


  update(path, current, previous) {
    console.log(path, ':', previous, ' -> ', current);
  }
}
