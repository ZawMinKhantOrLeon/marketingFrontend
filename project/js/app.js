$(document).ready(function(){
$(window).scroll(function(){
    let mediaheigh=$(window).height()
    console.log(mediaheigh)
        let currentposition=$(this).scrollTop()
        if(currentposition>=mediaheigh-100){
            $('.site-nav').addClass('site-nav-scroll')
        }else{
            $('.site-nav').removeClass('site-nav-scroll')
            setactive('home')
            
        }
    })

  
})
$('.navbar-toggler').click(function(){
    let current=$('.navbar-collapse').hasClass('show')
    console.log(current)
    if(current){
        $('.menu-icon').addClass('fa-bars')
        $('.menu-icon').removeClass('fa-times')
    }else{
        $('.menu-icon').removeClass('fa-bars')
        $('.menu-icon').addClass('fa-times')
    }
})

    function setactive(current){
        $(`.nav-link`).removeClass('set-active')
        $(`.nav-link[href='#${current}']`).addClass('set-active')
    }

    function scrollto(){
        let currentsection=$('section[id]')
        currentsection.waypoint(function(direction){
           if(direction=='down'){
            let currentsectionid=$(this.element).attr('id')
            
            setactive(currentsectionid)
           }
        })
        currentsection.waypoint(function(direction){
            if(direction=='up'){
             let currentsectionid=$(this.element).attr('id')
             setactive(currentsectionid)
            }
         })
    }
    scrollto()
       new WOW().init(   {
                      boxClass:     'wow',      // default
                      animateClass: 'animate__animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    });
      $('.slide-pricing').slick({
        arrows:false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(window).on('load',function(){
  $('.loading').fadeOut(500,function(){
    $(this).remove();
  })
})
    
