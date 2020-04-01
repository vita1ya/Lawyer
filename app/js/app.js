$(document).ready(() => {
	$('.sent-request').click((e) => {
		e.preventDefault();

		$('.needs-validation').addClass('was-validated');
	})

	$('.btn-request').click(() => {
		$('.needs-validation').removeClass('was-validated');
	})

	$('#request').modal();

	$('#request').on('hidden.bs.modal', function (e) {
		$('#request-form')[0].reset();
	})
})

$(window).scroll(() => {
	const navbar = $('.navbar');

	//$(document).scrollTop() > $('header .contacts').innerHeight() ? navbar.addClass('fixed-top') : navbar.removeClass('fixed-top')
})

$('.reviews-content').slick({
	centerMode: true,
	centerPadding: '200px',
	arrows: true,
	infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
	slidesToShow: 1
});
