(function myName(){
    console.log('My name is Aldas')
})()


function myName1(name){
    console.log('my name is' + name)
}
myName1('Aldasss')


function randomNum(){
    return Math.floor(Math.random() *5 ) + 1
}
console.log(randomNum())


function countLetters(name, surname){
    let trimedName = name.trim()
    let trimedSurname = surname.trim()
    let sumOfLetters = trimedName.length + trimedSurname.length
    return sumOfLetters
}
console.log(countLetters('aldas      ', 'jonas   '))


// Truputi ne taip, grazina visas raides su indexu
function abcWithIndex(){
    let abcArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let abcArrUpper = abcArr.map(leterrr => leterrr.toUpperCase())
    for(let i = 0; i < abcArrUpper.length; i++){
        console.log(`${[i]} ${abcArrUpper[i]}`)
    }
}

abcWithIndex()

function getLetterByIndex(skaicius) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if (skaicius < alphabet.length) {
        return alphabet[skaicius]
    } 
    
    if (skaicius > alphabet.length) {
        return 'Tokio indexo nera'
    }
    if (skaicius !== '') {
        return 'Tai ne skaicius'
    }
}

console.log(getLetterByIndex(19))
console.log(getLetterByIndex(50))
console.log(getLetterByIndex('Hello'))



function calculation(n1, n2, operator) {
    if (typeof n1 !== 'number') {
        return 'Pirmas skaicius nera skaicius'
    }
    if (typeof n2 !== 'number') {
        return 'Antras skaicius nera skaicius'
    }
    switch (operator) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return 'Operatorius yra neteisingas'
    }
}
console.log(calculation(78, 8, '+'))




function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1)
}
function squareNumber(number) {
    return Math.pow(number, 2)
}
let randomNumb = generateRandomNumber()

console.log(randomNumb)
console.log(squareNumber(randomNumb))


//!!Is CAO
function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1)
}

function squareNumber(number) {
    return Math.pow(number, 2)
}

console.log(generateRandomNumber())
console.log(squareNumber(generateRandomNumber())) 
  
