{
  var slide_thumbnail = new Swiper(".slide-thumbnail", {
    spaceBetween: 30,
    slidesPerView: 5,
    direction: "vertical",
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        direction: "horizontal",
      },
      1050: {
        direction: "vertical",
      },
    },
  });

  const progressSlide = document.getElementById("js-progress");

  var slide_hero = new Swiper(".slide-principal", {
    effect: "fade",
    loop: true,
    thumbs: {
      swiper: slide_thumbnail,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        progressSlide.classList.remove("animate");
        progressSlide.classList.remove("active");
        progressSlide.classList.add("animate");
        progressSlide.classList.add("active");
      },
      slideChangeTransitionStart: function () {
        progressSlide.classList.remove("animate");
        progressSlide.classList.remove("active");
        progressSlide.classList.add("active");
      },
      slideChangeTransitionEnd: function () {
        progressSlide.classList.add("animate");
      },
    },
  });
}
