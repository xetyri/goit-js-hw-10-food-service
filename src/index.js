import './sass/main.scss';
import menu from './js/menu.json';
import itemsTemplate from './templates/gallery.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
galleryRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  document.body.classList.add(Theme.LIGHT);
  const themeToggleBtnRef = document.querySelector('#theme-switch-toggle');
  themeToggleBtnRef.addEventListener('change', onThemeToggle);
  
  function onThemeToggle(e) {
    if (e.target.checked) {
      localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.setItem('theme', Theme.LIGHT);
    }
    document.body.classList.toggle(Theme.LIGHT);
    document.body.classList.toggle(Theme.DARK);
  }
  
  function setThemeByLoadPage() {
    const storageValue = localStorage.getItem('theme');
  
    if (storageValue === Theme.DARK) {
      themeToggleBtnRef.checked = true;
      document.body.classList.add(Theme.DARK);
      document.body.classList.remove(Theme.LIGHT);
      return;
    }
  
    localStorage.setItem('theme', Theme.LIGHT);
  }
  
  setThemeByLoadPage();
  