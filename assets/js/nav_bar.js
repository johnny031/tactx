function add_nav_white() {
    $("nav").addClass("nav_white");
  }
  function rm_nav_white() {
    $("nav").removeClass("nav_white");
  }
  
  $(document).ready(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      add_nav_white();
    }
    else{
      rm_nav_white();
    }

    if ($(window).width() > 768) {
      $(".push").addClass("order-last");
    }
  })
  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      add_nav_white();
    }
    else{
      rm_nav_white();
    }
  })
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  