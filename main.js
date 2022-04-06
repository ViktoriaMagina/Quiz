const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

let score = 0; //количество очков
let questionIndex = 0; //индекс текущего вопроса

const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];

const clearPage = () => {
	headerContainer.innerHTML = "";
	listContainer.innerHTML = "";
}

const showQuestion = () => {
	let inputValue = 1
	const headerHtml = `<h2 class="title">%title%</h2>`
	const newheaderHtml = headerHtml.replace('%title%', questions[questionIndex]['question'])
	headerContainer.innerHTML = newheaderHtml;
	for (answer of questions[questionIndex]['answers']){
		const questionsHtml = 
		`
		<li>
			<label>
				<input type="radio" class="answer" name="answer" value="${inputValue}"/>
				<span>${answer}</span>
			</label>
		</li>
		`
		listContainer.innerHTML += questionsHtml
		inputValue++
	}
}

const showResult =() => {
	const headerHtml = `<h2 class="title">Викторина окончена!</h2>`
	headerContainer.innerHTML = headerHtml
	const resHtml = `
		<p class="summary">Всего вопросов: ${questions.length}</p>
		<p class="result">Ваш результат: ${score}</p>
		<p>Какой бы результат у Вас ни был - Вы большой молодец! <span>&#x1F609</span></p>
	`
	headerContainer.insertAdjacentHTML('afterend', resHtml)
	submitBtn.innerText = "Пройти заново"
}

const checkAnswer = () => {
	if (questionIndex === parseInt(questions.length)){
		location.reload() 
	}
	const chekedAnswer = list.querySelector("input[type='radio']:checked")
	if(!chekedAnswer){
		submitBtn.blur()
		alert("Вы не выбрали ответ")
	}
	parseInt(chekedAnswer.value) === questions[questionIndex]['correct']
	? score +=1
	: score +=0
	listContainer.innerHTML = ""
	questionIndex++;
	if (questionIndex < questions.length){
		showQuestion() 
	}
	else{
		showResult()
	}
}

submitBtn.onclick = checkAnswer;

showQuestion()  




