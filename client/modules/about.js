import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';

export default class About {
  constructor() {
    autoBind(this);

    this.el = createEl('div', { className: 'about left' });
    this.header = createEl('div', {className: 'about-header', innerHTML: '<b>ABOUT ME</b>'});
    this.body = createEl(('div'), {className: 'about-body', innerText: 'I\'m a developer who loves making video games, augmented and virtual reality experiences, and interactive websites. I also enjoy math, chess, puzzles, strategy, and other board games, and Pokemon Go. \n\nAs of now, I\'m going with the flow, learning about everything that intrigues me and coming up with fun new projects to work on and share with others.' });
    addEl(this.el, this.header, this.body);
  }

  show() {
    this.el.classList.remove('left');
  }

  hide() {
    this.el.classList.add('left');
  }

}
