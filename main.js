const messageElem = document.querySelector('.message');
const userText1Elem = document.querySelector('.userText1');
const userText2Elem = document.querySelector('.userText2');
const changeText1ButtonElem = document.querySelector('.changeText1Button');
const changeText2ButtonElem = document.querySelector('.changeText2Button');

userText1Elem.focus();

const changeTheText = () => {
	messageElem.innerText = userText1Elem.value;
	userText1Elem.value = '';
	userText1Elem.focus();
};

messageElem.innerText = 'initial text';
changeText1ButtonElem.addEventListener('click', changeTheText);

userText1Elem.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		changeTheText();
	}
});
