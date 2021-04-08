import { createEl, addEl } from 'lmnt';
import autoBind from 'auto-bind';
import { menu, about } from './content.json'
import Contact from './contact';
import Avatar from './avatar';

export default class Inventory {
  constructor(game) {
    autoBind(this);

    this.el = createEl('div', { className: 'inventory hidden' }); 
    
    this.label = createEl('div', {className: 'inventory-label', innerText: 'Resume'});
    this.content = createEl('div', {className: 'inventory-content'});
    addEl(this.el, this.label, this.content);


    // add pages
    this.pages = {}

    // add contact page
    // this.contact = createEl('div', {className: 'inventory-contact'});
    // this.contact = new Contact();
    // this.pages['contact'] = this.contact;

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
    this.resumeContent = createEl('div', {className: 'resume-body', innerHTML: 'Open <a href=\'./assets/resume.pdf\' target="blank">Resume.pdf</a> in new tab'});
    this.resumeSkills = createEl('div', { className: 'resume-skills' });

    const skills = ['js', 'html', 'css', 'sass', 'csharp', 'python', 'java', 'swift', 'webpack', 'react', 'node', 'mongo'];
    // const skills = ['js', 'html', 'css', 'sass', 'csharp', 'python'];


    skills.forEach((skill) => {
      const resumeSlot = createEl('div', {className: 'resume-slot'});
      const resumeSkill = createEl('img', {className: 'resume-skill', src: `assets/images/skills/${skill}.svg`});

      addEl(resumeSlot, resumeSkill)
      addEl(this.resumeSkills, resumeSlot);
    })

    this.pages['about'] = this.about;
    this.pages['projects'] = this.projects;
    this.pages['resume'] = this.resume;

    addEl(this.resume, this.resumeContent, this.resumeSkills);

    addEl(this.content, this.about, this.projects, this.resume);


  }

  show(current, previous) {

    this.label.innerText = menu[current].label;
    this.el.classList.remove('hidden');
    this.pages[current].classList.remove('hidden');
    if (current == 'about') this.aboutAvatar.show();

    if (previous) this.pages[previous].classList.add('hidden');
  }

  hide(previous) {
    this.el.classList.add('hidden');
    this.pages[previous].classList.add('hidden');
  }
}
