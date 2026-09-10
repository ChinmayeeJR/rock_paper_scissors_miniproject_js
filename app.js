let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genCompChoice = () => {
      const options = ["rock", "paper", "scissors"];
      const randIdx = Math.floor(Math.random() * 3);
      return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game draw!"
    msg.style.backgroundColor = "#081b01";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You Win! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("you lose!");
        msg.innerText = `You lose! computer's ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice)  => {
    console.log("user choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
      drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper"  ?  false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false: true;
        } else {
            compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice)   =>  {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});