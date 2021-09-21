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

new Swiper('.slider-special', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.slider-special__btn-next',
		prevEl: '.slider-special__btn-prev'
	},
});

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
toFirstBtn.onclick = function () {
	event.preventDefault();
	itemCredit2.classList.remove('active-credit');
	itemCredit1.classList.add('active-credit');
}
for (let i = 0; i < toSecondBtn.length; i++) {
	toSecondBtn[i].onclick = function () {
		event.preventDefault();
		itemCredit1.classList.remove('active-credit');
		itemCredit3.classList.remove('active-credit');
		itemCredit2.classList.add('active-credit');
	}
}

toThirdBtn.onclick = function () {
	event.preventDefault();
	itemCredit2.classList.remove('active-credit');
	itemCredit3.classList.add('active-credit');
}


