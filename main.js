const message1Elem = document.querySelector('.message1');
const message2Elem = document.querySelector('.message2');
const userText1Elem = document.querySelector('.userText1');
const userText2Elem = document.querySelector('.userText2');
const changeText1ButtonElem = document.querySelector('.changeText1Button');
const changeText2ButtonElem = document.querySelector('.changeText2Button');

const toggleAnswerButtonElem = document.querySelector('.toggleAnswerButton');
const answerElem = document.querySelector('.answer');

// FLASHCARDS

toggleAnswerButtonElem.addEventListener('click', () => {
	answerElem.classList.toggle('hidden');
});

// DOM JS TEXT

userText1Elem.focus();

// ONE
const changeTheText1 = () => {
	message1Elem.innerText = userText1Elem.value;
	userText1Elem.value = '';
	userText2Elem.focus();
};

changeText1ButtonElem.addEventListener('click', changeTheText1);

userText1Elem.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		changeTheText1();
	}
});

// TWO 
const changeTheText2 = (e) => {
	message2Elem.innerText = userText2Elem.value;
	userText2Elem.value = '';
	userText1Elem.focus();
	e.preventDefault();
};

changeText2ButtonElem.addEventListener('click', changeTheText2);

userText2Elem.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		changeTheText2();
	}
});
