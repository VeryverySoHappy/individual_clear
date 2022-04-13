// section02 eyes start
var eyes = function(selector){
  var eye  = document.querySelector(selector);
  var pupil = eye.querySelector('.pupil');
  var area = eye.getBoundingClientRect();
  var roll = function (mouseX, mouseY) {
    var radian = Math.atan2(mouseY -(area.y + area.height * 0.5), mouseX - (area.x + area.width * 0.5));
    pupil.style.transform = 'rotate('+(180*radian / Math.PI - 90)+'deg)';
  };
  return {
    roll:roll
  };
};

var eye1 = eyes('.eye1');
var eye2 = eyes('.eye2');
window.addEventListener('mousemove', function(e){
  eye1.roll(e.pageX, e.pageY)
  eye2.roll(e.pageX, e.pageY)
})
// section02 eyes end
// section02 cloud2 start
 $(document).ready(function(){
   var movecloud2 = $('.section02').offset().top;

   $(window).scroll(function(){
     var scrollTop = $(window).scrollTop();
     console.log(scrollTop)
     if(scrollTop >= movecloud2) {
       $('.cloud2').css({
         'position':'absolute',
         'transform':'translateX(-300px)',
         'opacity':'1'
        })
     }
   })
 })
// section02 cloud2 end
