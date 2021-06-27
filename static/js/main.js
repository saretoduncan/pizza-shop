const closeBtn = document.querySelector('.fa-times-circle');
const cartList = document.querySelector(".pop-cart");
const menuList = document.querySelectorAll('.odr');
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
menuList.forEach(i => {
  i.addEventListener('click', e => {
    let item = e.target;
    if (item.classList.contains("order")) {
      cartList.classList.add("flx");
    }
  })
  closeBtn.addEventListener('click', e => {

    cartList.classList.remove('flx');
  })
})