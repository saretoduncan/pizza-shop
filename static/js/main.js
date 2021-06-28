const closeBtn = document.querySelector('.fa-times-circle');
const cartList = document.querySelector(".pop-op");
const menuList = document.querySelectorAll(".odr");
const price = document.querySelector('#price');



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




  })
})


closeBtn.addEventListener('click', e => {

  cartList.classList.remove('flx');
})


let topPrice = () => {
  let toppingPrice = 0;
  if (document.querySelector("#flexRadioDefault1").checked) {
    toppingPrice = 200;
  } else if (document.querySelector('#flexRadioDefault2').checked) {
    toppingPrice = 300;
  } else if (document.querySelector('#flexRadioDefault3').checked) {
    toppingPrice = 400;
  }
  return toppingPrice;
}

let sizePrice = () => {
  let sizePr = 0;
  if (document.querySelector("#size1").checked) {
    sizePr = 500;
  } else if (document.querySelector("#size2").checked) {
    sizePr = 800;
  } else if (document.querySelector("#size3").checked) {
    sizePr = 1200;
  }
  return sizePr;
}
console.log(sizePrice());
document.querySelector(".addCat").addEventListener('click', e => {
  document.querySelector(".pop-ot").classList.add("flx");
})