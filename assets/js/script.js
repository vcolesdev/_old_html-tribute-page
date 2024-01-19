'use_strict';

/* Plugins */

// Initialize smooth-scroll.js
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 650,
	offset: 0,
	easing: 'easeInOutCubic'
});

// Initialize Jarallax.js
jarallax(document.querySelectorAll('.jarallax'), {
	speed: 0.3,
	type: 'scale'
});

// WOW.js defaults
const wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 75,
	mobile: true,
});
wow.init();

// jQuery plugins here
$(document).ready(function() {

	// Back to top button (optional)
	(function() {

		const btnScrollTop = $('.scroll-to-top');
		const offset = 250;
		const duration = 500;

		// Fade in button on scroll
		function btnFadeIn () {
			if($(window).scrollTop() > offset) {
				btnScrollTop.fadeIn(duration);
			} else {
				btnScrollTop.fadeOut(duration);
			}
		}

		// Back to top scroll
		function scrollToTop() {
			$('html, body').animate({scrollTop: 0}, 650);
			return false;
		}

		$(window).scroll(btnFadeIn);
		btnScrollTop.click(scrollToTop);

	})();


	// Sticky Nav
	(function() {

		const body = $('body');
		const nav = $('.navigation');
		let navTop = nav.offset().top;
		let navHeight = nav.outerHeight();

		function stickyNav() {
			if($(this).scrollTop() >= navTop) {
				nav.addClass('is-sticky');
				body.addClass('sticky-nav').css('paddingTop', navHeight);
			} else {
				nav.removeClass('is-sticky');
				body.removeClass('sticky-nav').css('paddingTop', 0);
			}
		}
		$(window).scroll(stickyNav);

	})();

}); // $(document).ready()

