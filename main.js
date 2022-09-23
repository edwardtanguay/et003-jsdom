const message1Elem = document.querySelector('.message1');
const message2Elem = document.querySelector('.message2');
const userText1Elem = document.querySelector('.userText1');
const userText2Elem = document.querySelector('.userText2');
const changeText1ButtonElem = document.querySelector('.changeText1Button');
const changeText2ButtonElem = document.querySelector('.changeText2Button');

userText1Elem.focus();

const changeTheText = () => {
	message1Elem.innerText = userText1Elem.value;
	userText1Elem.value = '';
	userText1Elem.focus();
};

changeText1ButtonElem.addEventListener('click', changeTheText);

userText1Elem.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		changeTheText();
	}
});
