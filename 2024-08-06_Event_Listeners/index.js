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
// numbersElement.style.alignItems = 'center'
// numbersElement.style.height = '100vh'
numbersElement.style.backgroundColor = 'tomato'
containerElement.appendChild(numbersElement)



const minusButton = document.createElement('button')
minusButton.textContent = '-'
minusButton.style.fontSize = '30px'
minusButton.style.minWidth = '100px'
numbersElement.appendChild(minusButton)

const minusButton2 = document.createElement('button')   
minusButton2.textContent = '-2'
minusButton2.style.fontSize = '30px'
minusButton2.style.minWidth = '100px'
numbersElement.appendChild(minusButton2)

const minusButton5 = document.createElement('button')
minusButton5.textContent = '-5'
minusButton5.style.fontSize = '30px'
minusButton5.style.minWidth = '100px'
numbersElement.appendChild(minusButton5)

const mainNumber5 = document.createElement('h3')
mainNumber5.textContent = '5'
mainNumber5.style.fontSize = '50px'
mainNumber5.style.color = 'green'
numbersElement.appendChild(mainNumber5)

const plusButton5 = document.createElement('button')
plusButton5.textContent = '+5'
plusButton5.style.fontSize = '30px'
plusButton5.style.minWidth = '100px'
numbersElement.appendChild(plusButton5)

const plusButton2 = document.createElement('button')
plusButton2.textContent = '+2'
plusButton2.style.fontSize = '30px'
plusButton2.style.minWidth = '100px'
numbersElement.appendChild(plusButton2)

const plusButton = document.createElement('button')
plusButton.textContent = '+'
plusButton.style.fontSize = '30px'
plusButton.style.minWidth = '100px'
numbersElement.appendChild(plusButton)



const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
resetButton.style.fontSize = '30px'
resetButton.style.minWidth = '100px'
containerElement.append(resetButton)

// Event Listeners
// ?    +Plius
minusButton.addEventListener('click', () => {
    const numb = mainNumber5.textContent = parseInt(mainNumber5.textContent) - 1
    if (numb < 5) {
        mainNumber5.style.color = 'red'
    }

    if (numb < 2) {
        minusButton.setAttribute('disabled', true)
    } 
    
    if (numb < 10) {
        plusButton.removeAttribute('disabled')
    }
})

plusButton2.addEventListener('click', () => {
    const numb = mainNumber5.textContent = parseInt(mainNumber5.textContent) + 2
    if (numb > 4) {
        mainNumber5.style.color = 'green'
    }
    
    if (numb > 9) {
        plusButton2.setAttribute('disabled', true)
    }

    if (numb > 1) {
        minusButton.removeAttribute('disabled')
    }
})

plusButton5.addEventListener('click', () => {
    const numb = mainNumber5.textContent = parseInt(mainNumber5.textContent) + 5
    if (numb > 4) {
        mainNumber5.style.color = 'green'
    }
    
    if (numb > 9) {
        plusButton5.setAttribute('disabled', true)
    }

    if (numb > 1) {
        minusButton.removeAttribute('disabled')
    }
})

// ?     -Minus
plusButton.addEventListener('click',() => {
    const numb = mainNumber5.textContent = parseInt(mainNumber5.textContent) + 1

    if (numb > 4) {
        mainNumber5.style.color = 'green'
    }
    
    if (numb > 9) {
        plusButton.setAttribute('disabled', true)
    }


    if (numb > 1) {
        minusButton.removeAttribute('disabled')
    }
})

minusButton2.addEventListener('click', () => {
    const numb = mainNumber5.textContent = parseInt(mainNumber5.textContent) - 2
    if (numb < 5) {
        mainNumber5.style.color = 'red'
    }

    if (numb < 2) {
        minusButton2.setAttribute('disabled', true)
    } 
    
    if (numb < 10) {
        plusButton.removeAttribute('disabled')
    }
})

minusButton5.addEventListener('click', () => {
    const numb = mainNumber5.textContent = parseInt(mainNumber5.textContent) - 5
    if (numb < 5) {
        mainNumber5.style.color = 'red'
    }

    if (numb < 2) {
        minusButton5.setAttribute('disabled', true)
    } 
    
    if (numb < 10) {
        plusButton.removeAttribute('disabled')
    }
})

//  ?     Reset
resetButton.addEventListener('click', () => {
    mainNumber5.textContent = '5'
    mainNumber5.style.color = 'green'
    minusButton.removeAttribute('disabled')
    minusButton2.removeAttribute('disabled')
    minusButton5.removeAttribute('disabled')
    plusButton.removeAttribute('disabled')
    plusButton2.removeAttribute('disabled')
    plusButton5.removeAttribute('disabled')

})





