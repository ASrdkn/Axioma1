document.addEventListener('DOMContentLoaded', function() {
  // Функция инициализации свайпера по селектору контейнера
  function initSwiper(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    return new Swiper(containerSelector, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
      breakpoints: {
        992: { slidesPerView: 3, spaceBetween: 16 }
      },
      pagination: {
        el: `${containerSelector} .swiper-pagination`,
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
      navigation: {
        nextEl: `${containerSelector} .swiper-button-next`,
        prevEl: `${containerSelector} .swiper-button-prev`,
      },
    });
  }
  let routersSwiper = initSwiper('.routers-swiper');
  let videonabSwiper = initSwiper('.videonab-swiper');
  let tvSwiper = initSwiper('.tv-swiper');
  let melochiSwiper = initSwiper('.melochi-swiper');
});