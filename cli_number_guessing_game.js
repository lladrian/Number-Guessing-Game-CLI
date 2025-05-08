#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Parse command line arguments

function printUsage() {
  console.log('\nUsage: node cli_task_tracker.js');
  console.log('Prompts:');
  console.log('  1       Easy(10)');
  console.log('  2       Medium(5)');
  console.log('  3       Hard(3)');
  console.log('  4       Show this help message');
  console.log('  5       Quit');
}

function start_game(chances) {
    const numberToGuess = Math.floor(Math.random() * 100) + 1;
    const startTime = new Date(); // Start timer
    let attempts = 0;


    console.log(`I'm thinking of a number between 1 and 100.`);
    console.log(`You have ${chances} chances to guess the correct number.\n`);

    const guessNumber = () => {
        if (attempts < chances) {
            rl.question('\nEnter your guess: ', (input) => {
                const guess = parseInt(input);
                attempts++;
                if (isNaN(guess) || guess < 1 || guess > 100) {
                    console.log('Please enter a valid number between 1 and 100.');
                    --attempts;
                    guessNumber(); // Ask again
                } else if (guess < numberToGuess) {
                    console.log(`Incorrect! The number is greater than ${guess}.`);
                    guessNumber(); // Ask again
                } else if (guess > numberToGuess) {
                    console.log(`Incorrect! The number is less than ${guess}.`);
                    guessNumber(); // Ask again
                } else {
                    const endTime = new Date(); // End timer
                    const timeDiff = Math.floor((endTime - startTime) / 1000); // Time in seconds
                    console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                    console.log(`It took you ${timeDiff} seconds.`);
                   // rl.close();
                   // selectDifficulty(); // Ask again
                    start_again();
                }
            });
        } else {
            const endTime = new Date(); // End timer in case user fails
            const timeDiff = Math.floor((endTime - startTime) / 1000); // Time in seconds
            console.log(`\nSorry! You've used all your chances. The correct number was ${numberToGuess}.`);
            console.log(`You took ${timeDiff} seconds.`);
           // rl.close();
           // selectDifficulty(); // Ask again
            start_again();
        }
    };

    guessNumber();
}

function start_again() {

     rl.question('\nDo you want to play again? (yes/no): ', (choice) => {
        switch (choice) {
            case 'yes': {
                selectDifficulty(); // Ask again         
                break;
            }
        
            case 'no': {
                console.log('Game exited.');
                rl.close();
                break;
            }
        
            default: {
                console.log('Invalid choice.');
                start_again(); // Ask again
                break;
            }
        }
    });
}
const selectDifficulty = () => {
    console.log('\nWelcome to the Number Guessing Game!');
    console.log('Please select the difficulty level:');
    console.log('\n1. Easy (10 chances)');
    console.log('2. Medium (5 chances)');
    console.log('3. Hard (3 chances)');
    console.log('4. Help');
    console.log('5. Quit');

    rl.question('\nEnter your choice: ', (choice) => {
        switch (choice) {
            case '1': {
                console.log('\nGreat! You have selected the Easy difficulty level.');
                start_game(10);           
                break;
            }
        
            case '2': {
                console.log('\nGreat! You have selected the Medium difficulty level.');
                start_game(5);
                break;
            }
        
            case '3': {
                console.log('\nGreat! You have selected the Hard difficulty level.');
                start_game(3);
                break;
            }

            case '4': {
                printUsage();
                start_again(); // Ask again
               // rl.close();
                break;
            }
        
            case '5': {
                console.log('Game exited.');
                rl.close();
                break;
            }
        
            default: {
                console.log('Invalid choice. Please select a valid difficulty level.');
                selectDifficulty(); // Ask again
                break;
            }
        }
    });
}

selectDifficulty();

