const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    //Starts the game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const computerHand = document.querySelector('.computer-hand');
        const playerHand = document.querySelector('.player-hand');
        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option=>{
            option.addEventListener('click', function(){
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                //Call compare hands
                compareHands(this.textContent, computerChoice);

                //Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });  
    };

    //Update Score
    const updateScore = () =>{
        const computerScore = document.querySelector('.computer-score p');
        const playerScore = document.querySelector('.player-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    //Comparison function
    const compareHands = (playerChoice, computerChoice) =>{
        //Update text
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        //Check for a rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //call all the inner functions
    startGame();
    playMatch();

};

//start the game function
game();

