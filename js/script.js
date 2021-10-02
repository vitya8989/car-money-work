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
new Swiper('.auto-slider', {
	navigation: {
		nextEl: '.image-slider__btn-next',
		prevEl: '.image-slider__btn-prev'
	},
	slidesPerView: 'auto',
});
new Swiper('.banks-slider', {
	navigation: {
		nextEl: '.banks__slider-btn-next',
		prevEl: '.banks__slider-btn-prev'
	},
	slidesPerView: 'auto',
});
let lastAuto1600 = document.querySelector('.last-autocr1600');
let lastAuto888 = document.querySelector('.last-autocr888');
let autoSliderBtnNext = document.querySelector('.image-slider__btn-next');
let autoSliderBtnPrev = document.querySelector('.image-slider__btn-prev');
let lastBank1600 = document.querySelector('.last-bank1600');
let lastBank888 = document.querySelector('.last-bank888');
let bankSliderBtnNext = document.querySelector('.banks__slider-btn-next');
let bankSliderBtnPrev = document.querySelector('.banks__slider-btn-prev');
autoSliderBtnNext.onclick = function () {
	if (window.innerWidth > 1188) {
		if (lastAuto1600.classList.contains('swiper-slide-next')) {
			autoSliderBtnNext.classList.add('swiper-button-disabled');
		}
	}
	if (window.innerWidth > 1052) {
		if (lastAuto1600.nextElementSibling.classList.contains('swiper-slide-next')) {
			autoSliderBtnNext.classList.add('swiper-button-disabled');
		}
	}
	if (window.innerWidth > 888) {
		if (lastAuto888.classList.contains('swiper-slide-next')) {
			autoSliderBtnNext.classList.add('swiper-button-disabled');
		}
	}
	if (window.innerWidth < 889) {
		if (lastAuto888.nextElementSibling.classList.contains('swiper-slide-next')) {
			autoSliderBtnNext.classList.add('swiper-button-disabled');
		}
	}
}

autoSliderBtnPrev.onclick = function () {
	autoSliderBtnNext.classList.remove('swiper-button-disabled');
}

bankSliderBtnNext.onclick = function () {
	if (window.innerWidth > 1188) {
		if (lastBank1600.classList.contains('swiper-slide-next')) {
			bankSliderBtnNext.classList.add('swiper-button-disabled');
		}
	}
	if (window.innerWidth > 1052) {
		if (lastBank1600.nextElementSibling.classList.contains('swiper-slide-next')) {
			bankSliderBtnNext.classList.add('swiper-button-disabled');
		}
	}
	if (window.innerWidth > 888) {
		if (lastBank888.classList.contains('swiper-slide-next')) {
			bankSliderBtnNext.classList.add('swiper-button-disabled');
		}
	}
	if (window.innerWidth < 889) {
		if (lastBank888.nextElementSibling.classList.contains('swiper-slide-next')) {
			bankSliderBtnNext.classList.add('swiper-button-disabled');
		}
	}
}

bankSliderBtnPrev.onclick = function () {
	bankSliderBtnNext.classList.remove('swiper-button-disabled');
}


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

new Swiper('.slider-special', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.slider-special__btn-next',
		prevEl: '.slider-special__btn-prev'
	},
});

let lastSpecSlide = document.querySelector('.last-spec-slide');
let SpecSlideNext = document.querySelector('.slider-special__btn-next');
let SpecSlidePrev = document.querySelector('.slider-special__btn-prev');

SpecSlideNext.onclick = function () {
	if (window.innerWidth > 1206) {
		if (lastSpecSlide.classList.contains('swiper-slide-active')) {
			SpecSlideNext.classList.add('swiper-button-disabled');
		}
	}
	if (window.innerWidth < 1207) {
		if (lastSpecSlide.classList.contains('swiper-slide-next')) {
			SpecSlideNext.classList.add('swiper-button-disabled');
		}
	}
}
SpecSlidePrev.onclick = function () {
	SpecSlideNext.classList.remove('swiper-button-disabled');
}

