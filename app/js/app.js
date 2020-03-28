$(document).ready(() => {
	
})

$(window).scroll(() => {
	const navbar = $('.navbar');

	$(document).scrollTop() > $('header .contacts').innerHeight() ? navbar.addClass('fixed-top') : navbar.removeClass('fixed-top')
})

$(".reviews-content").slick({
	centerMode: true,
	centerPadding: '200px',
	infinite: true,
	slidesToShow: 1
});
