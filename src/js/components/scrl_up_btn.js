const GRIP = document.querySelector('main');
let isButtonActive = false;

export const SCROLL = () => {
	let scrollBtn = document.querySelector('.scroll_btn');
	if (isButtonActive == false) {
		return 0;
	}
	if (window.scrollY > 500) {
		scrollBtn.classList.add('scroll_btn--active');
	} else {
		scrollBtn.classList.remove('scroll_btn--active');
	}
	scrollBtn.onclick = () => {
		window.scrollTo({
			top: 0,
			left: 100,
			behavior: 'smooth'
		});
	};
};
export const CREATE_BUTTON = () => {
	if (isButtonActive === true) {
		return 0;
	}
	if (window.innerWidth <= 780) {
		isButtonActive = true;
		let scrlBtn = document.createElement('button');
		let arrowTop = document.createElement('div');
		let arrowBot = document.createElement('div');
		let arrowCont = document.createElement('div');
		arrowTop.className = 'arrow-class--top';
		arrowBot.className = 'arrow-class--bottom';
		arrowCont.className = 'arrow-class';
		scrlBtn.className = 'scroll_btn';
		scrlBtn.setAttribute('aria-label', 'Przewiń do góry');
		scrlBtn.setAttribute('tabindex', '0');
		scrlBtn.setAttribute('title', 'Przewiń do góry');
		arrowCont.appendChild(arrowTop);
		arrowCont.appendChild(arrowBot);
		scrlBtn.appendChild(arrowCont);
		GRIP.appendChild(scrlBtn);
	}
};
window.onresize = CREATE_BUTTON;
window.onload = CREATE_BUTTON;
window.onscroll = SCROLL;
