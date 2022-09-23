const messageElem = document.querySelector('.message');
const userTextElem = document.querySelector('.userText');
const changeTextButtonElem = document.querySelector('.changeTextButton');

userTextElem.focus();

const changeTheText = () => {
	messageElem.innerText = userTextElem.value;
	userTextElem.value = '';
	userTextElem.focus();
};

messageElem.innerText = 'initial text';
changeTextButtonElem.addEventListener('click', changeTheText);

userTextElem.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		changeTheText();
	}
});
