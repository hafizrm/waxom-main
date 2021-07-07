$(function(){
    $('.services-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
           {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
        ]      
      });
      //slider brand
      $('.brand-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow:3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow:2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
        ] 
      });
      //mixitup
      var containerEl = document.querySelector('.filters');
      var mixer = mixitup(containerEl);
      //videos
      $('.venobox').venobox(); 
      //counter
      $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    //scroolify
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-example'
    });
    //backto top
    $('.back-to-top-icon').click(function(){
      $('html,body').animate({scrollTop:0},1500)
    })
    $(window).scroll(function(){
      var scrooling = $(this).scrollTop();
      if(scrooling > 300){
       $('.navbar').addClass('bg')
      }else{
       $('.navbar').removeClass('bg')

      }
      if(scrooling>300){
        $('.back-to-top-icon').fadeIn()
      }
      else{
        $('.back-to-top-icon').fadeOut()
      }
    })
})