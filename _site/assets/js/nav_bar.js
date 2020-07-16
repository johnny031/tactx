function add_nav_white() {
  $(".navbar").addClass("nav_white");
}
function rm_nav_white() {
  $(".navbar").removeClass("nav_white");
}

$(document).ready(function () {
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1200;
  let scroll = $(window).scrollTop();
  if (scroll > 0) {
    add_nav_white();
  } else {
    rm_nav_white();
  }

  if ($(window).width() > 767) {
    $(".push").addClass("order-last");
  }

  if ($(window).width() > 992) {
    $(".push_lg").addClass("order-last");
  }

  if ($(window).width() < 1200) {
    $(".cut").removeClass("col-lg-4");
  }
  if ($(window).width() < 851) {
    $(".cut").removeClass("col-md-6");
  }
  if ($(window).width() < 700) {
    $(".center-when-small").addClass("text-center");
  }
  //translate breadcrumb text
  $("#breadcrumb .route:contains('products')").html("產品介紹");
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    add_nav_white();
  } else {
    rm_nav_white();
  }
});

$(window).scroll(function () {
  $(".slideanim").each(function () {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
