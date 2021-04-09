import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { menu, about, skills } from './content.json'
import Contact from './contact';
import Avatar from './avatar';
import { add } from '@tweenjs/tween.js';

export default class Inventory {
  constructor(game) {
    autoBind(this);

    this.el = createEl('div', { className: 'inventory hidden' }); 
    
    this.label = createEl('div', {className: 'inventory-label', innerText: 'Resume'});
    this.content = createEl('div', {className: 'inventory-content'});
    addEl(this.el, this.label, this.content);

    // add pages
    this.pages = {}

    // add about page
    this.about = createEl('div', { className: 'about hidden' }); 
    this.aboutAvatar = new Avatar(game);
    this.aboutBody = createEl('div', {className: 'about-body', innerHTML: about.text});
    addEl(this.about, this.aboutAvatar.el, this.aboutBody);

    // add projects page
    this.projects = createEl('div', { className: 'projects hidden' }); 
    this.projectsContent = createEl('div', {className: 'projects-body', innerText: ''});
    addEl(this.projects, this.projectsContent);

    // add resume page
    this.resume = createEl('div', { className: 'resume hidden' }); 
    this.resumeBody = createEl('div', {className: 'resume-body', innerHTML: 'Open <a href=\'./assets/resume.pdf\' target="blank">Resume.pdf</a> in new tab'});
    this.resumeSkills = createEl('div', {className: 'resume-skills'});

    this.webSkills = createEl('div', {className: 'resume-skills-web'});
    this.webLabel = createEl('div', { className: 'resume-skills-label', innerText: 'Web'});
    addEl(this.resumeSkills, this.webLabel);

    skills['web'].forEach((skill) => {
      const resumeSlot = createEl('div', {className: 'resume-skills-slot'});
      const resumeSkill = createEl('img', {className: 'resume-skills-slot-image', src: `assets/images/skills/${skill}.svg`});

      addEl(resumeSlot, resumeSkill)
      addEl(this.webSkills, resumeSlot);
    })
    addEl(this.resumeSkills, this.webSkills);

    this.threedSkills = createEl('div', {className: 'resume-skills-threed'});
    this.threedLabel = createEl('div', { className: 'resume-skills-label', innerText: '3D'});
    addEl(this.resumeSkills, this.threedLabel);

    skills['threed'].forEach((skill) => {
      const resumeSlot = createEl('div', {className: 'resume-skills-slot'});
      const resumeSkill = createEl('img', {className: 'resume-skills-slot-image', src: `assets/images/skills/${skill}.svg`});

      addEl(resumeSlot, resumeSkill)
      addEl(this.threedSkills, resumeSlot);
    })
    addEl(this.resumeSkills, this.threedSkills);
    
    addEl(this.resume, this.resumeBody, this.resumeSkills);

    this.pages['about'] = this.about;
    this.pages['projects'] = this.projects;
    this.pages['resume'] = this.resume;


    addEl(this.content, this.about, this.projects, this.resume);


  }

  show(current, previous) {

    this.label.innerText = menu[current].label;
    this.el.classList.remove('hidden');
    this.pages[current].classList.remove('hidden');

    if (previous) this.pages[previous].classList.add('hidden');
  }

  hide(previous) {
    this.el.classList.add('hidden');
    this.pages[previous].classList.add('hidden');
  }
}
