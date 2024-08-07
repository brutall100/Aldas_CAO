const containerElement = document.querySelector('.container')
containerElement.style.display = 'flex'
containerElement.style.flexDirection = 'column'
containerElement.style.justifyContent = 'center'
containerElement.style.alignItems = 'center'
containerElement.style.height = '100vh'
containerElement.style.backgroundColor = 'lightblue'

const numbersInputElement = document.createElement('input')
numbersInputElement.type = 'number'
numbersInputElement.value = '5'
numbersInputElement.max = '10'
numbersInputElement.min = '1'
numbersInputElement.style.fontSize = '30px'
numbersInputElement.style.width = '100px'
containerElement.appendChild(numbersInputElement)

const numbersElement = document.getElementById('numbers')
numbersElement.style.display = 'flex'
numbersElement.style.justifyContent = 'space-between'
numbersElement.style.width = '100%'
numbersElement.style.backgroundColor = 'tomato'
containerElement.appendChild(numbersElement)

const minusButton5 = document.createElement('button')
minusButton5.textContent = '-5'
minusButton5.style.fontSize = '30px'
minusButton5.style.minWidth = '100px'
numbersElement.appendChild(minusButton5)

const minusButton2 = document.createElement('button')
minusButton2.textContent = '-2'
minusButton2.style.fontSize = '30px'
minusButton2.style.minWidth = '100px'
numbersElement.appendChild(minusButton2)

const minusButton = document.createElement('button')
minusButton.textContent = '-'
minusButton.style.fontSize = '30px'
minusButton.style.minWidth = '100px'
numbersElement.appendChild(minusButton)

const mainNumber5 = document.createElement('h3')
mainNumber5.textContent = '5'
mainNumber5.style.fontSize = '50px'
mainNumber5.style.color = 'green'
numbersElement.appendChild(mainNumber5)

const plusButton = document.createElement('button')
plusButton.textContent = '+'
plusButton.style.fontSize = '30px'
plusButton.style.minWidth = '100px'
numbersElement.appendChild(plusButton)

const plusButton2 = document.createElement('button')
plusButton2.textContent = '+2'
plusButton2.style.fontSize = '30px'
plusButton2.style.minWidth = '100px'
numbersElement.appendChild(plusButton2)

const plusButton5 = document.createElement('button')
plusButton5.textContent = '+5'
plusButton5.style.fontSize = '30px'
plusButton5.style.minWidth = '100px'
numbersElement.appendChild(plusButton5)

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
resetButton.style.fontSize = '30px'
resetButton.style.minWidth = '100px'
containerElement.append(resetButton)

const gradeButton = document.createElement('button')
gradeButton.textContent = 'Add Grade'
gradeButton.style.fontSize = '30px'
gradeButton.style.minWidth = '100px'
containerElement.append(gradeButton)

const gradesElement = document.createElement('div')
gradesElement.id = 'grades'
gradesElement.style.display = 'flex'
gradesElement.style.alignItems = 'center'
gradesElement.style.fontSize = '20px'
gradesElement.innerHTML = 'Grades: &nbsp;&nbsp;'
containerElement.appendChild(gradesElement)

const gradesRemover = document.createElement('button')
gradesRemover.id = 'grades-remover'
gradesRemover.textContent = 'Remove Grades'
gradesRemover.style.fontSize = '30px'
gradesRemover.style.minWidth = '100px'
containerElement.append(gradesRemover)

function updateNumber(newNumber) {
   newNumber = Math.min(Math.max(newNumber, 0), 10)
   mainNumber5.textContent = newNumber
   numbersInputElement.value = newNumber

   if (newNumber < 5) {
      mainNumber5.style.color = 'red'
   } else {
      mainNumber5.style.color = 'green'
   }

   minusButton.disabled = newNumber <= 0
   minusButton2.disabled = newNumber <= 1
   minusButton5.disabled = newNumber < 5
   plusButton.disabled = newNumber >= 10
   plusButton2.disabled = newNumber >= 8
   plusButton5.disabled = newNumber > 5
}

minusButton.addEventListener('click', () => {
   updateNumber(parseInt(mainNumber5.textContent) - 1)
})

minusButton2.addEventListener('click', () => {
   updateNumber(parseInt(mainNumber5.textContent) - 2)
})

minusButton5.addEventListener('click', () => {
   updateNumber(parseInt(mainNumber5.textContent) - 5)
})

plusButton.addEventListener('click', () => {
   updateNumber(parseInt(mainNumber5.textContent) + 1)
})

plusButton2.addEventListener('click', () => {
   updateNumber(parseInt(mainNumber5.textContent) + 2)
})

plusButton5.addEventListener('click', () => {
   updateNumber(parseInt(mainNumber5.textContent) + 5)
})

resetButton.addEventListener('click', () => {
   updateNumber(5)
})

gradeButton.addEventListener('click', () => {
   let grade = parseInt(mainNumber5.textContent)
   let gradeElement = document.createElement('h2')
   gradeElement.innerHTML = grade + '&nbsp;&nbsp;'
   gradesElement.appendChild(gradeElement)
})

gradesRemover.addEventListener('click', () => {
   gradesElement.innerHTML = 'Grades: &nbsp;&nbsp;'
})

// Listen for input changes in numbersInputElement
numbersInputElement.addEventListener('input', (e) => {
   let newValue = parseInt(e.target.value)
   if (!isNaN(newValue)) {
      updateNumber(newValue)
   }
})

// Initial call to set button states correctly
updateNumber(5)
