import './sass/main.scss';
import menu from './js/menu.json';
import itemsTemplate from './templates/gallery.hbs';

const Gallery = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
Gallery.insertAdjacentHTML('beforeend', markup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  document.body.classList.add(Theme.LIGHT);
  const ThemeToggle = document.querySelector('#theme-switch-toggle');
  ThemeToggle.addEventListener('change', CheckTheme);
  
  function CheckTheme(e) {
    if (e.target.checked) {
      localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.setItem('theme', Theme.LIGHT);
    }
    document.body.classList.toggle(Theme.LIGHT);
    document.body.classList.toggle(Theme.DARK);
  }
  
  function SetTheme() {
    const storageValue = localStorage.getItem('theme');
  
    if (storageValue === Theme.DARK) {
      ThemeToggle.checked = true;
      document.body.classList.add(Theme.DARK);
      document.body.classList.remove(Theme.LIGHT);
      return;
    }
  
    localStorage.setItem('theme', Theme.LIGHT);
  }
  
  SetTheme();
  