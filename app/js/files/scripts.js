document.addEventListener('DOMContentLoaded', () => {


})


$(document).ready( function() {


  /**
   * Mobile menu
   */
  const burgerButton = $('.navigation-burger');
  const mobileMenu = $('.m-menu');

  burgerButton.on('click', function() {
    $(this).toggleClass('_is-active');
    mobileMenu.toggleClass('_shown');

    // $(document).mouseup(function(e) {
    //   if (!mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0) {
    //     mobileMenu.removeClass('_shown');
    //   }
    // });
  });

});