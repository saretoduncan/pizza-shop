const closeBtn = document.querySelector('.fa-times-circle');
const cartList = document.querySelector(".pop-cart");
const menuList = document.querySelectorAll('.odr');
menuList.forEach(i => {
  addEventListener('click', e => {
    let item = e.target;
    if (item.classList.contains("order")) {
      cartList.classList.add("flx");
    }
  })
  closeBtn.addEventListener('click', e => {

    cartList.classList.remove('flx');
  })
})