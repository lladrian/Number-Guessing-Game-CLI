# CLI Number Guessing Game


A simple command-line number guessing game where the computer randomly selects a number and the user has to guess it. 
The user will be given a limited number of chances to guess the number. If the user guesses the number correctly, 
the game will end, and the user will win. Otherwise, the game will continue until the user runs out of chances.

## Features

- When the game starts, it should display a welcome message along with the rules of the game.
- The computer should randomly select a number between 1 and 100.
- User should select the difficulty level (easy, medium, hard) which will determine the number of chances they get to guess the number.
- The user should be able to enter their guess.
- If the user’s guess is correct, the game should display a congratulatory message along with the number of attempts it took to guess the number.
- If the user’s guess is incorrect, the game should display a message indicating whether the number is greater or less than the user’s guess.
- The game should end when the user guesses the correct number or runs out of chances.

## Add-ons Features

- Allow the user to play multiple rounds of the game (i.e., keep playing until the user decides to quit). You can do this by asking the user if they want to play again after each round.
- Add a timer to see how long it takes the user to guess the number.
- Implement a hint system that provides clues to the user if they are stuck.
- Keep track of the user’s high score (i.e., the fewest number of attempts it took to guess the number under a specific difficulty level).

## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed.

2. Clone or download this project.

3. To run use this command : "node cli_number_guessing_game.js"
  - Usage: node cli_number_guessing_game.js
  - Prompts:
      -  **1**       Easy(10)
      -  **2**       Medium(5)
      -  **3**       Hard(3)
      -  **4**       Show this help message
      -  **5**       Quit

4. https://roadmap.sh/projects/number-guessing-game
