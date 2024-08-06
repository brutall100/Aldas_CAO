const containerElement = document.querySelector('.container')
containerElement.style.display = 'flex'
containerElement.style.flexDirection = 'column'
containerElement.style.justifyContent = 'center'
containerElement.style.alignItems = 'center'
containerElement.style.height = '100vh'
containerElement.style.backgroundColor = 'lightblue'

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

function updateNumber(newNumber) {
   newNumber = Math.min(newNumber, 10)
   mainNumber5.textContent = newNumber

   if (newNumber < 5) {
      mainNumber5.style.color = 'red'
   } else {
      mainNumber5.style.color = 'green'
   }

   minusButton.toggleAttribute('disabled', newNumber <= 1)
   minusButton2.toggleAttribute('disabled', newNumber <= 2)
   minusButton5.toggleAttribute('disabled', newNumber < 5)
   plusButton.toggleAttribute('disabled', newNumber >= 10)
   plusButton2.toggleAttribute('disabled', newNumber >= 10)
   plusButton5.toggleAttribute('disabled', newNumber >= 10)
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
