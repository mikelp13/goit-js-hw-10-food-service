import './styles.css';
import './js/theme';
import menu from './menu.json';
import template from'./templates/menu-items.hbs' 

const markup = template(menu);

const menuRef = document.querySelector('.js-menu')

menuRef.insertAdjacentHTML('beforeend', markup)