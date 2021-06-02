const play = document.querySelector('button');

const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
	wrapper: svgContainer,
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

play.addEventListener('click', () => {
	svgContainer.classList.remove('hidden');
	animItem.goToAndPlay(0, true);
	// fadeElOut(document.querySelector('.screen1'), 600);

	let screen1 = new Fadeable(document.querySelector('.screen1'), 'flex');
	screen1.fadeElOut(1000);

	setTimeout(() => {
		startScreen2();
	}, 1000);
});

animItem.addEventListener('complete', () => {
	console.log('complete');
	// svgContainer.classList.add('hidden');
});

function startScreen2() {
	let screen2 = new Fadeable(document.querySelector('.screen2'), 'flex');
	console.log('starting screen 2');
	screen2.fadeElIn(2001);
}

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

		// this.el.style.transition = `opacity ${fadeTime / 1000}s ease`;
		// this.el.style.opacity = this.minFade;

		// this.timeout = setTimeout(() => {
		// 	this.el.style.display = 'none';
		// }, fadeTime);

		console.log('started fadeout');
		this.el.style.transition = `opacity ${fadeTime / 1000}s ease`;

		setTimeout(() => {
			this.el.style.opacity = this.minFade;
		}, 0);

		// this.el.addEventListener('transitionend', () => {
		// 	console.log('ended fadeout');
		// 	this.el.style.display = 'none';
		// });

		this.timeout = setTimeout(() => {
			this.el.style.display = 'none';
		}, fadeTime);
	};

	this.fadeElIn = function (fadeTime = 300, maxFade, displayMode) {
		// clearTimeout(this.timeout);

		if (maxFade) {
			this.maxFade = fadeTo;
		}

		if (displayMode) {
			this.displayMode = displayMode;
		}

		// this.el.style.display = this.displayMode;

		// this.el.style.transition = `opacity ${fadeTime / 1000}s ease`;
		// this.el.style.opacity = this.maxFade;

		this.el.style.transition = `opacity ${fadeTime / 1000}s ease`;
		this.el.style.display = this.displayMode;
		this.el.clientWidth;
		this.el.style.opacity = this.maxFade;
	};
}
