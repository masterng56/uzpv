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
				autoHeight: true,
			},

		}
	});

	// accordion
	const accordion = document.querySelectorAll('.accordion');
	document.querySelectorAll('.accordion').forEach((el) => {
		el.addEventListener('click', function () {

			if (this.classList.contains('active')) {
				this.classList.remove('active');
			} else {
				for (el of accordion) {
					el.classList.remove('active');
				}
				this.classList.add('active');
			}

		});
	});

	document.querySelectorAll('.accordion').forEach((el) => {
		el.addEventListener('click', () => {

			let content = el.nextElementSibling;

			if (content.style.maxHeight) {
				content.classList.remove('active');
				document.querySelectorAll('.accordion_content').forEach((el) => el.style.maxHeight = null)
			} else {
				content.classList.add('active')
				document.querySelectorAll('.accordion_content').forEach((el) => el.style.maxHeight = null)
				content.style.maxHeight = content.scrollHeight + 'px'
			}

		});
	});

	

  //POPUP
	let overlay = document.querySelector('.overlay');
	let close = document.querySelector('.btn_close')

	document.querySelectorAll('.btn_popup_amts').forEach((el) => {
		el.addEventListener('click', function () {
			if (el.classList.contains('popup_active')) {
				overlay.classList.remove('popup_active');
			}
			else {
				overlay.classList.add('popup_active');

			}
		});
	});

	if (close != null) {
		close.addEventListener('click', function () {
			overlay.classList.remove('popup_active');
		});
	}

	if (overlay != null) {
		overlay.addEventListener('click', function (e) {
			if (e.target === overlay) {
				overlay.classList.remove('popup_active');
			}
		});
	}


//кнопка показа карты
	let addressMap = document.querySelector('.address_map');
	let img = document.querySelector('.map_img');
	let map = document.querySelector('.frame_map');

	if(addressMap != null){
		document.querySelector('.address_map').addEventListener("click", function(e) {
			e.preventDefault();
			img.classList.add('display_none');
			map.classList.remove('display_none');
			map.classList.add('display_block');
		});
	
		document.addEventListener('mouseup', function (e) {
			let active = document.querySelector('.btn_map');
			if (e.target != addressMap) {
				img.classList.remove('display_none');
				map.classList.remove('display_block');
				map.classList.add('display_none');
			}
		});
	}

});