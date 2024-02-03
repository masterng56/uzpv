

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	parallax: true,
	speed: 1000,

	keyboard: {
		enabled: true,
	},

	// If we need pagination
	pagination: {
		el: '.slider-controls__count',
		type: 'fraction',
	},

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});


window.addEventListener('load', function () {
	const menubutton = document.querySelector('.menu_button');
	const topnavListWrapper = this.document.querySelector('.topnav_list_wrapper')
	menubutton.addEventListener('click', function (e) {
		if (topnavListWrapper.classList.contains('display_flex')) {
			topnavListWrapper.classList.remove('display_flex');
		}
		else {
			topnavListWrapper.classList.add('display_flex');
		}

	});
});


