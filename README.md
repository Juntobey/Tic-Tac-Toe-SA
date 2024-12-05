# Tic-Tac-Toe-SA
Building a SA style tic-tac-toe with JavaScript 
Our first task is to install Node.js, a runtime environment that lets us run JavaScript code from the terminal rather than the browser.

You can install it from the Node.js website, or check if you already have it installed with the node -v command. If not, you can type npm install prompt-sync in the terminal to install the package after downloading from the Node.js website. To execute your program, run node <filename> in the terminal and press enter.

node tictactoe.js

In this example, tictactoe.js is the file name you saved your code in.

We must import the 'prompt-sync' package to handle user input. This can be done with the following code:

const prompt = require('prompt-sync')();

Next, we need to set up the game variables such as the game board, player names, and state of the game.

Below where we imported prompt-sync, let's define the following variables:

gameBoard
currentPlayer
gameActive
Since the game will be played on the console, we can use blank spaces to represent the gameBoard as an array with 9 positions:

let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

In addition to this, we also need to assign a name for players to track which players turn it is.

While players would typically use Xs and Os to play Tic-Tac-Toe, we will use goats and grapes. Thus, player 1 be ‘🐐’, but you can assign any name to it.

let currentPlayer = '🐐';

You may have noticed that we only assigned one name to a player, despite there being two players in a Tic-Tac-Toe game. Don’t worry – we’ll address this later in the program.

We also need to set up a game state, so the program knows when to stop and finish. When we run the program, we can start with the gameActive variable being set to true. This ensures the game keeps going until there is a win or a draw.

let gameActive = true;

Now that we've initialized our essential variables, it's time to work on the game functionality.
