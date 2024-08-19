let myName = x => x
console.log(myName('John Doe')) 


const randNumb = () => Math.floor(Math.random() * 10)
console.log(randNumb())


const textLength = (textA, textB) => {
    let fullLength = textA.length + textB.length
    return fullLength
}
console.log(textLength('Hello', 'World'))


const arrAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']  
const letterIndex = (letter) => {
    let index = arrAlphabet.indexOf(letter)
    return index
}
console.log(letterIndex('b'))


const calculate = (n1, n2, operator) => {
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

// Examples
console.log(calculate(5, 1, 'sub'));
console.log(calculate(6, 3, 'sum')); 
console.log(calculate(8, 2, 'div')); 
console.log(calculate(7, 3, 'multi')); 


const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const squareNum = (num) => {
    return num * num;
}

// Call both functions in one line
console.log(squareNum(generateRandomNumber()));