new Swiper('.slider-how', {
	slidesPerView: 'auto',
	breakpoints: {
		1025: {
			slidesPerView: 4,
		},
	},
});

let range1 = document.querySelector('.range-1');
let round1 = document.querySelector('.round-1');
let shadow1 = document.querySelector('.shadow-1');
let leftRound1 = range1.value / 0.75 - 16;
let widthShadow1 = leftRound1 + 1;
let rangeOutputs1 = document.querySelectorAll('.range-output1');
round1.style.left = `${leftRound1}%`;
shadow1.style.width = `${widthShadow1}%`;
range1.oninput = function () {
	leftRound1 = range1.value / 0.75 - 16;
	if (window.innerWidth < 501) {
		leftRound1 = range1.value / 0.76 - 16;
	}
	widthShadow1 = leftRound1 + 1;
	round1.style.left = `${leftRound1}%`;
	shadow1.style.width = `${widthShadow1}%`;
	for (let i = 0; i < rangeOutputs1.length; i++) {
		if (range1.value > 60 || range1.value == 24) {
			rangeOutputs1[i].innerHTML = `${range1.value} месяца`;
		} else {
			rangeOutputs1[i].innerHTML = `${range1.value} месяцев`;
		}
	}
}

let range2 = document.querySelector('.range-2');
let round2 = document.querySelector('.round-2');
let shadow2 = document.querySelector('.shadow-2');
let leftRound2 = range2.value / 10.4;
let widthShadow2 = leftRound2 + 1;
let rangeOutput2 = document.querySelector('.range-output2');
round2.style.left = `${leftRound2}%`;
shadow2.style.width = `${widthShadow2}%`;
range2.oninput = function () {
	leftRound2 = range2.value / 10.4;
	widthShadow2 = leftRound2 + 1;
	round2.style.left = `${leftRound2}%`;
	shadow2.style.width = `${widthShadow2}%`;
	if (range2.value == 0) {
		rangeOutput2.innerHTML = `${range2.value} &#8381`;
	} else {
		rangeOutput2.innerHTML = `${range2.value} 000&#8381`;
	}
}

let toFirstBtn = document.querySelector('.to-first-btn');
let toSecondBtn = document.querySelectorAll('.to-second-btn');
let toThirdBtn = document.querySelector('.to-third-btn');
let itemCredit1 = document.querySelector('.item-credit1');
let itemCredit2 = document.querySelector('.item-credit2');
let itemCredit3 = document.querySelector('.item-credit3');
let itemCredit4 = document.querySelector('.item-credit4');
let itemCredit5 = document.querySelector('.item-credit5');
let nameOutput = document.querySelectorAll('.name-output');
let formName = document.querySelector('.form-name');
let formSurame = document.querySelector('.form-surname');
let formPatronymic = document.querySelector('.form-patronymic');
let formTel = document.querySelector('.item-credit__tel');
let telMask = document.querySelector('.tel-mask');
let formNumbersOnly = document.querySelectorAll('.form-numbers-only');
let formNextBox = document.querySelector('.item-credit__btn-nextBox');
toFirstBtn.onclick = function (e) {
	e.preventDefault();
	itemCredit2.classList.remove('active-credit');
	itemCredit1.classList.add('active-credit');
	window.scrollBy({
		top: itemCredit1.getBoundingClientRect().top - 75
	});
}
for (let i = 0; i < toSecondBtn.length; i++) {
	toSecondBtn[i].onclick = function (e) {
		if (validate_form()) {
			e.preventDefault();
			itemCredit1.classList.remove('active-credit');
			itemCredit3.classList.remove('active-credit');
			itemCredit2.classList.add('active-credit');
			window.scrollBy({
				top: itemCredit2.getBoundingClientRect().top - 75
			});
		} else {
			formNextBox.classList.add('disabled-btn');
		}
	}
}
formTel.onfocus = function () {
	formNextBox.classList.remove('disabled-btn');
}

toThirdBtn.onclick = function (e) {
	e.preventDefault();
	itemCredit2.classList.remove('active-credit');
	itemCredit3.classList.add('active-credit');
	window.scrollBy({
		top: itemCredit3.getBoundingClientRect().top - 75
	});
}

function setCursorPosition(pos, elem) {
	elem.focus();
	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	else if (elem.createTextRange) {
		var range = elem.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select()
	}
}
function mask(event) {
	var matrix = this.defaultValue,
		i = 0,
		def = matrix.replace(/\D/g, ""),
		val = this.value.replace(/\D/g, "");
	def.length >= val.length && (val = def);
	matrix = matrix.replace(/[_\d]/g, function (a) {
		return val.charAt(i++) || "_"
	});
	this.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
	setCursorPosition(i, this)
}
telMask.addEventListener("input", mask, false);

function validate_form() {
	let valid = true;
	if (telMask.value == "+7(___)___-____") {
		valid = false;
	}
	return valid;
};

for (let i = 0; i < formNumbersOnly.length; i++) {
	formNumbersOnly[i].oninput = function () {
		formNumbersOnly[i].value = formNumbersOnly[i].value.replace(/[^0-9]/g, '');
	}
}

let politicCheck = document.getElementById('politic-check');
let labelPolitic = document.querySelector('.label-politic');

function validatecheck() {
	let valid = false;
	if (politicCheck.checked) {
		valid = true;
	}
	return valid;
};

let form = document.querySelector('.credit-form__form');
form.onsubmit = async (e) => {
	e.preventDefault();
	if (validatecheck()) {
		let response = await fetch('form-action.php', {
			method: 'POST',
			body: new FormData(form)
		});
		if (response.ok) {
			itemCredit3.classList.remove('active-credit');
			itemCredit4.classList.add('active-credit');
			for (let i = 0; i < nameOutput.length; i++) {
				nameOutput[i].innerHTML = `${formSurame.value} ${formName.value} ${formPatronymic.value}`;
			}
			window.scrollBy({
				top: itemCredit4.getBoundingClientRect().top - 75
			});
			startTimer();
			checkCheck();
		} else {
			alert('Произошла ошибка отправки, попробуйте еще раз!');
		}
	} else {
		labelPolitic.classList.add('error-check');
	}
}
labelPolitic.onclick = function () {
	labelPolitic.classList.remove('error-check');
}

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
const COLOR_CODES = {
	info: {
		color: "green"
	},
	warning: {
		color: "orange",
		threshold: WARNING_THRESHOLD
	},
	alert: {
		color: "red",
		threshold: ALERT_THRESHOLD
	}
};
const TIME_LIMIT = 24;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
document.getElementById("timer").innerHTML = `<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
	timeLeft
)}</span>
</div>
`;

