window.addEventListener('load', function() {

// Create an array to store the results of the game.
var gameResults = [];
    
startGame();

// If the first two results are identical(2 wins or 2 losses), then run the game a 3rd time for a tie-breaker
function startGame() {
        for (i=0; gameResults.length < 3; i++) {
        rpsGame();
    }

    function rpsGame() {

        

// Generate a random number that will determine the computer's choice
        const randomNum = Math.random() * 3 + 1;
        const aiChoice = Math.floor(randomNum);

        let guess = prompt('Choose rock, paper, or scissors.');

// Let the player know which choice the computer made
        switch (aiChoice) {
            case 1:
                alert('The computer chose rock');
                console.log('The computer chose rock: ' + aiChoice);
                break;
            case 2:
                alert('The computer chose paper');
                console.log('The computer chose paper: ' + aiChoice);
                break;
            case 3:
                alert('The computer chose sciccors');
                console.log('The computer chose scissor: ' + aiChoice);
                break;
            default:
                alert('Pick a new game');
        }

// Decide which function to call depending on the user's guess
        switch(guess) {
            case 'rock':
            case 'Rock':
                chooseRock();
                break;
            case 'paper':
            case 'Paper': 
                choosePaper();
                break;
            case 'scissor':
            case 'Scissor':
            case 'scissors':
            case 'Scissors':
                chooseScissors();
                break;
            default:
                alert("There was an error with your guess.");
        }

// Stop game if the player wins or loses twice in a row
        if (gameResults[0] === gameResults[1]) {
            gameResults.push('');
        } 

// Declare functions that decide how the computer will respond to each guess
        function chooseRock() {
            console.log('You chose rock.');
            switch (aiChoice) {
                case 1:
                   rpsGame();
                    break;
                case 2:
                    alert('Paper beats rock. You lose.');
                    gameResults.push('You lose.');
                    break;
                case 3:
                    alert('Rock smashes scissors! You win!');
                    gameResults.push('You win!');
                    break;
                default:
                    alert('How do you mess up this game?!?');
            }
        }
        
        function choosePaper() {
            console.log('You chose paper.');
            switch (aiChoice) {
                case 1:
                    alert("Paper covers rock! You win!");
                    gameResults.push('You win!');
                    break;
                case 2:
                    rpsGame();
                    break;
                case 3:
                    alert('Scissors cut paper. You lose.');
                    gameResults.push('You lose.');
                    break;
                default:
                    alert('How do you mess up this game?!?');
            }
        }

        function chooseScissors() {
            console.log('You chose scissors.');
            switch (aiChoice) {
                case 1:
                    alert('Rock smashes scissors. You lose.');
                    gameResults.push('You lose.');
                    break;
                case 2:
                    alert('Scissors cut paper! You win!');
                    gameResults.push('You win!');
                    break;
                case 3:
                    rpsGame();
                    break;
                default:
                alert('How do you mess up this game?!?');
            }
        }
    }
    console.log(gameResults);

    

    if (gameResults[0] === gameResults[1]) {
        alert(gameResults[1]);
    } else {
        alert(gameResults[2]);
    }
    
    // Clear the array, so that it's ready for the next game
    gameResults = [];

    }

// Reset the game
    let playAgain = document.getElementById('play-again');
        playAgain.addEventListener('click', function() {
            startGame();
    });
});