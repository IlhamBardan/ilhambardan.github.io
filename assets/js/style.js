// Testimonial
(() => {
  var btnIndicator = document.getElementsByClassName("btn-indicator");
  var testimonialSlide = document.getElementById("testimonial-slide");

  btnIndicator[0].onclick = function () {
    testimonialSlide.style.transform = "translate(0px)";
    for (i = 0; i < 4; i++) {
      btnIndicator[i].classList.remove("active");
    }
    this.classList.add("active");
  };
  btnIndicator[1].onclick = function () {
    testimonialSlide.style.transform = "translate(-800px)";
    for (i = 0; i < 4; i++) {
      btnIndicator[i].classList.remove("active");
    }
    this.classList.add("active");
  };
  btnIndicator[2].onclick = function () {
    testimonialSlide.style.transform = "translate(-1600px)";
    for (i = 0; i < 4; i++) {
      btnIndicator[i].classList.remove("active");
    }
    this.classList.add("active");
  };
  btnIndicator[3].onclick = function () {
    testimonialSlide.style.transform = "translate(-2400px)";
    for (i = 0; i < 4; i++) {
      btnIndicator[i].classList.remove("active");
    }
    this.classList.add("active");
  };
})();
