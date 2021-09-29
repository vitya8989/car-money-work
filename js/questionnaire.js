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

		let topOffset = document.querySelector('.nav__container').offsetHeight;

		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

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

let telMask = document.querySelectorAll('.tel-mask');
let onlyLetter = document.querySelectorAll('.only-letter');
let onlyNumberMask = document.querySelectorAll('.only-number-mask');
let onlyNumber = document.querySelectorAll('.only-number');
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

for (let i = 0; i < telMask.length; i++) {
	telMask[i].addEventListener("input", mask, false);
}
for (let i = 0; i < onlyNumberMask.length; i++) {
	onlyNumberMask[i].addEventListener("input", mask, false);
}
for (let i = 0; i < onlyLetter.length; i++) {
	onlyLetter[i].addEventListener('keyup', function () {
		this.value = this.value.replace(/[\w]/g, '');
	});
}
for (let i = 0; i < onlyNumber.length; i++) {
	onlyNumber[i].addEventListener('keyup', function () {
		this.value = this.value.replace(/[^\d]/g, '');
	});
}


// function validate_form() {
// 	let valid = true;
// 	if (telMask.value == "+7(___)___-____") {
// 		valid = false;
// 	}
// 	return valid;
// };

let fileInput = document.getElementById('fileElem');
let dropArea = document.getElementById('drop-area');
let filePreview = document.querySelector('.file-preview');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
	dropArea.addEventListener(eventName, preventDefaults, false)
})
function preventDefaults(e) {
	e.preventDefault()
	e.stopPropagation()
}
['dragenter', 'dragover'].forEach(eventName => {
	dropArea.addEventListener(eventName, highlight, false)
});
['dragleave', 'drop'].forEach(eventName => {
	dropArea.addEventListener(eventName, unhighlight, false)
});
function highlight(e) {
	dropArea.classList.add('highlight')
}
function unhighlight(e) {
	dropArea.classList.remove('highlight')
}
dropArea.addEventListener('drop', handleDrop, false);
function handleDrop(e) {
	let dt = e.dataTransfer;
	let files = dt.files;
	handleFiles(files);
}
function handleFiles(files) {
	([...files]).forEach(uploadFile);
	onchangeInput = true;
}
let onchangeInput = false;
let prevImageBoxBox = [];
let spanPrevImage = [];
function uploadFile(file) {
	let reader = new FileReader();
	reader.onload = function (e) {
		let prevImage = document.createElement('img');
		let prevImageBox = document.createElement('div');
		let spanClosePrevImage = document.createElement('span');
		prevImageBox.classList.add('prev-image');
		spanClosePrevImage.classList.add('close-prev-image');
		prevImage.src = `${e.target.result}`;
		prevImageBox.appendChild(prevImage);
		prevImageBox.appendChild(spanClosePrevImage);
		filePreview.appendChild(prevImageBox);
		prevImageBoxBox.push(prevImageBox);
		spanPrevImage.push(spanClosePrevImage);
		return prevImageBoxBox, spanPrevImage;
	}
	reader.onerror = function (e) {
		alert('Ошибка');
	}
	reader.readAsDataURL(file);
}

setInterval(() => {
	if (onchangeInput) {
		for (let i = 0; i < prevImageBoxBox.length; i++) {
			spanPrevImage[i].onclick = function () {
				prevImageBoxBox[i].classList.add('none-image');
			}
		}
	}
}, 2000);

let nextStep = document.querySelectorAll('.button-next-step');
let prevStep = document.querySelectorAll('.button-prev-step');
let questionnaireStep = document.querySelectorAll('.questionnaire__step');
for (let i = 0; i < nextStep.length; i++) {
	nextStep[i].onclick = function (event) {
		event.preventDefault();
		questionnaireStep[i].classList.remove('active-step');
		questionnaireStep[i].nextElementSibling.classList.add('active-step');
		window.scrollTo(0, 0);
	}
	prevStep[i].onclick = function (event) {
		event.preventDefault();
		let j = i + 1;
		questionnaireStep[j].classList.remove('active-step');
		questionnaireStep[j].previousElementSibling.classList.add('active-step');
		window.scrollTo(0, 0);
	}
}

let actualCredit2 = document.querySelector('.actual-credit-2Box');
let actualCredit3 = document.querySelector('.actual-credit-3Box');
let actualCredit4 = document.querySelector('.actual-credit-4Box');
let addCredit2 = document.querySelector('.add-credit-2');
let addCredit3 = document.querySelector('.add-credit-3');
let addCredit4 = document.querySelector('.add-credit-4');
addCredit2.onclick = function (event) {
	event.preventDefault();
	actualCredit2.classList.add('active-actual-credit');
}
addCredit3.onclick = function (event) {
	event.preventDefault();
	actualCredit3.classList.add('active-actual-credit');
}
addCredit4.onclick = function (event) {
	event.preventDefault();
	actualCredit4.classList.add('active-actual-credit');
}

let block15TitleBox = document.querySelector('.block-15__titleBox');
let block15 = document.querySelector('.block-15');
let questionnaireBTN = document.querySelector('.questionnaire__submitBtn');
let appendInput = document.querySelector('.append-input');
let appendInputBox = document.querySelector('.append-inputBox');
let dropAreaWrapper = document.querySelector('.drop-area__wrapper');

if (window.innerWidth < 769) {
	block15.prepend(block15TitleBox);
	questionnaireBTN.value = "Отправить";
	appendInputBox.appendChild(appendInput);
	dropAreaWrapper.appendChild(filePreview);
}
let questionnairePopupWrapper = document.querySelector('.questionnaire-popup__wrapper');
let questionnairePopupBody = document.querySelector('.questionnaire-popup__body');
let questionnaireForm = document.querySelector('.questionnaire__form');
questionnaireForm.onsubmit = async (e) => {
	e.preventDefault();
	let formData = new FormData(questionnaireForm);
	formData.append('files', fileInput.files);
	let response = await fetch('questionnaire-action.php', {
		method: 'POST',
		body: formData
	});
	if (response.ok) {
		questionnaireForm.reset();
		filePreview.innerHTML = '';
		questionnairePopupWrapper.classList.add('popup-open');
		questionnairePopupBody.classList.add('popup-open');
	} else {
		alert('Произошла ошибка отправки, попробуйте еще раз!');
	}
}
