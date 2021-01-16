document.addEventListener('DOMContentLoaded', () => {

  const burgerButton = document.querySelector('.navigation-burger');

  burgerButton.addEventListener('click', el => {
    el.currentTarget.classList.toggle('_is-active')
  })

})