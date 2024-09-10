//your code here

// Generate a random secret number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Variables to store previous guess and the current guess
let previousGuess = null;
let currentGuess = null;

// Get references to the input and response elements
const guessInput = document.getElementById('guess');
const responseElement = document.getElementById('response');
const submitButton = document.getElementById('submitGuess');

// Event listener for the button click
submitButton.addEventListener('click', function() {
    // Get the user's guessed number and convert to integer
    currentGuess = parseInt(guessInput.value);

    // Validate the input to ensure it's a number
    if (isNaN(currentGuess)) {
        responseElement.innerText = "Please enter a valid number.";
        return;
    }

    // If there's no previous guess, simply check if it's higher or lower
    if (previousGuess === null) {
        if (currentGuess > secretNumber) {
            responseElement.innerText = "Guess lower!";
        } else if (currentGuess < secretNumber) {
            responseElement.innerText = "Guess higher!";
        } else {
            responseElement.innerText = "Congratulations! You guessed the correct number!";
        }
    } else {
        // Check if the user is getting hotter or colder
        const prevDifference = Math.abs(previousGuess - secretNumber);
        const currentDifference = Math.abs(currentGuess - secretNumber);

        if (currentDifference < prevDifference) {
            responseElement.innerText = "Getting hotter! ";
        } else if (currentDifference > prevDifference) {
            responseElement.innerText = "Getting colder! ";
        } else {
            responseElement.innerText = "Same distance! ";
        }

        // Add hints to guess higher or lower
        if (currentGuess > secretNumber) {
            responseElement.innerText += "Guess lower!";
        } else if (currentGuess < secretNumber) {
            responseElement.innerText += "Guess higher!";
        } else {
            responseElement.innerText = "Congratulations! You guessed the correct number!";
        }
    }

    // Update the previous guess to the current guess
    previousGuess = currentGuess;

    // Clear the input field for the next guess
    guessInput.value = '';
});

