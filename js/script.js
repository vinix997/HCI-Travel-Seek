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
  })