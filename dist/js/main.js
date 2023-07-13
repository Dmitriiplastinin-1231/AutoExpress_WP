$(function() {
	$('.slider__inner').slick({
		slidesToShow: 3,
  		arrows: false,
  		dots: true,
  		responsive: [
    {
      breakpoint: 841,
      settings: {
        slidesToShow: 2
      },
      breakpoint: 452,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    }
  ]
	})
});