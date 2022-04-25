// deliveryPop start
$(document).ready(function(){
  $('.deliveryBtn').on('click',function(e){
    e.preventDefault();
    $('body').append('<div id="shadow"></div>')
    $('#shadow').css({
      width:'100%',
      height:'100%',
      position:'fixed',
      top:'0',
      left:'0',
      background:'rgba(0,0,0,0.3)'
    })
    $('#shadow').on('click',function(e){
      e.preventDefault();
      $('.closeBtn').trigger('click')
    })
    $('#deliveryPop').css({
      position:'fixed',
      top:'50%',
      left:'50%',
      transform: 'translate(-50%,-50%)',
      marginLeft:'-20px'
    })
    $('#deliveryPop').show();
  })
  $('.closeBtn').on('click',function(e){
    e.preventDefault();
    $('#deliveryPop').hide();
    $('#shadow').remove();
  })
})
// deliveryPop end

//subMenu start
$(document).ready(function(){
  $('#subMenu').on('click', function(e){
    e.preventDefault();
    $('.sub_menu').fadeToggle()
  })
})
// subMenu end

// search start
$(document).ready(function(){
  $('#search').on('click', function(){
    $('.search_sub').fadeToggle(300)
  })
})
// search end