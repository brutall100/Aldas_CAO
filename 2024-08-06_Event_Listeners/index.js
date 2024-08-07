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

const displayGrades = document.createElement('h4')
displayGrades.textContent = 'Grades: '   
containerElement.append(displayGrades)

const texts = ['Vidurkis: ', 'Mediana: ', 'Max grade: ', 'Min grade: '];
const ids = ['p1', 'p2', 'p3', 'p4'];

texts.forEach((text, index) => {
    const pElement = document.createElement('p');
    pElement.textContent = text;
    pElement.id = ids[index];
    containerElement.append(pElement);
});

function calculateAverage(gradesArray) {
    const sum = gradesArray.reduce((a, b) => a + b, 0);
    const average = sum / gradesArray.length;
    return average.toFixed(2);
}

function calculateMedian(gradesArray) {
    const sortedArray = gradesArray.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);
    const median = sortedArray.length % 2 !== 0 ? sortedArray[mid] : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    return median.toFixed(2);
}

function updateStatistics() {
    const grades = document.querySelectorAll('#grades li');
    if (grades.length === 0) {
        document.getElementById('p1').textContent = 'Vidurkis: ';
        document.getElementById('p2').textContent = 'Mediana: ';
        document.getElementById('p3').textContent = 'Max grade: ';
        document.getElementById('p4').textContent = 'Min grade: ';
        return;
    }

    const gradesArray = Array.from(grades).map(grade => parseInt(grade.textContent));
    const average = calculateAverage(gradesArray);
    document.getElementById('p1').textContent = 'Vidurkis: ' + average;

    const median = calculateMedian(gradesArray);
    document.getElementById('p2').textContent = 'Mediana: ' + median;

    const maxGrade = Math.max(...gradesArray);
    document.getElementById('p3').textContent = 'Max grade: ' + maxGrade;

    const minGrade = Math.min(...gradesArray);
    document.getElementById('p4').textContent = 'Min grade: ' + minGrade;
}

const gradesElementUl = document.createElement('ul')
gradesElementUl.id = 'grades'
containerElement.append(gradesElementUl)

const removeAllGradesAtOnce = document.createElement('button') 
removeAllGradesAtOnce.textContent = 'Remove All Grades'
removeAllGradesAtOnce.style.fontSize = '30px'
removeAllGradesAtOnce.style.minWidth = '100px'
containerElement.append(removeAllGradesAtOnce)

function updateNumber(newNumber) {
    newNumber = Math.min(Math.max(newNumber, 0), 10)
    mainNumber5.textContent = newNumber
    numbersInputElement.value = newNumber

    if (newNumber < 5) {
        mainNumber5.style.color = 'red'
    } else {
        mainNumber5.style.color = 'green'
    }

    minusButton.disabled = newNumber <= 1
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
    const newGrade = document.createElement('li')
    newGrade.style.color = mainNumber5.style.color
    newGrade.textContent = mainNumber5.textContent

    const gradeRemoveButton = document.createElement('button')
    gradeRemoveButton.textContent = 'X'
    gradeRemoveButton.style.fontSize = '20px'
    newGrade.appendChild(gradeRemoveButton)
    gradesElementUl.appendChild(newGrade)

    updateStatistics()
})

gradesElementUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove()
        updateStatistics()
    }
})

removeAllGradesAtOnce.addEventListener('click', () => {
    gradesElementUl.innerHTML = ''
    updateStatistics()
})

numbersInputElement.addEventListener('input', (e) => {
    let newValue = parseInt(e.target.value)
    if (!isNaN(newValue)) {
        updateNumber(newValue)
    }
})

updateNumber(5)


// Neapseita su Chat GPT ir Copilot pagalba
