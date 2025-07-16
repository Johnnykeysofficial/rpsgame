# rpsgame

START

FUNCTION computerChoice
    // Define the available options
    SET choices TO ["rock", "paper", "scissors"]
    
    // Select a random number between 0 and 2 (since choices has 3 items)
    SET randomIndex TO a random number between 0 and length of choices - 1
    
    // Return the choice at the random index
    RETURN choices[randomIndex]
END FUNCTION


FUNCTION getResult(playerPick, computerPick)
    // Check if the player's pick is the same as the computer's
    IF playerPick IS EQUAL TO computerPick THEN
        RETURN "It's a draw"
    END IF

    // Check if the player wins based on the game's rules
    IF (playerPick is "rock" AND computerPick is "scissors") OR
       (playerPick is "scissors" AND computerPick is "paper") OR
       (playerPick is "paper" AND computerPick is "rock")
    THEN
        RETURN "You win"
    END IF

    // If none of the above, the player loses
    RETURN "You lose"
END FUNCTION


FUNCTION playGame(playerChoice)
    // Generate a random choice for the computer
    SET computerPick TO computerChoice()

    // Determine the result of the game
    SET result TO getResult(playerChoice, computerPick)

    // Show the choices and the result to the user
    PRINT "You picked: " + playerChoice
    PRINT "Computer picked: " + computerPick
    PRINT result
END FUNCTION


// Example: Play the game with "rock" as the player's choice
CALL playGame WITH "rock"

END
