new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 'auto',
});

let navBurger = document.querySelector('.nav__burger');
let navContent = document.querySelector('.nav__content');
navBurger.onclick = function () {
	navBurger.classList.toggle('burger-open');
	navContent.classList.toggle('nav_mobile-open');
}

new Swiper('.slider-benefits', {
	slidesPerView: 'auto',
	breakpoints: {
		1025: {
			slidesPerView: 4,
		},
	},
});

new Swiper('.slider-comparison', {
	slidesPerView: 'auto',
	breakpoints: {
		1025: {
			slidesPerView: 3,
		},
	},
});