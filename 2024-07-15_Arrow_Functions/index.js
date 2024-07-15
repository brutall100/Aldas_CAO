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




const findMaxInArray = arr => {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(findMaxInArray([1, 3, 2, 5, 4])); 
console.log(findMaxInArray([-1, -3, -2, -5, -4])); 




const sumArray = (arrr) => {
    let sum = 0
    for (let i = 0; i < arrr.length; i++){
        sum += arrr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 56, -10])); 





const arMasyvaiLygūs = (arr1, arr2) => {
    if (arr1.length !== arr2.length){
        return false
    }
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}
console.log(arMasyvaiLygūs([1, 2, 3], [1, 2, 3]));
console.log(arMasyvaiLygūs([1, 2, 3], [1, 2, 4])); 




const reverseString = str => {
    let reversedStr =''
    for (let i = str.length -1; i >=0; i--){
        reversedStr += str[i]
    }
    return reversedStr.trim().toLocaleUpperCase()
}
console.log(reverseString('Aldas      '))




const isPalindrome = (str) => {
   let lowerCaseStr = str.toLowerCase().trim()
   let reversedStr = ''
   for (let i = lowerCaseStr.length - 1; i >= 0; i--) {
      reversedStr += lowerCaseStr[i]
   }
   return lowerCaseStr === reversedStr
}

console.log(isPalindrome('Savas '))
console.log(isPalindrome('   mom'))
console.log(isPalindrome('svetimas')) 



const printPyramid = (height) => {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += i;
        }
        console.log(line);
    }
};

printPyramid(5)





const sizeA = 7;
const sizeB = 5;

for (let i = 0; i < sizeA; i++){
    let linija = ''
    for (let j = 0; j < sizeB; j++){
        linija += '*'
    }
    console.log(linija)
}
