const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
      duration: 2000,
      disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const swiperProjects = new Swiper('.swiper-projects', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });