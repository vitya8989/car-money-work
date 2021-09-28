function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

let navBurger = document.querySelector('.nav__burger');
let navContent = document.querySelector('.nav__content');
let navLink = document.querySelectorAll('.nav__link');
navBurger.onclick = function () {
	navBurger.classList.toggle('burger-open');
	navContent.classList.toggle('nav_mobile-open');
}
for (let i = 0; i < navLink.length; i++) {
	navLink[i].onclick = function () {
		navBurger.classList.remove('burger-open');
		navContent.classList.remove('nav_mobile-open');
	}
}

document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		let topOffset = document.querySelector('.nav__content').offsetHeight;

		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

let questions = document.querySelectorAll('.questions__question');
let answers = document.querySelectorAll('.questions__answer');
let buttons = document.querySelectorAll('.question__button');
if (questions.length > 0) {
	for (let i = 0; i < questions.length; i++) {
		questions[i].onclick = function () {
			for (let j = 0; j < questions.length; j++) {
				if (answers[j] != this.nextElementSibling) {
					answers[j].classList.remove('opened');
					answers[j].style.maxHeight = 0;
				}
				if (buttons[j] != this.lastElementChild) {
					buttons[j].classList.remove('rotate');
				}
			}
			if (this.nextElementSibling.classList.contains('opened')) {
				this.nextElementSibling.classList.remove('opened');
				this.nextElementSibling.style.maxHeight = 0;
			} else {
				this.nextElementSibling.classList.add('opened');
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
			}
			this.lastElementChild.classList.toggle('rotate');
		}
	}
}

let changeTask = document.querySelectorAll('.change-task');
let taskEventswrapper1 = document.querySelectorAll('.task__events-wrapper1');
let taskEventswrapper2 = document.querySelectorAll('.task__events-wrapper2');
for (let i = 0; i < changeTask.length; i++) {
	changeTask[i].onclick = function () {
		changeTask[i].classList.toggle('active-change');
		taskEventswrapper1[i].classList.toggle('active-task');
		taskEventswrapper2[i].classList.toggle('active-task');
	}
}

new Swiper('.instagram-slider', {
	slidesPerView: 'auto',
});

// let scriptMap = document.createElement('script');
// scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
// setTimeout(() => document.head.append(scriptMap), 2000);
// scriptMap.onload = function () {
// 	ymaps.ready(init);
// };

// function init() {
// 	var myMap = new ymaps.Map("map", {
// 		center: [55.752648, 37.603846],
// 		zoom: 17
// 	});
// 	var placemark = new ymaps.Placemark([55.752648, 37.603846], {
// 		iconColor: 'blue'
// 	}
// 	);
// 	myMap.geoObjects.add(placemark);
// }

let footerMap = document.querySelector('.footer__map');
let footerBottom = document.querySelector('.footer__bottom');
if (window.innerWidth < 726) {
	footerBottom.appendChild(footerMap);
}
