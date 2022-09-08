const menuEmail = document.querySelector('.account');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.mobile-menu-icon');
const mobileMenuIcon = document.querySelector('.close-icon');
const shoppingCartButton = document.querySelector('.cart-icon');
const shoppingCart = document.querySelector('.product-description');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartButton.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu() {
  const isShoppingCartOpened = !shoppingCart.classList.contains('inactive');

  if (isShoppingCartOpened) {
    shoppingCart.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoppingCartOpened = !shoppingCart.classList.contains('inactive');

  if (isShoppingCartOpened) {
    shoppingCart.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isDesktopMenuOpened = !desktopMenu.classList.contains('inactive');
  const isMobileMenuOpened = !mobileMenu.classList.contains('inactive');

  if (isDesktopMenuOpened || isMobileMenuOpened) {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
  }

  shoppingCart.classList.toggle('inactive');
}