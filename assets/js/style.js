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

// Faq Page Tabs
(() => {
  const aboutPage = document.querySelector(".faq-page"),
    tabsContainer = document.querySelector(".faq-tabs");

  tabsContainer.addEventListener("click", (event) => {
    // if event.target contains 'tab-item' class and not contains 'active' class
    if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
      const target = event.target.getAttribute("data-target");
      // deactivate existing active 'tab-item'
      tabsContainer.querySelector(".active").classList.remove("active");
      // active new 'tab-item'
      event.target.classList.add("active");
      // deactivate existing active 'tab-content'
      aboutPage.querySelector(".tab-content.active").classList.remove("active");
      // active new 'tab-content'
      aboutPage.querySelector(target).classList.add("active");
    }
  });
})();
