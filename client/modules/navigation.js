import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';

export default class Navigation {
  constructor(state) {
    autoBind(this);
    this.state = state;

    this.el = createEl('div', { className: 'navigation' });

    this.navigationButtons = {};
    const navigationLabels = [ 'About', 'Projects', 'Resume' ];
    navigationLabels.forEach((nav) => {
        const button = createEl('div', { className: 'navigation-button', innerText: nav}, {}, { click: () => this.state.view = nav});
        this.navigationButtons[nav] = button;
        addEl(this.el, button);
    });

    //PDF Viewer
    this.navigationButtons['Resume'].innerHTML = '<a href=\'assets/resume.pdf\'>Resume</a>';
  }

  onViewHasChanged(previous, current) {
      if (previous) this.navigationButtons[previous].classList.remove('selected');
      if (current) this.navigationButtons[current].classList.add('selected');
  }
}