function onTimesUp() {
	clearInterval(timerInterval);
}
function startTimer() {
	timerInterval = setInterval(() => {
		timePassed = timePassed += 1;
		timeLeft = TIME_LIMIT - timePassed;
		document.getElementById("base-timer-label").innerHTML = formatTime(
			timeLeft
		);
		setCircleDasharray();
		setRemainingPathColor(timeLeft);
		if (timeLeft === 0) {
			onTimesUp();
			form.reset();
			itemCredit4.classList.remove('active-credit');
			itemCredit5.classList.add('active-credit');
			window.scrollBy({
				top: itemCredit5.getBoundingClientRect().top - 75
			});
		}
	}, 1000);
}
function formatTime(time) {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	return `${minutes}:${seconds}`;
}
function setRemainingPathColor(timeLeft) {
	const { alert, warning, info } = COLOR_CODES;
	if (timeLeft <= alert.threshold) {
		document
			.getElementById("base-timer-path-remaining")
			.classList.remove(warning.color);
		document
			.getElementById("base-timer-path-remaining")
			.classList.add(alert.color);
	} else if (timeLeft <= warning.threshold) {
		document
			.getElementById("base-timer-path-remaining")
			.classList.remove(info.color);
		document
			.getElementById("base-timer-path-remaining")
			.classList.add(warning.color);
	}
}
function calculateTimeFraction() {
	const rawTimeFraction = timeLeft / TIME_LIMIT;
	return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
function setCircleDasharray() {
	const circleDasharray = `${(
		calculateTimeFraction() * FULL_DASH_ARRAY
	).toFixed(0)} 283`;
	document
		.getElementById("base-timer-path-remaining")
		.setAttribute("stroke-dasharray", circleDasharray);
}

let checkText = document.querySelectorAll('.check-text');
function checkCheck() {
	for (let i = 0; i < checkText.length; i++) {
		setTimeout(function () {
			checkText[i].classList.add('load-check');
			setTimeout(function () {
				checkText[i].classList.remove('load-check');
				checkText[i].classList.add('check-check');
			}, 7500);
		}, 8000 * i);
	}
}


let message = document.querySelectorAll('.speak__message');
let speak = document.querySelector('.speak');
let offsetPosition;
window.onload = function () {
	let scrollTarget = speak;
	offsetPosition = scrollTarget.getBoundingClientRect().top + window.pageYOffset;
	return offsetPosition;
}
window.onscroll = function () {
	let centerOfWindow = window.pageYOffset + window.innerHeight / 1.85;
	if (centerOfWindow >= offsetPosition) {
		for (let i = 0; i < message.length; i++) {
			setTimeout(function () {
				message[i].classList.add('message-visible');
			}, 1500 * i);
		}
	}
}

new Swiper('.speak__slider', {
	slidesPerView: 'auto',
	breakpoints: {
		769: {
			slidesPerView: 2,
		},
	},
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

new Swiper('.instagram-slider', {
	slidesPerView: 'auto',
});

document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		let topOffset = document.querySelector('.nav__container').offsetHeight;

		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

let scriptMap = document.createElement('script');
scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
setTimeout(() => document.head.append(scriptMap), 2000);
scriptMap.onload = function () {
	ymaps.ready(init);
};

function init() {
	var myMap = new ymaps.Map("map", {
		center: [55.752648, 37.603846],
		zoom: 17
	});
	var placemark = new ymaps.Placemark([55.752648, 37.603846], {
		iconColor: 'blue'
	}
	);
	myMap.geoObjects.add(placemark);
}

let footerMap = document.querySelector('.footer__map');
let footerBottom = document.querySelector('.footer__bottom');
if (window.innerWidth < 726) {
	footerBottom.appendChild(footerMap);
}

let videoVidget = document.querySelector('.video-vidget');
let videoVidgetVideo = document.querySelector('.video-vidget__video');
let closeVideoVidget = document.querySelector('.close-video-vidget');
let rollUpVideoVidget = document.querySelector('.roll-up-video-vidget');
let videoVidgetBtn = document.querySelector('.video-vidget__btn');
let invisibleWrapper = document.querySelector('.invisible-wrapper');

videoVidgetVideo.muted = true;
videoVidgetVideo.play();
videoVidgetVideo.onclick = function (event) {
	event.preventDefault();
}
rollUpVideoVidget.onclick = function () {
	closeVideoVidget.classList.remove('big-video');
	videoVidget.classList.remove('big-video');
	rollUpVideoVidget.classList.remove('big-video');
	videoVidgetBtn.classList.remove('big-video');
	videoVidgetVideo.muted = true;
}
invisibleWrapper.onclick = function () {
	videoVidget.classList.add('big-video');
	rollUpVideoVidget.classList.add('big-video');
	closeVideoVidget.classList.add('big-video');
	videoVidgetBtn.classList.add('big-video');
	videoVidgetVideo.muted = false;
	videoVidgetVideo.play();
}
closeVideoVidget.onclick = function () {
	videoVidget.classList.add('none-video');
}
videoVidgetBtn.onclick = function () {
	closeVideoVidget.classList.remove('big-video');
	videoVidget.classList.remove('big-video');
	rollUpVideoVidget.classList.remove('big-video');
	videoVidgetBtn.classList.remove('big-video');
	videoVidgetVideo.muted = true;
}

let openVideoComparison = document.querySelector('.open-video-comparison');
let videoComparison = document.querySelector('.video-comparison');
let closeVideoComparison = document.querySelector('.close-video-comparison');
let videoComparisonVideo = document.querySelector('.video-comparison__video');
let videoComparisonBtn = document.querySelector('.video-comparison__btn');

videoComparisonBtn.onclick = function () {
	videoComparison.classList.add('hide-video');
	videoComparisonVideo.pause();
	videoComparisonVideo.currentTime = 0;
}
openVideoComparison.onclick = function (event) {
	event.preventDefault();
	videoComparison.classList.remove('hide-video');
	videoComparisonVideo.play();
}
closeVideoComparison.onclick = function () {
	videoComparison.classList.add('hide-video');
	videoComparisonVideo.pause();
	videoComparisonVideo.currentTime = 0;
}
setInterval(() => {
	if (videoComparisonVideo.ended) {
		videoComparison.classList.add('hide-video');
	}
}, 1000);

let openVideoCredit = document.querySelector('.open-video-credit');
let videoCredit = document.querySelector('.video-credit');
let closeVideoCredit = document.querySelector('.close-video-credit');
let videoCreditVideo = document.querySelector('.video-credit__video');

openVideoCredit.onclick = function (event) {
	event.preventDefault();
	videoCredit.classList.remove('hide-video');
	videoCreditVideo.play();
}
closeVideoCredit.onclick = function () {
	videoCredit.classList.add('hide-video');
	videoCreditVideo.pause();
	videoCreditVideo.currentTime = 0;
}
setInterval(() => {
	if (videoCreditVideo.ended) {
		videoCredit.classList.add('hide-video');
	}
}, 1000);

let openVideoHelp = document.querySelector('.open-help-video');
let videoHelp = document.querySelector('.video-help');
let closeVideoHelp = document.querySelector('.close-video-help');
let videoHelpVideo = document.querySelector('.video-help__video');

openVideoHelp.onclick = function (event) {
	event.preventDefault();
	videoHelp.classList.remove('hide-video');
	videoHelpVideo.play();
}
closeVideoHelp.onclick = function () {
	videoHelp.classList.add('hide-video');
	videoHelpVideo.pause();
	videoHelpVideo.currentTime = 0;
}
setInterval(() => {
	if (videoHelpVideo.ended) {
		videoHelp.classList.add('hide-video');
	}
}, 1000);

let carsSelect1 = document.querySelector('.cars-select1');
let carsSelect2 = document.querySelector('.cars-select2');
let requestURL = '../base/cars.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	let cars = request.response;
	buildSelect1(cars);
}

function buildSelect1(obj) {
	for (const key in obj.list) {
		if (Object.hasOwnProperty.call(obj.list, key)) {
			const car = key;
			car.toString();
			let option = document.createElement('option');
			option.innerHTML = car;
			carsSelect1.appendChild(option);
		}
	}
}
function buildSelect2() {
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		let cars = request.response;
		carsSelect2.innerHTML = '<option disabled selected hidden>Выберите модель</option>';
		for (const key in cars.list) {
			const car = key;
			if (carsSelect1.value == car) {
				const models = cars.list[car];
				for (let i = 0; i < models.length; i++) {
					const model = models[i];
					let option = document.createElement('option');
					option.innerHTML = model;
					carsSelect2.appendChild(option);
				}
			}
		}
	}
}