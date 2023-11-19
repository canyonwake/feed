function playGame(playerMove) {
    const computerMove = pickComputerMove();
      
    console.log(computerMove);

    
    let result = '';

    if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
          result = 'You Lose';
      } else if (computerMove === 'Paper') {
          result = 'You Win';
      } else if (computerMove === 'Scissors') {
          result = 'Tie';
      } 

  } else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
      result = 'You Win';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else if (computerMove === 'Scissors') {
      result = 'You Lose';
    }

  } else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You Lose';
    } else if (computerMove === 'Scissors') {
      result = 'You Win';
    }
  }
   
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML 
    
    = `You
  <img src="images/${playerMove}.png"
  class="move-icon">
  Computer
  <img src="images/${computerMove}.png"
  class="move-icon">`;
    
    //= `You ${playerMove} - Computer ${computerMove}`;
  

     // alert(`You picked ${playerMove}, Computer picked ${computerMove} ${result}`);
  
  }
  

  function pickComputerMove() {
    const randomNumber = Math.random();
    
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2/3) {
      computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
    }        
    return computerMove;
  }