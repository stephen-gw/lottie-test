function Fadeable(el, displayMode = 'block') {
	this.timeout = null;
	this.el = el;
	this.displayMode = displayMode;
	this.maxFade = 1;
	this.minFade = 0;

	this.fadeElOut = function (fadeTime = 300, minFade) {
		clearTimeout(this.timeout);

		if (minFade) {
			this.minFade = fadeTo;
		}

		this.el.style.transition = `opacity ${fadeTime / 1000}s ease`;

		setTimeout(() => {
			this.el.style.opacity = this.minFade;
		}, 0);

		this.timeout = setTimeout(() => {
			this.el.style.display = 'none';
		}, fadeTime);
	};

	this.fadeElIn = function (fadeTime = 300, maxFade, displayMode) {
		if (maxFade) {
			this.maxFade = fadeTo;
		}

		if (displayMode) {
			this.displayMode = displayMode;
		}

		this.el.style.transition = `opacity ${fadeTime / 1000}s ease`;
		this.el.style.display = this.displayMode;
		this.el.clientWidth;
		this.el.style.opacity = this.maxFade;
	};
}

// Screen1

const lottie1Trigger = document.getElementById('lottie1-trigger');

const lottie1Wrapper = document.getElementById('lottie1');
const lottie1 = bodymovin.loadAnimation({
	wrapper: lottie1Wrapper,
	animType: 'svg',
	loop: false,
	autoplay: false,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	},
	path: 'https://assets2.lottiefiles.com/packages/lf20_yru7zw4e.json'
	// path: 'https://assets8.lottiefiles.com/packages/lf20_aEFaHc.json'
	// path: 'https://assets5.lottiefiles.com/packages/lf20_bsfd8nkc.json'
});

lottie1Trigger.addEventListener('click', () => {
	startLottie1();

	let screen1 = new Fadeable(document.querySelector('.screen1'), 'flex');
	screen1.fadeElOut(1000);
});

function startLottie1() {
	lottie1Wrapper.classList.remove('hidden');
	lottie1.goToAndPlay(0, true);
	setTimeout(() => {
		startScreen2();
	}, 1200);
}

lottie1.addEventListener('complete', () => {
	console.log('complete');
});

// Screen2

function startScreen2() {
	// let screen2 = new Fadeable(document.querySelector('.screen2'), 'flex');
	// console.log('starting screen 2');
	// screen2.fadeElIn(2001);
	startLottie2();
}

const lottie2Wrapper = document.getElementById('lottie2');
const lottie2 = bodymovin.loadAnimation({
	wrapper: lottie2Wrapper,
	animType: 'svg',
	loop: true,
	autoplay: false,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	},
	path: 'https://assets4.lottiefiles.com/packages/lf20_emy3lanj.json'
});

function startLottie2() {
	document.getElementById('lottie2-container').classList.remove('invisible');
	lottie2.goToAndPlay(0, true);
	setTimeout(() => {
		document.getElementById('lottie2').classList.add('lottie2-zoomed');
	}, 1500);
	setTimeout(() => {
		let screen2 = new Fadeable(document.querySelector('.screen2'), 'flex');
		console.log('starting screen 2');
		screen2.fadeElIn(2001);
	}, 3000);
	setTimeout(() => {
		document.getElementById('lottie2-container').classList.add('transition-transform-custom-slow-out');
		document.getElementById('screen2').classList.add('transition-transform-custom-slow-out');
		document.getElementById('lottie1-container').classList.add('transition-transform-custom-slow-out');
		setTimeout(() => {
			document.getElementById('lottie2-container').classList.add('throw-left');
		}, 100);
		setTimeout(() => {
			document.getElementById('screen2').classList.add('throw-left');
		}, 300);
		setTimeout(() => {
			document.getElementById('lottie1-container').classList.add('throw-left');
		}, 400);

		setTimeout(startLottie3, 2300);
	}, 6000);
}

// Screen3

const lottie3Wrapper = document.getElementById('lottie3');
const lottie3 = bodymovin.loadAnimation({
	wrapper: lottie3Wrapper,
	animType: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://assets7.lottiefiles.com/packages/lf20_fcqkht5y.json'
});

function startLottie3() {
	console.log('started lottie3');
	lottie3.goToAndPlay(0, true);

	document.getElementById('lottie3').classList.remove('hidden');

	document.getElementById('lottie3-container').classList.add('transition-opacity');
	setTimeout(() => {
		document.getElementById('lottie3-container').classList.add('invisible');
		startLottie4();
	}, 4400);
}

// Screen4

const lottie4Wrapper = document.getElementById('lottie4');
const lottie4 = bodymovin.loadAnimation({
	wrapper: lottie4Wrapper,
	animType: 'svg',
	loop: true,
	autoplay: false,
	path: 'https://assets3.lottiefiles.com/private_files/lf30_lb5k90wv.json'
});

function startLottie4() {
	lottie4.goToAndPlay(0, true);
	document.getElementById('lottie4-container').classList.remove('invisible');
	setTimeout(() => {
		document.getElementById('lottie4-container').classList.remove('lottie4-container-start-zoomed');
	}, 0);

	setTimeout(() => {
		document.querySelector('#lottie4-container .screen4-giant-ring').classList.add('screen4-giant-ring-collapsed');
	}, 4500);

	setTimeout(startLottie5, 5500);
}

// Screen5

function startLottie5() {
	console.log('screen5');
	document.querySelector('.screen5').classList.remove('invisible');

	setTimeout(() => {
		document.querySelector('.screen5-text-box').classList.add('screen5-text-box-entrance');
	}, 0);

	setTimeout(() => {
		lottie5Wrapper.classList.remove('hidden');
		lottie5.goToAndPlay(0, true);

		setTimeout(() => {
			document.getElementById('lottie5').classList.add('invisible');
		}, 500);
	}, 0);
}

const lottie5Wrapper = document.getElementById('lottie5');
const lottie5 = bodymovin.loadAnimation({
	wrapper: lottie5Wrapper,
	animType: 'svg',
	loop: false,
	autoplay: false,
	path: 'lottie/fireworks_transparent.json'
});
