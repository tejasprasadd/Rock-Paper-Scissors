let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const playGame = (userChoice) => {
  console.log("User Choice: ", userChoice);
  const compChoice = genComputerChoice();
  console.log("Computer Choice: ", compChoice);
  if (userChoice === compChoice) {
    //Draw Condition
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      //rock or scissors
      userWin = compChoice === "scicssors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("User Won!");
    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = userScore;
    console.log("Computer Won!");
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  msg.innerText = "Game was Draw,Play Again!";
  console.log("Draw");
  msg.style.backgroundColor = "rgb(0, 179, 255)";
};

const genComputerChoice = () => {
  //Rock,Paper and Scissors
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
