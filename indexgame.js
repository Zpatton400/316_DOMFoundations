// Generate a random number between 1 and 10
var answer = Math.floor(Math.random() * 10) + 1;

// Initialize the number of attempts
var attempts = 3;

// Select and cache the <div id="app"> element
var appEl = document.querySelector('#app');

// Game function
function playGame() {
  // While there are still attempts left
  while (attempts > 0) {
    // Ask the user to guess the number
    var guess = window.prompt('Guess a number between 1 and 10');

    // If the user's guess is correct
    if (guess == answer) {
      // Inform the user that they have won and end the game
      window.alert('Congratulations, you guessed the number!');
      appEl.textContent = 'Congratulations, you guessed the number!';
      return;
    } else {
      // If the user's guess is incorrect, decrement the number of attempts and inform the user
      attempts--;
      window.alert('Incorrect guess. You have ' + attempts + ' attempts left.');
      appEl.textContent = 'Incorrect guess. You have ' + attempts + ' attempts left.';
    }
  }

  // If the user has used all attempts and not guessed the number, inform them that they have lost
  window.alert('Sorry, you did not guess the number. The number was ' + answer + '.');
  appEl.textContent = 'Sorry, you did not guess the number. The number was ' + answer + '.';
}

// Use setTimeout to delay the start of the game by 1 second to allow the DOM to render
setTimeout(playGame, 1000);