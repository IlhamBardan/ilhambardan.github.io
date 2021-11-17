// Testimonial
(() => {
  const sliderContainer = document.querySelector(".testimonial-slider-container"),
    slides = sliderContainer.querySelectorAll(".testimonial-item");
  slideWidth = sliderContainer.offsetWidth;
  (prevBtn = document.querySelector(".testimonial-slider-nav .prev")), (nextBtn = document.querySelector(".testimonial-slider-nav .next"));
  activeSlider = sliderContainer.querySelector(".testimonial-item.active");
  let slideIndex = Array.from(activeSlider.parentElement.children).indexOf(activeSlider);

  //set width of all slides
  slides.forEach((slide) => {
    slide.style.width = slideWidth + "px";
  });

  //set width of sliderContainer
  sliderContainer.style.width = slideWidth * slides.length + "px";
  nextBtn.addEventListener("click", () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    slider();
  });

  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    slider();
  });

  function slider() {
    // deactivate existing slider active
    sliderContainer.querySelector(".testimonial-item.active").classList.remove("active");
    // active new Slider
    slides[slideIndex].classList.add("active");
    sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + "px";
  }
  slider();
})();
