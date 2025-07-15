  function computerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomNum = Math.floor(Math.random() * choices.length);
        return choices[randomNum];
      }

      function getResult(playerPick, computerPick) {
        if (playerPick === computerPick) {
          return "It's a draw";
        } else if (
          (playerPick === "rock" && computerPick === "scissors") ||
          (playerPick === "scissors" && computerPick === "paper") ||
          (playerPick === "paper" && computerPick === "rock")
        ) {
          return "You win";
        } else {
          return "You lose";
        }
      }

      function playGame(playerChoice) {
        const computerPick = computerChoice();
        const result = getResult(playerChoice, computerPick);

        document.getElementById(
          "user_choice"
        ).innerText = `You chose: ${playerChoice}`;
        document.getElementById(
          "computer_choice"
        ).innerText = `Computer chose: ${computerPick}`;
        document.getElementById("result").innerText = result;
      }