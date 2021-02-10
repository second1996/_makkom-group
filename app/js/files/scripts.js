$(document).ready( function() {

  /**
   * Mobile menu
   */
  const burgerButton = $('.navigation-burger');
  const mobileMenu = $('.m-menu');

  burgerButton.on('click', function() {
    $(this).toggleClass('_is-active');
    mobileMenu.toggleClass('_shown');
  });

  /**
   * Gas counter
   */
  const date1 = new Date(2021, 1, 10);
  const date2 = new Date();
  const daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
  const gasCount = (49.966 + 0.017 * daysLag).toFixed(3);
  const gasCountRounded = (49.966 + 0.017 * daysLag).toFixed(1);

  if( $('#gas-count').length ) {
    $('#gas-count').text(gasCount.replace(/\./, ','));
  }
  if( $('#gas-count-rounded').length ) {
    $('#gas-count-rounded').text(gasCountRounded.replace(/\./, ','));
  }

});