
$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $('.navigation').toggleClass('menu-open');
        $('.hamburger').toggleClass('menu-close');
        $('html').toggleClass('menu-page')
    });

 // back-ground change of header 

    $(window).on("scroll", function() {
      
    if($(window).scrollTop() >= 20) {
        $("header").addClass("active");
       
    }
    
    else {
      
       $("header").removeClass("active");
      
    }
    
    });

   // scroll down btn 
    
   $("#scroll-down").click(function(){
    $("html,body").animate({scrollTop:$('.about-us-section').offset().top},'fast');
    return false
})


});








$('.slider').slick({
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed:1000,
    infinite: true,
    dots: true,
    arrow: true,
    slidesToShow: 3,
    
  
    responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: true,
              
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,

            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
  
  });
  
  // On before slide change
  $('.slider').on('beforeChange', function(event, { slideCount: count }, currentSlide, nextSlide){
    let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
    $('.slick-now').removeClass('slick-now');
    $(selectors).addClass('slick-now');
  });
  
  $('[data-slick-index="0"]').addClass('slick-now');
  
 
  




