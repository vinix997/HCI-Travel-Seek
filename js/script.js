$(document).ready(function(){
    $('.menu-toggle').click(function(){
      $('nav').toggleClass('active');
      $('.container').toggleClass('hidden');
    })
    $('ul li').click(function(){
      $(this).siblings().removeClass('active');
      $(this).toggleClass('active');
    })
    var i = 1;
    var length = $('.slide').length;

    function animateSlide(){
        
        $('.slides').animate({'margin-left': '-=100vw'}, 2500, function() {
            i++;
            if(i == length){
                $('.slides').css(
                    'margin-left',0
                )
                i =1;
            }
        })
    }
    setInterval(animateSlide, 2000);
  })