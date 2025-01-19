const questions = [
    {
        'que': 'Which of the following is markup language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JS',
        'd': 'PHP',
        'correct': 'a',
    },
    {
        'que': 'When JavaScript was invented ?',
        'a': '1994',
        'b': '1995',
        'c': '1996',
        'd': 'none',
        'correct': 'b',
    },
    {
        'que': 'What does CSS stands for ?',
        'a': 'HyperText Markup Language',
        'b': 'CasCading Style Sheets',
        'c': 'Core Science Subjects',
        'd': 'Computing Social Sciences ',
        'correct': 'b',
    },
]

let index = 0;
let right = 0, wrong = 0;
let total = questions.length;
const questionBox = document.getElementById("question-box");
const optionsInput = document.querySelectorAll(".options");
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    let data = questions[index];
    questionBox.innerText = `${index + 1} ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const reset = () => {
    optionsInput.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    let end = document.getElementById("box");
    end.innerHTML = `
    <div style="text-align:center">
    <h3> Thank You for Playing the Quiz </h3>
    <h2> ${right} / ${total} are Correct </div>
    `;

}

const getAnswer = () => {
    let answer;
    optionsInput.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    })
    return answer;
}

loadQuestion();


