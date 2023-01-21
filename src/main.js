import logoIcon from './imgs/logo3.jpg';

export default function createNavBar() {
  let navBar = document.createElement('div');
  navBar.classList.add('navbar');

  let logo = document.createElement('div');
  logo.classList.add('logo');
  let name = document.createElement('div');
  name.textContent = 'EgySushi Eatery';
  let logoImg = new Image();
  logoImg.src = logoIcon;
  logoImg.setAttribute('id', 'main-logo');
  logo.append(name, logoImg);

  let ul = document.createElement('ul');
  let home = document.createElement('li');
  let menu = document.createElement('li');
  let about = document.createElement('li');
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  about.textContent = 'About';
  ul.append(home, menu, about);

  navBar.append(logo, ul);
  return navBar;
}
