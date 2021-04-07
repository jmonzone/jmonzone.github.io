import App from './modules/app';
import './index.scss';

const app = new App();
document.body.appendChild(app.el);
if (window.location.href.indexOf('localhost' >= 0)) window.app = app;

let lastFocus = null;

document.body.addEventListener('focusin', (e) => {
  if (lastFocus) lastFocus.classList.remove('focused');
  e.target.classList.add('focused');
  lastFocus = e.target;
});
