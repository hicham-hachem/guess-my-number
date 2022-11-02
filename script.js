"use strict";

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

checkButton.addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // When there is no input
    if (guess == "") {
        displayMessage("⛔️ No number!");

        // When the player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
            highscore = score;
        }
        document.querySelector(".highscore").textContent = highscore;

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".score").textContent = score;
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
        } else {
            document.querySelector(".score").textContent = 0;
            displayMessage("💥 You lost the game!");
        }
    }
});

againButton.addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    displayMessage("Start guessing...");
});
