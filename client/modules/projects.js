import { addEl, createEl } from 'lmnt';
import { projects } from './content.json';


export default class Projects {
  constructor() {
    this.el = createEl('div', { className: 'projects' });
    this.header = createEl('div', { className: 'projects-header', innerText: 'Projects' });
    this.filters = createEl('div', { className: 'projects-filters' });

    const filterEls = {};
    const projectEls = {};

    const categories = ['All', 'Games', 'AR/VR', 'Web'];

    let currentCategory = categories[0];

    const changeCategory = (next) => {
      filterEls[currentCategory].classList.remove('selected');
      currentCategory = next;
      filterEls[currentCategory].classList.add('selected');

      Object.keys(projects).forEach((projectName) => {
        const projectEl = projectEls[projectName];

        if (projects[projectName].tags.includes(currentCategory) || currentCategory === 'All') {
          projectEl.classList.remove('hidden');
          this.gallery.appendChild(projectEl);
        } else {
          projectEl.classList.add('hidden');
          this.hiddenGallery.appendChild(projectEl);
        }
      });
    };

    categories.forEach((category) => {
      const filter = createEl('div', { className: 'projects-filters-filter', innerText: category });
      filter.onclick = () => changeCategory(category);
      filterEls[category] = filter;
      addEl(this.filters, filter);
    });

    this.hiddenGallery = createEl('div', { className: 'projects-gallery-hidden' });
    this.gallery = createEl('div', { className: 'projects-gallery' });

    Object.keys(projects).forEach((projectName) => {
      const project = createEl('div', { className: 'projects-gallery-project' });
      const label = createEl('div', { className: 'projects-gallery-project-label', innerText: projects[projectName].label });

      let card = null;
      if (projects[projectName].video) {
        card = createEl('video', { className: 'projects-gallery-project-card', src: `assets/videos/${projects[projectName].video}.mp4`, volume: 0 }, { autoplay: true, muted: true, loop: true });
      } else if (projects[projectName].image) {
        card = createEl('img', { className: 'projects-gallery-project-card', src: `assets/images/projects/${projects[projectName].image}` });
      } else if (projects[projectName].gif) {
        card = createEl('img', { className: 'projects-gallery-project-card', src: projects[projectName].gif });
      }

      if (projects[projectName].url) card.onclick = () => window.open(projects[projectName].url);

      projectEls[projectName] = project;

      addEl(project, card, label);
      addEl(this.gallery, project);
    });

    changeCategory(currentCategory);

    addEl(this.el, this.header, this.filters, this.gallery);
  }
}
