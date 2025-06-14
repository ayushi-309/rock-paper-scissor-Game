let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
     //rock, paper, scissor
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice -> modular
    const compChoice = genCompChoice;
    console.log("comp choice = ", compChoice);
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
          console.log("choices was clicked", userChoice);
          playGame(userChoice);
    })
})