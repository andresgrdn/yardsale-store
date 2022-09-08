const menuEmail = document.querySelector('.account');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.mobile-menu-icon');
const mobileMenuIcon = document.querySelector('.close-icon');
const shoppingCartButton = document.querySelector('.cart-icon');
const shoppingCart = document.querySelector('.shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

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

const productsList = [];

productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/1431117/pexels-photo-1431117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

productsList.push({
  name: 'Laptop',
  price: 600,
  image: 'https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg',
})

productsList.push({
  name: 'Table',
  price: 150,
  image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04b3c19c/images/600000/606028.jpg?sfrm=jpg',
})

productsList.push({
  name: 'Table',
  price: 150,
  image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04b3c19c/images/600000/606028.jpg?sfrm=jpg',
})

productsList.push({
  name: 'Table',
  price: 150,
  image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04b3c19c/images/600000/606028.jpg?sfrm=jpg',
})
productsList.push({
  name: 'Table',
  price: 150,
  image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04b3c19c/images/600000/606028.jpg?sfrm=jpg',
})
productsList.push({
  name: 'Table',
  price: 150,
  image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04b3c19c/images/600000/606028.jpg?sfrm=jpg',
})
productsList.push({
  name: 'Table',
  price: 150,
  image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04b3c19c/images/600000/606028.jpg?sfrm=jpg',
})
productsList.push({
  name: 'Table',
  price: 150,
  image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04b3c19c/images/600000/606028.jpg?sfrm=jpg',
})

function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.setAttribute('alt', product.name);

    const controls = document.createElement('div');
    controls.classList.add('controls');

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-card__description');

    const productPrice = document.createElement('span');
    productPrice.classList.add('product-card__price');
    productPrice.textContent = `$ ${product.price}`;

    const productName = document.createElement('span');
    productName.classList.add('product-card__name');
    productName.textContent = product.name;

    productDescription.append(productPrice, productName);

    const cardIconContainer = document.createElement('figure');
    cardIconContainer.classList.add('product-card__icon');

    const cardIconImage = document.createElement('img');
    cardIconImage.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    cardIconImage.setAttribute('alt', 'Add to cart button');

    cardIconContainer.appendChild(cardIconImage);

    controls.append(productDescription, cardIconContainer);

    productCard.append(productImage, controls);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);