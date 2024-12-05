# Tic-Tac-Toe-SA
1. Setting up the Environment

Node.js: This is essential for running JavaScript outside a web browser. Install it from the official website (https://nodejs.org/).
prompt-sync: This package allows the game to get input from the user in the terminal. Install it using npm (Node Package Manager) with the command npm install prompt-sync.
2. Basic Game Structure

gameBoard: An array representing the tic-tac-toe grid. It starts with 9 empty spaces (' ') to signify an empty board.
currentPlayer: A variable to keep track of whose turn it is. It's initialized to '🐐' (a goat emoji) as player 1, giving it a South African flavour.
gameActive: A boolean (true or false) that indicates whether the game is still in progress. It's set to true at the start.
3. South African Twist

The README suggests using "goats and grapes" (🐐 and 🍇) instead of the traditional Xs and Os, adding a unique South African touch to the game.

4. Next Steps

The README implies that the next steps would involve:

Displaying the board: A function to visually represent the game board array in the console.
Getting player input: Using prompt-sync to ask the current player where they want to place their mark (goat or grape).
Updating the board: Changing the game board array based on player input.
Checking for a win or draw: Logic to determine if a player has won or if the game is a draw.
Switching players: Alternating the current player between goat and grape.
Ending the game: Setting gameActive to false when the game is over.
