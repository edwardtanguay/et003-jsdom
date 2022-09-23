const messageElem = document.querySelector('.message');
const changeTextButtonElem = document.querySelector('.changeTextButton');

messageElem.innerText = 'initial text';
changeTextButtonElem.addEventListener('click', () => {
	messageElem.innerText = 'the button was clicked';
});