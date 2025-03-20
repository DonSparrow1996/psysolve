$(function() {

	$('.just_slider').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToShow: 4.1,
      slidesToScroll: 1,

      responsive: [
	    {
	      breakpoint: 1359,
	      settings: {
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 4.1,
            slidesToScroll: 1,
	       }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 4.1,
            slidesToScroll: 1,
	      }
	    },
        {
          breakpoint: 400,
          settings: {
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 4.1,
            slidesToScroll: 1,
          }
        }
    ]
    });
  $('.slick-arrow').hide();
  $('.slick-slide').css({'margin':'0 29px 0 29px'});
  });

$(function() {
    function notRealSite(element) {
        $(element).click(function() {
            $('.notReal').css('display', 'flex');
            return false;
        });
    }
    $('.notReal_close').click(function() {
        $('.notReal').hide(500);
    });
    notRealSite('.karina_purple_left a');
    notRealSite('.more_ways_right a');
    notRealSite('.phone_and_viber');
    notRealSite('.footer_bottom li');
    notRealSite('.footer_sotial_list_item');
    notRealSite('.logo');
    notRealSite('.footer_middle_left p');
});