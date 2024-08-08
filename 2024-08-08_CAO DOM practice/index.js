const gameContainerEl = document.createElement('div');
gameContainerEl.id = 'game-container';
document.body.appendChild(gameContainerEl);

const gridContainerEl = document.createElement('div');
gridContainerEl.className = 'grid-container';
gameContainerEl.appendChild(gridContainerEl);

const winMessageEl = document.createElement('h1');
winMessageEl.id = 'win-message';
winMessageEl.style.textAlign = 'center';
gameContainerEl.appendChild(winMessageEl);

// Create a reload button
const reloadButtonEl = document.createElement('button');
reloadButtonEl.textContent = 'Reload Game';
reloadButtonEl.style.display = 'none'; // Hide the button initially
reloadButtonEl.style.marginTop = '20px';
reloadButtonEl.addEventListener('click', () => location.reload()); // Reload the page when clicked
gameContainerEl.appendChild(reloadButtonEl);

const emojis = ['👿', '😎', '🤩', '🤢', '🥳', '👽', '😁', '🥶'];
const emojiPairs = [...emojis, ...emojis];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledEmojis = shuffle(emojiPairs);

let firstPick = null;
let secondPick = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;

function handleGridItemClick(event) {
    const clickedItem = event.target;

    if (lockBoard || clickedItem === firstPick || clickedItem.textContent) return;

    clickedItem.textContent = clickedItem.dataset.emoji;

    if (!firstPick) {
        firstPick = clickedItem;
    } else {
        secondPick = clickedItem;
        lockBoard = true;
        moves++;

        if (firstPick.dataset.emoji === secondPick.dataset.emoji) {
            matchedPairs++;
            resetPicks();

            // Check if the player has won
            if (matchedPairs === emojis.length) {
                setTimeout(() => {
                    displayWinMessage();
                    reloadButtonEl.style.display = 'block'; // Show the reload button
                }, 500);
            }
        } else {
            setTimeout(() => {
                firstPick.textContent = '';
                secondPick.textContent = '';
                resetPicks();
            }, 1000);
        }
    }
}

function resetPicks() {
    firstPick = null;
    secondPick = null;
    lockBoard = false;
}

function displayWinMessage() {
    winMessageEl.textContent = `You won in ${moves} moves!`;
}

// Create the grid
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const gridItemEl = document.createElement('div');
        gridItemEl.className = 'grid-item';
        gridItemEl.dataset.emoji = shuffledEmojis[i * 4 + j];
        gridItemEl.textContent = ''; 
        gridItemEl.addEventListener('click', handleGridItemClick);
        gridContainerEl.appendChild(gridItemEl);
    }
}

// Used My brain and Chat GPT








