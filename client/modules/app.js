import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import onChange from 'on-change';
import Chess from './chess';
import Game from './game';
import Navigation from './navigation';
import Contact from './contact';

export default class App {
  constructor() {
    autoBind(this);

    const state = {
      flow: null,
    };
    this.state = onChange(state, this.update);

    this.el = createEl('div', { className: 'app' }); 

    // add header
    this.header = createEl('div', { className: 'header' });
    this.headerTitle = createEl('div', { className: 'header-title', innerText: 'Johnnan Monzon'});
    this.headerSubtitle = createEl('div', { className: 'header-subtitle', innerText: 'Developer'});
    addEl(this.header, this.headerTitle, this.headerSubtitle);

    this.navigation = new Navigation(this.state);
    this.contact = new Contact();
    // this.chess = new Chess();
    this.game = new Game();

    addEl(this.el, this.header, this.navigation.el, this.game.el, this.contact.el);
  }

  update(path, current, previous) {
    console.log(path, ':', previous, ' -> ', current);

    if (path == 'flow') {
      // if (current == 'Contact') this.contact.show();
      // else this.contact.hide();
    }
  }
}
