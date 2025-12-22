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
        768: { slidesPerView: 2, spaceBetween: 16 },
        1200: { slidesPerView: 3, spaceBetween: 16 }
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
  let popularTariffsSwiper = initSwiper('.popular-tariffs-swiper');
});
