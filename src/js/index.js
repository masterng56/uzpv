// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';




window.addEventListener('load', function () {
	// menu button
	const menubutton = document.querySelector('.menu_button');

	const topnavListWrapper = this.document.querySelector('.topnav_list_wrapper')
	menubutton.addEventListener('click', function () {
		if (topnavListWrapper.classList.contains('display_flex')) {
			topnavListWrapper.classList.remove('display_flex');
			menubutton.classList.remove('active');
		}

		else {
			topnavListWrapper.classList.add('display_flex');
			menubutton.classList.add('active');
		}
	});

	var swiper = new Swiper(".rewiews_slider", {
		spaceBetween: 150,
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		allowTouchMove: true,
		pagination: {
			currentClass: ".current_num",
			totalClass: ".total_num",
			el: ".slider_pagination",
			type: "fraction",
		},
		// autoHeight: true,
		// autoplay: {
		// 	delay: 5000,
		// },
		// pagination: false,
		navigation: {
			nextEl: ".button_next",
			prevEl: ".button_prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 1,
			},

		}
	});

}

);