const closeBtn = document.querySelector('.fa-times-circle');
const cartList = document.querySelector(".pop-cart");
const menuList = document.querySelectorAll(".odr");



class Menu {
  constructor(img, name, top, price) {
    this.image = img;
    this.name = name;
    this.toppingPrice = top;
    this.price = price;

  }
  get totalPrice() {
    return this.toppingPrice + this.price
  }
}


menuList.forEach(item => {

  item.addEventListener('click', (e) => {
    let target = e.target;

    let order = target.classList.contains("order");
    if (order) {
      cartList.classList.add("flx");

    }

  });
})

document.querySelectorAll(".order").forEach(item => {
  item.addEventListener('click', (e) => {
    let target = e.target;
    let shop = target.parentElement.parentElement;
    document.querySelector('.pop-fig h3').innerHTML = shop.querySelector('h3').innerHTML;
    document.querySelector('.pop-fig img').src = shop.querySelector(".d-block").src;
    document.querySelector('.pop-fig p span').innerHTML = shop.querySelector('p span').innerText;



  })
})

closeBtn.addEventListener('click', e => {

  cartList.classList.remove('flx');
})