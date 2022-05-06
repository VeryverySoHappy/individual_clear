$(document).ready(function(){
  $('#nav ul li').on({
    click:function(e){
      e.preventDefault();
      var pageNum=$(this).index()
      console.log(pageNum)
      var section =$('section').eq(pageNum)
      var offset=section.offset().top;
      $('html, body').animate({
        scrollTop:offset
      },600)
    }
  })

  var nav = $('#nav ul li');
  var cont = $('section');
  $(window).scroll(function(){
    var wScroll=$(this).scrollTop();
    for(var i=0; i<cont.length; i++){
      if(wScroll>=cont.eq(i).offset().top){
        nav.removeClass('active');
        nav.eq(i).addClass('active');
      }
    }
    for(var i=0; i<cont.length; i++){
      if(wScroll>=cont.eq(i).offset().top - $(window).height()/3){
        cont.eq(i).addClass('show')
      }else{
        cont.eq(i).removeClass('show')
      }
    }
  })
})