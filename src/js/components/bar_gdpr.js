import { ModalWindow } from '../classes/ModalWindow.js';

const OPEN_GDPR_BTN = document.querySelector('#gdpr_read');
const ACCEPT_GDPR_BTN = document.querySelector('#gdpr_accept');

export const SHOW_GDPR_BAR = () => {
	document.querySelector('#bar_gdpr').classList.toggle('bar_gdpr--active');
};

export const HIDE_GDPR_BAR = () => {
	document.querySelector('#bar_gdpr').classList.remove('bar_gdpr--active');
	window.localStorage.setItem('gdpr', 'confirmed');
	setTimeout(() => {
		document.querySelector('#bar_gdpr').remove();
	}, 1000);
};

export const OPEN_GDPR = () => {
	new ModalWindow('gdpr_info', {
		content: 'gdpr',
		closeBtn: false,
		action: 'accept',
		buttonNamePl: 'Akceptuję wszystko',
		buttonNameEn: 'Accept all',
		_path: '/json/gdpr_content.json'
	});
};

window.addEventListener('load', () => {
	if (window.localStorage.getItem('gdpr') === 'unconfirmed') {
		setTimeout(SHOW_GDPR_BAR, 3000);
	} else {
		document.querySelector('#bar_gdpr').remove();
	}
});
OPEN_GDPR_BTN.onclick = OPEN_GDPR;
ACCEPT_GDPR_BTN.onclick = HIDE_GDPR_BAR;
