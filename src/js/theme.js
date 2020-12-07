const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switch: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.switch.addEventListener('change', changeTheme);


checkLocalStorage();

function changeTheme() {
  const toggle = refs.switch.checked;

  if (toggle) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function checkLocalStorage(){
  refs.body.classList.add(Theme.LIGHT);
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === Theme.DARK) {
    refs.switch.checked = true;
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
}
