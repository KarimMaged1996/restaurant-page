// modules that need to be imported
import './styles.css';
import createNavBar from './main';
import { createMain, createSchedule } from './home';
import remove from './remove';
import createMenus from './menu';
import createAbout from './about';

// creating the navigation bar that will not be deleted
let content = document.querySelector('.content');
let navbar = createNavBar();

// creating the home page content
let main = createMain();
let schedule = createSchedule();

// appending the home page and navBar contents uopn opening the page
content.append(navbar, main, schedule);

//selecting buttons that will get event listiners
let navList = document.querySelectorAll('li');

navList[0].addEventListener('click', () => {
  remove();
  content.append(main, schedule);
});

navList[1].addEventListener('click', () => {
  remove();
  let menu = createMenus();
  content.append(menu);
});

navList[2].addEventListener('click', () => {
  remove();
  let about = createAbout();
  content.append(about);
});
