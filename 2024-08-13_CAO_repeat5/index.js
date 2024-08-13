let arr = new Array()

arr.push(2, 3, 4)
console.log(arr) // [2, 3, 4]

arr.unshift(1) // Add 1 to the beginning of the array
console.log(arr) // [1, 2, 3, 4]


const arrUniques = [1, 2, 2, 3, 3, 3, 4]
console.log(arrUniques) // [1, 2, 2, 3, 3, 3, 4]

const arrUniquesSet = new Set(arrUniques)
console.log(arrUniquesSet) // Set { 1, 2, 3, 4 }


const arrLetter = ['a', 'b', 'c', 'd', 'e','b', 'c', 'd', 'e'];
console.log(arrLetter) // ['a', 'b', 'c', 'd', 'e']

const arrLetterSet = new Set(arrLetter)
console.log(arrLetterSet) // Set { 'a', 'b', 'c', 'd', 'e' }


const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,3, 4, 5, 6,]
console.log(arrNumber) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 4, 5, 6]

const arrUniquesNumber = [];
for (let i = 0; i < arrNumber.length; i++) {
    if (!arrUniquesNumber.includes(arrNumber[i])) {
        arrUniquesNumber.push(arrNumber[i]);
    }
}
console.log(arrUniquesNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const onlyPositiveNum = [-3, 1, -2, 4, -5, 6]
console.log(onlyPositiveNum) // [-3, 1, -2, 4, -5, 6]

const onlyPositive = []
for (let i = 0; i < onlyPositiveNum.length; i++){
    if (onlyPositiveNum[i] > 0){
        onlyPositive.push(onlyPositiveNum[i])
    }
}
console.log(onlyPositive) // [1, 4, 6]


const arrNumberA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6]
const element = 6
const isRepated = arrNumberA.indexOf(element) !== arrNumberA.lastIndexOf(element)
console.log(isRepated) // true


const arrNumberB = [1, 2, 3, 4, 5]
const even = []
const odd = []
for (let i = 0; i < arrNumberB.length; i++){
    if (arrNumberB[i] % 2 ===0){
        even.push(arrNumberB[i] / 2)   
    } else{
        odd.push(arrNumberB[i] * 3)
    }
}
console.log(even) // [1, 2]
console.log(odd) // [3, 9, 15]

let newArr = even.concat(odd)
console.log(newArr) // [1, 2, 3, 9, 15]

let newArr2 = [...even, ...odd]
console.log(newArr2) // [1, 2, 3, 9, 15]

