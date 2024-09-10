const gridElement = document.getElementById('grid');
const scoreElement = document.getElementById('score');
const bestScoreElement = document.getElementById('bestScore');
let grid;
let score = 0;
let bestScore = localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore')) : 0;  // Load the best score from localStorage

// Pradėti naują žaidimą
function startGame() {
    grid = createEmptyGrid();
    addNewTile();
    addNewTile();
    drawGrid();
    updateScore();
    updateBestScore();
}

// Sukurti tuščią 4x4 tinklelio masyvą
function createEmptyGrid() {
    return Array(4).fill().map(() => Array(4).fill(0));
}

// Pridėti naują plytelę (2 arba 4)
function addNewTile() {
    let emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                emptyCells.push({ x: i, y: j });
            }
        }
    }
    
    if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[randomCell.x][randomCell.y] = Math.random() < 0.9 ? 2 : 4;
    }
}

// Nubrėžti tinklelio būklę
function drawGrid() {
    gridElement.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.textContent = grid[i][j] !== 0 ? grid[i][j] : '';
            gridElement.appendChild(tile);
        }
    }
}

// Atnaujinti taškus
function updateScore() {
    scoreElement.textContent = score;
}

// Atnaujinti ir išsaugoti geriausią rezultatą
function updateBestScore() {
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);  // Save best score to localStorage
    }
    bestScoreElement.textContent = bestScore;
}

// Judėti pagal rodyklių paspaudimus
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
    addNewTile();
    drawGrid();
    updateScore();
    updateBestScore();
    checkGameOver();
});

// Judėjimo funkcijos (kairė, dešinė, aukštyn, žemyn)
function moveLeft() {
    for (let i = 0; i < 4; i++) {
        let row = grid[i].filter(val => val);
        for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
                row[j] *= 2;
                score += row[j];
                row.splice(j + 1, 1);
            }
        }
        while (row.length < 4) row.push(0);
        grid[i] = row;
    }
}

function moveRight() {
    for (let i = 0; i < 4; i++) {
        let row = grid[i].filter(val => val);
        for (let j = row.length - 1; j > 0; j--) {
            if (row[j] === row[j - 1]) {
                row[j] *= 2;
                score += row[j];
                row.splice(j - 1, 1);
            }
        }
        while (row.length < 4) row.unshift(0);
        grid[i] = row;
    }
}

function moveUp() {
    for (let j = 0; j < 4; j++) {
        let column = [grid[0][j], grid[1][j], grid[2][j], grid[3][j]].filter(val => val);
        for (let i = 0; i < column.length - 1; i++) {
            if (column[i] === column[i + 1]) {
                column[i] *= 2;
                score += column[i];
                column.splice(i + 1, 1);
            }
        }
        while (column.length < 4) column.push(0);
        for (let i = 0; i < 4; i++) {
            grid[i][j] = column[i];
        }
    }
}

function moveDown() {
    for (let j = 0; j < 4; j++) {
        let column = [grid[0][j], grid[1][j], grid[2][j], grid[3][j]].filter(val => val);
        for (let i = column.length - 1; i > 0; i--) {
            if (column[i] === column[i - 1]) {
                column[i] *= 2;
                score += column[i];
                column.splice(i - 1, 1);
            }
        }
        while (column.length < 4) column.unshift(0);
        for (let i = 0; i < 4; i++) {
            grid[i][j] = column[i];
        }
    }
}

// Patikrinti, ar žaidimas baigtas
function checkGameOver() {
    let isGameOver = true;
    outerLoop: for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                isGameOver = false;
                break outerLoop;
            }
            if (i < 3 && grid[i][j] === grid[i + 1][j]) {
                isGameOver = false;
                break outerLoop;
            }
            if (j < 3 && grid[i][j] === grid[i][j + 1]) {
                isGameOver = false;
                break outerLoop;
            }
        }
    }

    if (isGameOver) {
        alert('Žaidimas baigtas!');
        startGame();
    }
}

// Pradėti žaidimą pirmą kartą
startGame();
