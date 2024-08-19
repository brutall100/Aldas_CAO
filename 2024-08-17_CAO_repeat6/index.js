for (let i = 2; i <= 10; i +=2 ){
    console.log(i)
}

for (let i = 10; i > 0; i -= 1 ){
    console.log(i)
}

let i = 0;
while (i < 20){
    if ( i % 3 === 0){
        console.log(i)
    }
    i++;
}

const numbers = [3, 7, 2, 8, 5];
let bigNum = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > bigNum){
        bigNum = numbers[i]
    }
}
console.log(bigNum)

const number = 15
for(let i = 1; i <= number; i++){
    if (number % i === 0){
        console.log(i)
    }
}

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNumbers = []
for (let i = 0; i < arrNumbers.length; i++){
    if (arrNumbers[i] % 2 !== 0){
        oddNumbers.push(arrNumbers[i])
    }
}
console.log(oddNumbers)


for (let i = 1; i <= 20; i++) {
    let isPrime = true;
    if (i > 1) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= 100; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

    console.log(nextTerm);
}

const area = function(width, height) {
    return width * height;
  }
  
console.log((area(4, 5)));

const balticStates = function(a, b, c) {
    return a + b + c;
  }
console.log(balticStates("Estonia", "Latvia", "Lithuania"));


function myName(name){
    return name;
}
console.log(myName("Mantas"))

function generateRandomNumber(){
    return Math.floor(Math.random() * 100);
}
console.log(generateRandomNumber())


function textLength (text1, text2){
    let textFull = text1.length + text2.length;
    return textFull;
}
console.log(textLength("Hello", "World"))

const alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function alphabet(){
    for (let i =0; i < alphabetArr.length; i++){
        console.log(`${[i]} => ${alphabetArr[i]}`)
    }
}
alphabet()

function getLettersByIndex(index){
    return alphabetArr[index]
}
console.log(getLettersByIndex(5))

function someCalculation(a, b, operation) {
   switch (operation) {
      case '+':
         return a + b
      case '-':
         return a - b
      case '*':
         return a * b
      case '/':
         return a / b
      default:
         return 'Invalid operation'
   }
}

console.log(someCalculation(5, 5, '*'))

function squareNum(num){
    return Math.pow(num, 2)
}

squareNum(generateRandomNumber())
console.log(squareNum(generateRandomNumber()))