
// Navbar Design 


$(".navbar-nav .nav-link").on("click", function(){
	   $(this).parent().addClass('active');
	   $(this).parent().siblings().removeClass('active');
});

//===== Init Wow js

 new WOW().init();
              

// Scroll to top icon

$('body').prepend(`<div class="go-top go-top-btn">
					<i class="fas fa-long-arrow-alt-up"></i>
				</div>`);

	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		// if (scrolled < 300) $('.go-top').removeClass('active');
		// if (scrolled > 300) $('.go-top').addClass('active');

		if ( $(window).scrollTop() > 300 ) {
			$('.go-top').addClass('active');
		} else {
			$('.go-top').removeClass('active');
		}
	});


	$('.go-top').on('click', function() {
		$('html, body').animate(
			{
				scrollTop: '0'
			},
			1200
		);
	});


// Fix Header on Page Scroll

$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
		$('.my_navbar').addClass('sticky');
		} else {
		$('.my_navbar').removeClass('sticky');
		}
	});



 

// page scroll one page links

$(document).ready(function(){
 let scroll_link = $('.scroll');

  //smooth scrolling -----------------------
  scroll_link.click(function(e){
      e.preventDefault();
      let url = $('body').find($(this).attr('href')).offset().top;
      $('html, body').animate({
        scrollTop : url
      },700);
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      return false;	
   });
});






// Page Loader


$(document).ready(function() {
	
	
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 60000);
})



// Gallery Page Design

$('.portfolio-menu ul li').click(function () {
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');
  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector
  });
  return false;
});



$(document).ready(function () {
  var popup_btn = $('.popup-btn');
  popup_btn.magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

$(document).ready(function() {

  $('a.btn-gallery').on('click', function(event) {
    event.preventDefault();
    
    var gallery = $(this).attr('href');
    
    $(gallery).magnificPopup({
      delegate: 'a',
      type : 'iframe',
      gallery: {
        enabled: true
      }
    }).magnificPopup('open');
  });
  
});

      
// Thumbnail Slick Slider

$(document).on('ready', function() {
      
      $(".testimonial_slider").slick({
        dots: false,
        arrows : true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            vertical: false,
            verticalSwiping: false
          }
        }
      ],
        
      });


      $(".product_slider").slick({
        dots: false,
        arrows : true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            vertical: false,
            verticalSwiping: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            vertical: false,
            verticalSwiping: false
          }
        }
      ]
        
      });

      $(".client_slider").slick({
        dots: false,
        arrows : true,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            vertical: false,
            verticalSwiping: false
          }
        }
      ],
        
      });

      
      
    });




















