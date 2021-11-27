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

// Google Map API
function initMap() {
  // Customizing Map
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "a080310845d9d8dd",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 1.8,
  });
  // Marker Map
  // Arab Saudi
  marker = new google.maps.Marker({
    position: { lat: 23.75479868008521, lng: 44.78677127204856 },
    map,
  });

  // Belanda
  marker = new google.maps.Marker({
    position: { lat: 52.01627826286596, lng: 5.541515560606857 },
    map,
  });

  // Perancis
  marker = new google.maps.Marker({
    position: { lat: 46.62585501478423, lng: 2.738491429027504 },
    map,
  });

  // Jepang
  marker = new google.maps.Marker({
    position: { lat: 36.802929229421075, lng: 139.22376923994202 },
    map,
  });
}
