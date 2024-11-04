const btnMenu = document.querySelector('.btn__menu')
const menuMobile = document.querySelector('.header__menu-list')
btnMenu.addEventListener('click',()=>{
    menuMobile.classList.toggle('menu--open')
})