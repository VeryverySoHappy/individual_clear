// main slider start
var num = 1;
$(document).ready(function () {
  $('.slider_list li:gt(0)').hide();
  $('.btn_left').on('click', function (e) {
    e.preventDefault();
    num--;
    if (num < 1) {
      num = 8
    }
    move(num)
  })
  $('.btn_right').on('click', function (e) {
    e.preventDefault();
    num++
    if (num > 8) {
      num = 1
    }
    move(num)
  })

  $('.btn_stop').on('click', function (e) {
    e.preventDefault()
    clearInterval(popupset)
    $(this).css({
      'display': 'none'
    })
    $('.btn_play').css({
      'display': 'inline-block'
    })
  })
  $('.btn_play').on('click', function (e) {
    e.preventDefault()
    popupset = setInterval(function () {
      set()
    }, 5000)
    $(this).css({
      'display': 'none'
    })
    $('.btn_stop').css({
      'display': 'inline-block'
    })
  })

  var popupset = setInterval(function () {
    set()
  }, 5000)
})

function move(num) {
  $('.count').text(num);
  $('.slider_list li').hide();
  $('.slider_list li:eq(' + (num - 1) + ')').show();
}

function set() {
  $('.btn_right').trigger('click')
}
// main slider end

// section03 start
$(document).ready(function(){
  $('.product_list li:first .product_title').css('color','#d90879')
  $('.product_list li:not(:eq(0)) > .product').hide();

  $('.wrap').on({
    mouseenter:function(){
      $('.product').mousemove(function(event){
        var pageCode = event.pageX - $('.product').offset().left;
        if(pageCode>600){
          $('.rightBtn').css('display','block')
          $('.leftBtn').css('display','none')
        }else{
          $('.leftBtn').css('display','block')
          $('.rightBtn').css('display','none')
        }
      })

    },
    mouseleave:function(){
      $('.leftBtn').css('display','none')
      $('.rightBtn').css('display','none')
    }
  })
  var indexNum = 0;
  $('.product_title').on({
    click:function(e){
      e.preventDefault();
      indexNum=$(this).parent().index();
      $('.product').hide();
      $(this).next().show();
      $('.product_title').css('color','#222')
      $(this).css('color','#d90879')
    },
    mouseenter:function(){
      $('.leftBtn').css('display','none')
      $('.rightBtn').css('display','none')
    }
  })

  console.log('indexNum')
  $('.leftBtn').on({
    click:function(e){
      e.preventDefault();
      var temp = indexNum-1;
      if(temp<0){
        temp=5
      }
      $('.product_title').eq(temp).trigger('click');
    }
  })
  $('.rightBtn').on({
    click:function(e){
      e.preventDefault();
      var temp = indexNum+1;
      if(temp>5){
        temp=0
      }
      $('.product_title').eq(temp).trigger('click');
    }
  })
})// section03 end