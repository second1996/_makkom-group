if( $('.about-certificates-slider').length ) {
  var aboutCertificates = new Swiper('.about-certificates-slider', {
    slidesPerView: 4.5,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 3.5,
      },
      1320: {
        slidesPerView: 4.5,
      }
    }
  })
}