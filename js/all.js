$(function () {
  const $nav = $(".logo");
  const $menu1 = $(".dropdown-menu");
  const $menu2 = $(".dropdown2-menu");

  function slideToggleFlex($el) {
    if ($el.is(":visible")) {
      $el.stop(true, true).slideUp();
    } else {
      $el.css("display", "flex").hide().stop(true, true).slideDown();
    }
  }

  function closeAll() {
    $menu1.stop(true, true).slideUp();
    $menu2.stop(true, true).slideUp();
  }

  /* ⭐ 初始化：頁面一載入就收合 + 清 active */
  closeAll();
  $nav.find("a").removeClass("active");

  // 全站點擊監聽（空白）
  $(document).on("click", function (e) {
    const $target = $(e.target);

    if ($target.is("a") || $target.closest("a").length) return;

    closeAll();
    $nav.find("a").removeClass("active");
  });

  // 導覽列內 a 的行為
  $nav.on("click", "a", function (e) {
    e.preventDefault();

    const $a = $(this);
    const isSubItem = $a.closest(".dropdown-menu, .dropdown2-menu").length > 0;

    // 全域唯一 active
    $nav.find("a").removeClass("active");
    $a.addClass("active");

    // 點子選單：不收合
    if (isSubItem) return;

    // 點產品介紹
    if ($a.hasClass("dropdown")) {
      closeAll();
      slideToggleFlex($menu1);
      return;
    }

    // 點聯絡我們
    if ($a.hasClass("dropdown2")) {
      closeAll();
      slideToggleFlex($menu2);
      return;
    }

    // 點首頁或其他
    closeAll();
  });
  $(".top a").click(function (e) { 
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  
});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:1500,
  autoplay: {
   delay: 2000,
   disableOnInteraction: false, 
 },
  effect:'cube',
  cubeEffect: {
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
lightbox.option({
      'resizeDuration': 2000,
      'wrapAround': true
    })