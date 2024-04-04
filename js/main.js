// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.document.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// sliders
$(function () {
  $(".success__inner-slider").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    fade: true,
    arrows: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(function () {
  $(".testimonials__inner-slider").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    fade: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$(function () {
  $(".lang__inner-slider").slick({
    dots: false,
    infinite: false,
    centerMode: false,
    fade: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
/*mobile slider */
function mobileOnlySlider() {
  $(".slider").slick({
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}
if (window.innerWidth < 541) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 541) {
    $(".slider").addClass("sliderMob");
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".slider").removeClass("sliderMob");
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
  }
}
resizeListener();
$(window).resize(resizeListener);

const langSlider = document.getElementById("langSlider");
const langText = document.getElementById("langText");
if (langSlider) {
  langSlider.onclick = () => {
    langText.classList.add("active");
    langSlider.classList.add("active");
  };
  langText.onclick = () => {
    langText.classList.remove("active");
    langSlider.classList.remove("active");
  };
}
const newsBtn = document.getElementById("newsBtn");
const newsMain = document.getElementById("newsMain");
const newsOverlay = document.getElementById("newsOverlay");
if (newsBtn) {
  newsBtn.onclick = () => {
    newsMain.classList.remove("active");
    newsOverlay.classList.add("active");
  };
}
