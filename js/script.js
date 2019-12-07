// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
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
        
        $('.slides').animate({'margin-left': '-=200vh'}, 3000, function() {
            i++;
            console.log(i);
            console.log(length);
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