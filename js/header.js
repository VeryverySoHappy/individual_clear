// work, skill start
$(document).ready(function(){
  $('#gnb .jump > li').on({
    click:function(e){
      e.preventDefault();
      var pageNum=$(this).index();
      var section = $('.scroll').eq(pageNum);
      var offset = section.offset().top;
      $('html, body').animate({
        scrollTop:offset
      },600)
    }
  })

  var nav = $('#gnb .jump > li');
  var cont = $('.scroll');
  $(window).scroll(function(){
    var wScroll=$(this).scrollTop();
    for(var i=0; i<cont.length; i++){
      if(wScroll>=cont.eq(i).offset().top){
        nav.removeClass('active');
        nav.eq(i).addClass('active');
      }
    }
  })
})
// work, skill end