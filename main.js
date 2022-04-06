const headerContainer = document.querySelector("#header"); //контейнер для заголовка
const listContainer = document.querySelector("#list"); //контейнер для вариантов ответа
const submitBtn = document.querySelector("#submit"); //кпопка отправки ответа

let score = 0; //количество очков
let questionIndex = 0; //индекс текущего вопроса


// массив с объектами, содержащими вопросы, варианты ответов и номер правильного ответа
const questions = [
	{
		question: "Вставьте пропущенное слово: «Мы есть то что мы… из дня в день.» Аристотель",
		answers: ["Делаем", "Едим", "Думаем", "Чувствуем"],
		correct: 1,
	},
	{
		question: "Что такое Атихифобия?",
		answers: [
			"Страх приёма лекарственных средств",
			"Боязнь пауков",
			"Страх перед едой",
			"Страх совершить ошибку",
		],
		correct: 4,
	},
	{
		question: "У какого персонажа Симпсонов пять пальцев?",
		answers: [
			"Гомер Симпсон",
			"Барт Симпсон",
			"Бог",
			"Клоун",
		],
		correct: 3,
	},
	{
		question: "В августе 2010 образовалась самая длинная пробка на дороге, продолжительностью 10 дней и протяжённостью в 100 км. Где это произошло?",
		answers: ["Пекин", "Нью-Йорк", "Москва", "Шанхай"],
		correct: 1,
	},
	{
		question: "Какой срок годности ГОСТ предписывал советскому мороженому?",
		answers: ["5 дней", "Месяц", "Неделя", "14 дней"],
		correct: 3,
	},
];

//функция отчистки html разметки
const clearPage = () => {
	headerContainer.innerHTML = "";
	listContainer.innerHTML = "";
}

//функция, выполняющая рендеринг текущего вопроса
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

//функция, показывающая результат игры
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

//функция, проверяющая правильность ответа
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
//передача функции checkAnswer по клику на submitBtn
submitBtn.onclick = checkAnswer;

//первоначальный рендеринг вопросов
showQuestion()  




