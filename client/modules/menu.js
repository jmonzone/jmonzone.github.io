import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { menu } from './content.json';

export default class Menu {
  constructor(state) {
    autoBind(this);
    this.state = state;

    this.el = createEl('div', { className: 'menu' }); 

    Object.keys(menu).forEach((key) => {
      const navButton = createEl('div', { className: 'menu-button', innerText:  menu[key].label }, {}, { click: () => {
        if (menu[key].hasPage) this.state.menu = this.state.menu == key ? null : key;
        else this.state.menu = null;
      }});
      addEl(this.el, navButton);
    });
  }
}
