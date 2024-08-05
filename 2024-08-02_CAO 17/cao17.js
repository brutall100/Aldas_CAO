let createTextElement = document.createElement('p')
createTextElement.textContent = 'Hello World'
document.body.appendChild(createTextElement)
createTextElement.style.backgroundColor = 'red'
createTextElement.style.color = 'white'
createTextElement.style.fontSize = '20px'
createTextElement.style.padding = '10px'
createTextElement.style.textAlign = 'center'
createTextElement.style.width = '100%'
createTextElement.style.position = 'fixed'
createTextElement.style.top = '0'   


function createH1(text) {
    let h1 = document.createElement('h1')
    h1.textContent = text
    h1.style.backgroundColor = 'blue'
    h1.style.margin = '100px'
    h1.style.padding = '20px'
    h1.style.color = 'white'
    h1.style.textAlign = 'center'
    h1.style.fontSize = '20px'
    return h1
}

document.body.appendChild(createH1('Hello World'))


let nameChanger = document.getElementById('name')
nameChanger.textContent = 'Aldas'


let color = 'green'
let colorChanger = document.querySelector('.bluetext span')
colorChanger.style.color = color


const firstListElement = document.querySelector('li:first-child')
const secondlistElement = document.querySelector('li:nth-child(2)')

const bmwGroup = firstListElement.textContent
const vwGroup = secondlistElement.textContent

firstListElement.textContent = bmwGroup
secondlistElement.textContent = bmwGroup


function createList (items) {
    let ul = document.createElement('ul')
    items.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)
    })
    return ul
}


document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]));


// ! Nukopijuota  pasiziureti labai sunku
function highlightWinner() {
    const board = document.querySelectorAll('#tictactoe tr');
    const matrix = Array.from(board, row => Array.from(row.cells, cell => cell.textContent));
  
    function checkAndHighlight(cells, indices) {
      if (cells[0] !== '' && new Set(cells).size === 1) {
        indices.forEach(([row, col]) => board[row].cells[col].style.backgroundColor = 'lightgreen');
        return true;
      }
      return false;
    }
  
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      const row = matrix[i];
      const col = matrix.map(row => row[i]);
  
      if (checkAndHighlight(row, [[i, 0], [i, 1], [i, 2]])) return;
      if (checkAndHighlight(col, [[0, i], [1, i], [2, i]])) return;
    }
  
    // Check diagonals
    const diag1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
    const diag2 = [matrix[0][2], matrix[1][1], matrix[2][0]];
  
    if (checkAndHighlight(diag1, [[0, 0], [1, 1], [2, 2]])) return;
    if (checkAndHighlight(diag2, [[0, 2], [1, 1], [2, 0]])) return;
  }
  
  highlightWinner();