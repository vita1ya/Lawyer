$(document).ready(() => {
	$('.sent-request').click((e) => {
		e.preventDefault();

		$('.needs-validation').addClass('was-validated');
	})

	$('#request').on('hidden.bs.modal', () => {
		$('#request-form')[0].reset();
		$('.needs-validation').removeClass('was-validated');
	})
})

$(window).scroll(() => {
	const navbar = $('.navbar');

	//$(document).scrollTop() > $('header .contacts').innerHeight() ? navbar.addClass('fixed-top') : navbar.removeClass('fixed-top')
})

$('.reviews-slider').slick({
	centerMode: true,
	centerPadding: '200px',
	arrows: true,
	infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
	slidesToShow: 1,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				centerPadding: '150px'
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerPadding: '60px'
			}
		},
		{
			breakpoint: 480,
			settings: {
				centerPadding: '0'
			}
		}
	]
});
