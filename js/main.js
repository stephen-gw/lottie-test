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

const lottie1Container = document.getElementById('lottie1');
const lottie1 = bodymovin.loadAnimation({
	wrapper: lottie1Container,
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
	lottie1Container.classList.remove('hidden');
	lottie1.goToAndPlay(0, true);
	// fadeElOut(document.querySelector('.screen1'), 600);

	let screen1 = new Fadeable(document.querySelector('.screen1'), 'flex');
	screen1.fadeElOut(1000);

	setTimeout(() => {
		startScreen2();
	}, 1000);
});

lottie1.addEventListener('complete', () => {
	console.log('complete');
});

// Screen2

function startScreen2() {
	let screen2 = new Fadeable(document.querySelector('.screen2'), 'flex');
	console.log('starting screen 2');
	screen2.fadeElIn(2001);
}

const lottie2Container = document.getElementById('lottie2');
const lottie2 = bodymovin.loadAnimation({
	wrapper: lottie2Container,
	animType: 'svg',
	loop: false,
	autoplay: false,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	},
	path: 'https://assets4.lottiefiles.com/private_files/lf30_lb5k90wv.json'
});
