const gameContainerEl = document.createElement('div');
gameContainerEl.id = 'game-container';
document.body.appendChild(gameContainerEl);

const gridContainerEl = document.createElement('div');
gridContainerEl.className = 'grid-container';
gameContainerEl.appendChild(gridContainerEl);

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

function handleGridItemClick(event) {
    const clickedItem = event.target;

    if (lockBoard || clickedItem === firstPick) return;

    clickedItem.textContent = clickedItem.dataset.emoji;

    if (!firstPick) {
        firstPick = clickedItem;
    } else {
        secondPick = clickedItem;
        lockBoard = true;

        if (firstPick.dataset.emoji === secondPick.dataset.emoji) {
            firstPick = null;
            secondPick = null;
            lockBoard = false;
        } else {
            setTimeout(() => {
                firstPick.textContent = '';
                secondPick.textContent = '';
                firstPick = null;
                secondPick = null;
                lockBoard = false;
            }, 1000);
        }
    }
}

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const gridItemEl = document.createElement('div');
        gridItemEl.className = 'grid-item';
        gridItemEl.dataset.emoji = shuffledEmojis[i * 4 + j];
        gridItemEl.textContent = ''; // Hide emoji initially
        gridItemEl.addEventListener('click', handleGridItemClick);
        gridContainerEl.appendChild(gridItemEl);
    }
}







