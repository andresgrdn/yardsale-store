const menuEmail = document.getElementsByClassName('account')[0];
const desktopMenu = document.getElementsByClassName('desktop-menu')[0];

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}