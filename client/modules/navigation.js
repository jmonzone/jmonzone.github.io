import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';

export default class Navigation {
  constructor(state) {
    autoBind(this);

    this.el = createEl('div', { className: 'navigation' }); 

    // add header
    const navButtons = ['Play', 'About', 'Projects', 'Resume', 'Contact' ];

    navButtons.forEach((button) => {
        const navButton = createEl('div', { className: 'navigation-button', innerText:  button }, {}, { click: () => state.flow = button});
        addEl(this.el, navButton);
    })
    
  }
}
