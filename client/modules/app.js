import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import onChange from 'on-change';
import Game from './game';
import Menu from './menu';
import Inventory from './inventory';

export default class App {
  constructor() {
    autoBind(this);

    const state = {
      flow: null,
      menu: null,
    };
    this.state = onChange(state, this.update);

    this.el = createEl('div', { className: 'app' }); 

    // add header
    this.header = createEl('div', { className: 'header' });
    this.headerTitle = createEl('div', { className: 'header-title', innerText: 'Johnnan Monzon'});
    this.headerSubtitle = createEl('div', { className: 'header-subtitle', innerText: 'Experiential Developer'});
    addEl(this.header, this.headerTitle, this.headerSubtitle);

    this.linkedin = createEl('a', { className: 'linkedin', href: 'https://www.linkedin.com/in/jmonzone/'} );
    this.linkedinImage = createEl('img', {className: 'linkedin-image', src: 'assets/images/skills/linkedin.svg'} );
    addEl(this.linkedin, this.linkedinImage);

    this.menu = new Menu(this.state);
    this.game = new Game();
    this.inventory = new Inventory(this.game);

    addEl(this.el, this.header, this.linkedin, this.menu.el, this.game.el, this.inventory.el);

    window.addEventListener('popstate', this.route);
    if (window.location.search === '') this.state.flow = 'home';
    this.route();
  }

  route(e) {
    console.log('popstate', e);
    const stateString = e ? e.state : window.location.search.substring(1);
    const newState = {};
    stateString.split('&').forEach((item) => { newState[item.split('=')[0]] = item.split('=')[1]; });
    Object.assign(this.state, newState);
  }

  update(path, current, previous) {
    console.log(path, ':', previous, ' -> ', current);

    if (path == 'menu') {
      if (current) {
        this.inventory.show(current, previous);
        this.game.unlisten();
      }
      else if (previous) {
        this.inventory.hide(previous);
      }

      if (!current || current == 'play') this.game.listen();
      
      
    }

    let stateString = '';
      Object.keys(this.state).forEach((key) => {
        if (this.state[key] !== null) {
          stateString += `${key}=${this.state[key]}&`;
        }
      });
      window.history.pushState(`${stateString.slice(0, -1)}`, null, [`?${stateString.slice(0, -1)}`]);
  }
}
