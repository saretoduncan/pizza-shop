const closeBtn = document.querySelector('.fa-times-circle');
const cartList = document.querySelector(".pop-cart")
closeBtn.addEventListener('click', e => {
  e.preventDefault();
  cartList.classList.remove('flx');
})