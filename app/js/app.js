$(document).ready(() => {
	
})

$(window).scroll(() => {
	const navbar = $('.navbar');

	//$(document).scrollTop() > $('header .contacts').innerHeight() ? navbar.addClass('fixed-top') : navbar.removeClass('fixed-top')
})

$(".reviews-content").slick({
	centerMode: true,
	centerPadding: '200px',
	arrows: true,
	infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
	slidesToShow: 1
});
