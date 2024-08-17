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
