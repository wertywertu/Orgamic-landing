var swiper = new Swiper(".cont-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: ".cont-slider-next",
      prevEl: ".cont-slider-prev",
    },
  });
var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
  });
  // var swiper = new Swiper(".mySwiper", {
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });
  var swiper = new Swiper(".pagination", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
  });