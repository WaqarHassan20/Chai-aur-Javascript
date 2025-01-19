let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");


const genCompChoice = () => {
    const options = ["rock", "scissors", "paper"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win. You beated Comp";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose. Comp beated You";
        msg.style.backgroundColor = "red";
    }
}

const drawgame = () => {
    msg.innerText = "Game Draw. Try Again";
    msg.style.backgroundColor = "brown";
}


const playGame = (userChoice) => {
    console.log("User Selected ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice ", compChoice);

    if (userChoice === compChoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? true : false;
        }
        else if (userwin = "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors") {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});