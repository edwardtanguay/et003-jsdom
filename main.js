const message1Elem = document.querySelector('.message1');
const message2Elem = document.querySelector('.message2');
const userText1Elem = document.querySelector('.userText1');
const userText2Elem = document.querySelector('.userText2');
const changeText1ButtonElem = document.querySelector('.changeText1Button');
const changeText2ButtonElem = document.querySelector('.changeText2Button');

const toggleAnswerButtonElem = document.querySelector('.toggleAnswerButton');
const answerElem = document.querySelector('.answer');

const scoresContentElem = document.querySelector('.scoresContent');

const scoreItems = [
	{
		user: "EJT",
		score: "01842"
	},
	{
		user: "PPB",
		score: "01812"
	},
	{
		user: "EJT",
		score: "01482"
	},
	{
		user: "EJT",
		score: "01289"
	}
];

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

// SCORES

scoresContentElem.innerHTML = scoreItems.map(score => {
	return `
	<table className="score">
		<tr>
			<td className="user">${score.user}</td>	
			<td className="user">${score.score}</td>	
		</tr>
	</table>
	`;
}).join('');