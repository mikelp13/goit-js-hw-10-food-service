const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switch: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.switch.addEventListener('change', changeTheme);
refs.body.classList.add(Theme.LIGHT);

checkLocalStorage();

function changeTheme() {
  const toggle = refs.switch.checked;

  if (toggle) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function checkLocalStorage(){
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === Theme.DARK) {
    refs.switch.checked = true;
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
}
