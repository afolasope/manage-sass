const navOpen = document.querySelector('.nav__btns--open');
const navClose = document.querySelector('.nav__btns--close');
const navBtns = document.querySelector('.nav__btns');
const nav = document.querySelector('.nav__links');
const modal = document.querySelector('.modal');

console.log(navBtns, navOpen, navClose);

navBtns.addEventListener('click', function (e) {
  const elem = e.target;
  if (elem.classList.contains('nav__btns--open')) {
    navOpen.classList.add('hidden');
    navClose.classList.remove('hidden');
    nav.classList.remove('hidden');
    modal.classList.remove('hidden');
  }
  if (elem.classList.contains('nav__btns--close')) {
    navClose.classList.add('hidden');
    navOpen.classList.remove('hidden');
    nav.classList.add('hidden');
    modal.classList.add('hidden');
  }
});
modal.addEventListener('click', function () {
  navClose.classList.add('hidden');
  navOpen.classList.remove('hidden');
  nav.classList.add('hidden');
  modal.classList.add('hidden');
});
