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