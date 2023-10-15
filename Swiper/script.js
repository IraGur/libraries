const swiper = new Swiper(".mySwiper", {
   // Optional parameters
   loop: true,

   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
   },

   // Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   slidesPerView: 3.5,
   //centeredSlides: true,
   spaceBetween: 5,
   grabCursor: true,
   clickable: true,
});
