let nameReturn = name => name

console.log(nameReturn('Aldas')) 

const alertName = names => {
    // alert(names)
    return names
}
console.log(alertName('Alldas')) 



let randomNum = () => Math.floor(Math.random() *5) + 1
console.log(randomNum())



const suskaiciuok = (name, surname) => {
    let fullLength = name.trim().length + surname.trim().length
    return fullLength
}
console.log(suskaiciuok('Aldas     ', '   Kldimas'))

const suskaiciuok2 = (name, surname) => name.trim().length + surname.trim().length     
console.log(suskaiciuok2('Aldas        ', '              Kldimas'))




let letterPosition = (letter) => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Z', 'X', 'Y', 'W', 'Q']
    if (letter >= arr.length){
        return 'Tokios raides nera'
    }
    return arr[letter]
}
console.log(letterPosition(24))



let calculate = (n1, n2, operator) => {
    if (operator === '+'){
        return n1 + n2
    }
    if (operator === '-'){
        return n1 - n2
    }
    if (operator === '/'){
        return n1 / n2
    }
    if (operator === '*'){
        return n1 * n2
    }
}
console.log(calculate(2, 3, '*'))

let calculate2 = (n1, n2, operator) => {
    switch (operator){
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '/':
            return n1 / n2
        case '*':
            return n1 * n2
    }
}
console.log(calculate2(500, 10, '+'))



let generateRandomNumber = () => Math.floor(Math.random() * 10) + 1
let squareNum = numb => Math.pow(numb, 2)

console.log(squareNum(generateRandomNumber()))


// CAO 9
let convertMStoKMH = (ms) => ms * 3.6   
console.log(convertMStoKMH(10))



const compareNumber = (nb1, nb2) => {
    if (typeof nb1 !== 'number' || typeof nb2 !== 'number'){
        return 'Error: most arguments must be numbers'
    }
    if (nb1 === nb2){
        return 'equal'
    }
    if (nb1 > nb2){
        return nb1
    }else{
        return nb2
    }
}
console.log(compareNumber(4, 7)); // 7
console.log(compareNumber(5, 5)); // "equal"
console.log(compareNumber("5", 5)); // "Error: most arguments must be numbers"




let isLeapYear = year => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true
    }
    return false
}
console.log(isLeapYear(2020)) 
console.log(isLeapYear(2021)) 