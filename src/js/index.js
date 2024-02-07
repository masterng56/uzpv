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

	// const swiper = new Swiper('.rewiews_slider', {
	// 	// Optional parameters
	// 	direction: 'vertical',
	// 	loop: true,

	// 	// If we need pagination
	// 	// pagination: {
	// 	// 	el: '.swiper-pagination',
	// 	// }

	// 	// ,

	// 	// Navigation arrows
	// 	navigation: {
	// 		nextEl: '.button_next',
	// 		prevEl: '.button_prev',
	// 	}

	// 	,

	// 	// And if we need scrollbar
	// 	// scrollbar: {
	// 	// 	el: '.swiper-scrollbar',
	// 	// }

	// 	// ,
	// });


	var swiper = new Swiper(".rewiews_slider", {
		// autoHeight: true,
		spaceBetween: 150,
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			currentClass: ".current_num",
			totalClass: ".total_num",
			el: ".slider_pagination",
			type: "fraction",
		},
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