$(document).ready(function(){

 // owl carouse
      $('.slider-area').owlCarousel({
        items:1,
        loop:true,
        autoplay:false,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 1
                  },
                  960: {
                    items: 1
                  },
                  1200: {
                    items: 1
                  }
                }
      });
      $( ".slider-area .owl-prev").html('<i class="fa fa-angle-double-left"></i>');
      $( ".slider-area .owl-next").html('<i class="fa fa-angle-double-right"></i>');

      // homepage slider animation support
      $(".slider-area").on("translate.owl.carousel", function(){
        $(".inside-caption h2, .inside-caption p").removeClass("animated fadeInUp").css({'opacity':'0'});
        $(".inside-caption a").removeClass("animated fadeInDown").css({'opacity':'0'});
      });
      
      $(".slider-area").on("translated.owl.carousel", function(){
        $(".inside-caption h2, .inside-caption p").addClass("animated fadeInUp").css({'opacity':'0'});
        $(".inside-caption a").addClass("animated fadeInDown").css({'opacity':'0'});
      });


      $('.categories-slider').owlCarousel({
        loop:true,
        responsive: {
                  0: {
                    items: 1,

                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 2
                  },
                  640: {
                    items: 4
                  },
                  960: {
                    items: 5
                  },
                  1200: {
                    items: 6

                  }
                }
      });
      $( ".categories-slider .owl-prev").html('<i class="fa fa-play-circle-o prev1"></i>');
      $( ".categories-slider .owl-next").html('<i class="fa fa-play-circle-o"></i>');
      $(".categories-slider .owl-controls").addClass('col-xs-12');


      $('.product-slider').owlCarousel({
        items:4,
        loop:true,
        autoplay:false,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 2
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 4
                  }
                }
      });
      $( ".product-slider .owl-prev").html('<i class="fa fa-play-circle-o prev1"></i>');
      $( ".product-slider .owl-next").html('<i class="fa fa-play-circle-o"></i>'); 
      
      /*-----careneque----------*/
      $('.product-01-slider').owlCarousel({
        items:4,
        loop:true,
        autoplay:false,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 2
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 4
                  }
                }
      });
      $( ".product-01-slider .owl-prev").html('<i class="fa fa-play-circle-o prev1"></i>');
      $( ".product-01-slider .owl-next").html('<i class="fa fa-play-circle-o"></i>'); 
      $(".product-01-slider .owl-controls").addClass('col-xs-12');



      $('.roadtheme-slider').owlCarousel({
        items:2,
        loop:true,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  320: {
                    items: 1
                  },
                  640: {
                    items: 1
                  },
                  960: {
                    items: 1
                  },
                  1200: {
                    items: 1
                  }
                }
      });
      $( ".roadtheme-slider .owl-prev").html('<i class="fa fa-angle-double-left"></i>');
      $( ".roadtheme-slider .owl-next").html('<i class="fa fa-angle-double-right"></i>');


      $('.seller-slider').owlCarousel({
        items:3,
        loop:true,
        autoplay:false,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
                  640: {
                    items: 2
                  },
                  960: {
                    items: 2
                  },
                  1200: {
                    items: 3
                  }
                }
      });
      $( ".seller-slider .owl-prev").html('<i class="fa fa-play-circle-o prev1"></i>');
      $( ".seller-slider .owl-next").html('<i class="fa fa-play-circle-o"></i>'); 
      $(".seller-slider .owl-controls").addClass('col-xs-12');

      /*$(window).resize(function(){
        var width=$(window).width();
        if(width<633){
          $(".remove").remove();
        }
      })*/


      $('.greenfarm-slider').owlCarousel({
        items:10,
        loop:true,
        autoplay:false,
        nav:true,
        autoplayTimeout:3000,
        margin:30,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
                  640: {
                    items: 2
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 3
                  }
                }
      });
      $(".greenfarm-slider .owl-prev").html('<i class="fa fa-play-circle-o prev1"></i>');
      $(".greenfarm-slider .owl-next").html('<i class="fa fa-play-circle-o"></i>');
      $(".greenfarm-slider .owl-item").css({'width':'330px'});


      $('.brand-slider').owlCarousel({
        items:5,
        loop:true,
        autoplay:false,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
                  640: {
                    items: 3
                  },
                  960: {
                    items: 4
                  },
                  1200: {
                    items: 5
                  }
                }
      });
      $( ".brand-slider .owl-prev").html('<i class="fa fa-play-circle-o prev1"></i>');
      $( ".brand-slider .owl-next").html('<i class="fa fa-play-circle-o"></i>'); 



      /*-------for cras-neque--------*/
      $('.next').on('click', function(){

        var currentImg=$('.active-img');
        var nextImg=currentImg.next();

        if(nextImg.length){
          currentImg.removeClass('active-img').css('z-index',-10);
          nextImg.addClass('active-img').css('z-index',10);
        }

      });
       $('.prev').on('click', function(){

        var currentImg=$('.active-img');
        var prevImg=currentImg.prev();

        if(prevImg.length){
          currentImg.removeClass('active-img').css('z-index',-10);
          prevImg.addClass('active-img').css('z-index',10);
        }
       

});


       /*-------for cras-neque--------------*/

       $('.thumbnail-slider').owlCarousel({
        items:3,
        loop:true,
        autoplay:false,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
                  640: {
                    items: 3
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 3
                  }
                }
      });
      $( ".thumbnail-slider .owl-prev").html('<i class="fa fa-angle-down prev1"></i>');
      $( ".thumbnail-slider .owl-next").html('<i class="fa fa-angle-up"></i>');

      $('.product-card-slider').owlCarousel({
        items:4,
        loop:true,
        autoplay:false,
        nav:true,
        autoplayTimeout:3000,
        responsive: {
                  0: {
                    items: 1
                  },
                  280: {
                    items: 1
                  },
                  480: {
                    items: 1
                  },
                  640: {
                    items: 1
                  },
                  960: {
                    items: 1
                  },
                  1200: {
                    items: 1
                  }
                }
      });
      $( ".product-card-slider .owl-prev").html('<i class="fa fa-angle-down prev1"></i>');
      $( ".product-card-slider .owl-next").html('<i class="fa fa-angle-up"></i>');
     });