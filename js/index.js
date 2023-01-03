$(function () {
  $('.wrap').css("display","none");
  setTimeout(function() {
    $('.wrap').fadeOut();
  }, 3000);
});

$(function(){
  $(".wrap").css({opacity:'0'});
  setTimeout(function(){
  $(".wrap").css("display", "block");
  $(".wrap").stop().animate({opacity:'1'},1000);
  },3000);
});

$(function(){
  const header_menu = $(".header_menu > a");
  const body = $("body");
  
  header_menu.click(function(){
    var menu = $(this).attr("href");

    var scroll_point = $(menu).offset().top;
    body.animate({
      scrollTop: scroll_point
    }, 300);
  });
});
$(function() {
  $('nav').hide();
  $('.btn_nav').click(function(){
      $(this).toggleClass('active');
      $('nav').fadeToggle();
  });
});
