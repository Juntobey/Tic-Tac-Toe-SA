const prompt = require('prompt-sync')();

let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let currentPlayer = '';
let playerIcons = [];
let gameActive = true;
let language = '';

// Language-specific messages
const messages = {
    en: {
        welcome: "Welcome to South African Tic-Tac-Toe!",
        move: "Player {player}, enter your move (0-8): ",
        invalid: "Invalid position! Enter a number between 0 and 8.",
        taken: "That spot is already taken. Choose another one.",
        win: "Congratulations! Player {player} wins!",
        draw: "It's a draw!"
    },
    af: {
        welcome: "Welkom by Suid-Afrikaanse Tic-Tac-Toe!",
        move: "Speler {player}, voer jou skuif in (0-8): ",
        invalid: "Ongeldige posisie! Voer 'n nommer tussen 0 en 8 in.",
        taken: "Daardie plek is reeds geneem. Kies 'n ander een.",
        win: "Baie geluk! Speler {player} wen!",
        draw: "Dis 'n gelykop!"
    },
    zu: {
        welcome: "Siyakwamukela ku-Tic-Tac-Toe yaseNingizimu Afrika!",
        move: "Umphikisi {player}, faka inombolo yakho (0-8): ",
        invalid: "Akunasiphiwo esivumelekile! Faka inombolo phakathi kuka-0 no-8.",
        taken: "Le ndawo isivele isetshenzisiwe. Khetha enye.",
        win: "Halala! Umphikisi {player} uwine umdlalo!",
        draw: "Kuyafana nje! It's a draw!"
    },
    se: {
        welcome: "Rea u amohela ho Tic-Tac-Toe ea Afrika Borwa!",
        move: "Sebapadi {player}, kenya nomoro ea hau (0-8): ",
        invalid: "Nomoro e sa sebetseng! Kenya palo pakeng tsa 0 le 8.",
        taken: "Sebaka seo se se se sebelisitsoe. Khetha e nngwe.",
        win: "Tshepho! Sebapadi {player} o hapile papadi!",
        draw: "Ke tshekamelo e thabisang!"
    },
    ve: {
        welcome: "Ni a amukela kha Tic-Tac-Toe ya Afurika Tshipembe!",
        move: "Mutambi {player}, vula tshikhala (0-8): ",
        invalid: "Muvhuso ha u vhe khwine! U shumise tshibalo tsha 0-8.",
        taken: "Tshikhala itsho lo no tevhela. Khetha tshinzhi.",
        win: "Hu khwine! Mutambi {player} o kunda!",
        draw: "Hu langana!"
    }
};

// Player icons based on language
const playerIconsMap = {
    en: ['🍲', '🌵'],
    af: ['🍲', '🐆'],
    zu: ['🥭', '🥑'],
    se: ['🍋', '🍍'],
    ve: ['🥔', '🍍']
};

function displayBoard() {
    console.log(`
      ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
      ---------
      ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
      ---------
      ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
    `);
}

function checkWin() {
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return conditions.some(condition => {
        const [a, b, c] = condition;
        return gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer;
    });
}

function handleMove(position) {
    if (gameBoard[position] === " ") {
        gameBoard[position] = currentPlayer;
    } else {
        console.log(messages[language].taken);
        return false;
    }

    if (checkWin()) {
        displayBoard();
        console.log(messages[language].win.replace('{player}', currentPlayer));
        gameActive = false;
        return true;
    }

    if (gameBoard.every(cell => cell !== " ")) {
        displayBoard();
        console.log(messages[language].draw);
        gameActive = false;
        return true;
    }

    currentPlayer = currentPlayer === playerIcons[0] ? playerIcons[1] : playerIcons[0];
    return true;
}

// Language selection
console.log("Select your language: 1. English 2. Afrikaans 3. Zulu 4. Sepedi 5. Venda");
const langChoice = prompt("Enter the number for your choice: ");
const langKeys = ['en', 'af', 'zu', 'se', 've'];
language = langKeys[parseInt(langChoice) - 1];

if (!language) {
    console.log("Invalid selection. Defaulting to English.");
    language = 'en';
}

playerIcons = playerIconsMap[language];
currentPlayer = playerIcons[0];

console.log(messages[language].welcome);

while (gameActive) {
    displayBoard();
    const position = prompt(messages[language].move.replace('{player}', currentPlayer));
    if (position >= 0 && position <= 8) {
        handleMove(parseInt(position));
    } else {
        console.log(messages[language].invalid);
    }
}
