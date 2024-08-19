const nameFunction = name => name
console.log(nameFunction('John Doe'))


function genNewNumb(){
    return Math.floor(Math.random() * 5) + 1
}
console.log(genNewNumb())


function sumOfText(textA, textB){
    let length = textA.length + textB.length
    return length
}
console.log(sumOfText('Helllo', 'World'))


const arrOfAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function indexOfAlphabet(alphabet){
    return `Index of ${alphabet} is ${arrOfAlphabets.indexOf(alphabet) + 1}`
}
console.log(indexOfAlphabet('b'))


function calculate(n1, n2, operator) {
    switch (operator) {
        case 'sum':
            return n1 + n2;
        case 'sub':
            return n1 - n2;
        case 'div':
            return n1 / n2;
        case 'multi':
            return n1 * n2;
        default:
            return 'Invalid operator';
    }
}

// Test examples
console.log(calculate(5, 1, 'sub')); // 4
console.log(calculate(6, 3, 'sum')); // 9
console.log(calculate(10, 2, 'div')); // 5
console.log(calculate(4, 3, 'multi')); // 12



function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function squareNum(num) {
    return num * num;
}
console.log(squareNum(generateRandomNumber()));