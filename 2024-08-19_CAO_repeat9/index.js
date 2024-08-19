const convertMStoKMH = (speedMS) => speedMS * 3.6
console.log(convertMStoKMH(10))

const compareNumber = (a, b) => {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Error: most arguments must be numbers'
   }
   if (a > b) {
      return a
   } else if (a < b) {
      return b
   } else {
      return 'equal'
   }
}
console.log(compareNumber(4, 7)) // 7
console.log(compareNumber(5, 5)) // "equal"
console.log(compareNumber('5', 5)) // "Error: most arguments must be numbers"

const arKeliamieji = (year) => {
   if (year % 400 === 0) {
      return true
   } else if (year % 100 === 0) {
      return false
   } else if (year % 4 === 0) {
      return true
   } else {
      return false
   }
}
console.log(arKeliamieji(2020)) // true
console.log(arKeliamieji(2021)) // false


const findMaxInArray = (arr) => {
   let max = arr[0]
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i]
      }
   }
   return max
}
console.log(findMaxInArray([1, 3, 2, 5, 4])); // 5
console.log(findMaxInArray([-1, -3, -2, -5, -4])); // -1



const sumArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
    }
console.log(sumArray([1, 2, 3, 4, 5])); // 15


const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false


const reverseString = (str) => {    
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString("Labas")); // "sabaL"


const isPalindrome = (str) => {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return str === reversed
}
console.log(isPalindrome("savas")); // true
console.log(isPalindrome("svetimas")); // false


const printPyramid = (height) => {
    for (let i = 1; i <= height; i++) {
        let level = '';
        for (let j = 1; j <= i; j++) {
            level += j + ' ';
        }
        console.log(level.trim());
    }
}

// Example usage:
printPyramid(3);
// Output:
// 1
// 1 2
// 1 2 3
