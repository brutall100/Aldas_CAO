// s
function convertToUpperCase(zodis) {
   return zodis.toUpperCase()
}
console.log(convertToUpperCase('labas'))



const extractSubstring = (str, start, end) => {
   return str.substring(start, end)
}
console.log(extractSubstring('labas', 1, 3))
console.log(extractSubstring('Sveikas pasauli', 2, 7))



// ? A
const capitalizeFirstLetter = (text) => {
   const words = text.split(' ')
   let result = ''

   for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (word) {
         result += word.charAt(0).toUpperCase() + word.slice(1)
      }
      if (i < words.length - 1) {
         result += ' '
      }
   }

   return result
}
console.log(capitalizeFirstLetter('labas rytas, pasauli! kaip sekasi?')) 
// ? B
const capitalizeFIrstLetter = (text) => {
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

console.log(capitalizeFIrstLetter("labas rytas, pasauli! kaip sekasi?"));



const censorCurseWords = (text, curseWords) => {
   let result = text;
   
   // Iterate over each curse word in the array
   for (let i = 0; i < curseWords.length; i++) {
       const badWord = curseWords[i];
       
       // Replace all occurrences of the bad word
       while (result.includes(badWord)) {
           result = result.replace(badWord, '*'.repeat(badWord.length));
       }
   }
   
   return result;
}

console.log(censorCurseWords("This is a badword and another badword.", ["badword", "is"])); // "Th**** a ****word and another ****word."



// Number metodai
const milkPrice = 3.35
if (Number.isInteger(milkPrice)) {
   console.log(`Centu nereikia ${milkPrice.toFixed(2)}`)
} else {
   console.log(`Centu reikia... ${milkPrice.toFixed(2)}`)
}
 

const findMax = (numbers) =>{
   return Math.max(...numbers)
}
console.log(findMax([1, 2, 3, 41, 5, 6, 7, 8, 9, 10]))


// Boolean metodai
let isLegalAge = 18

if(isLegalAge){
   console.log('You are legal age')
   console.log(isLegalAge.toString()) 
}



// !! Cao 2
let a = 5
let b = 10
let result = a + b
console.log(result)


let year = 2024
let age = year -38
console.log(age)

let name = 'Jonas'
let surname = 'Jonaitis'
let fullNmae = name + ' ' + surname
console.log(fullNmae)

const name2 = 'Jonass'
const surname2 = 'Jonaitiss'
const fullName = name2.concat(' ', surname2 + '!')
console.log(fullName)

let text = 'Labas rytas '
let secondText = 'MOKINIAI'
let fullText = text.concat( '', secondText)
console.log(fullText)

let celsijus = 32
let farenheit = celsijus * 9 / 5 + 32
console.log(`farenheit: ${farenheit}`)



let firstBalance = 999.99
console.log(firstBalance)

let secondBalance = firstBalance + ( 0.09 * firstBalance)
console.log(secondBalance)

let thirdBalance = secondBalance * 2
console.log(thirdBalance)

let fourthBalance = thirdBalance -50
console.log(fourthBalance)

let finalBalance = fourthBalance.toFixed(2)
console.log(finalBalance)




let textA = 'Vilnius'
let textB = 'Vilnius'
const resullt = textA === textB;
console.log(resullt);


let numeris = 5
let zodis = '5'
const result2 = numeris === zodis
console.log(result2)

const result3 = numeris == zodis
console.log(result3)

const result4 = numeris != zodis
console.log(result4)


let currentBalance = 50
let transaction = 51
let balance = currentBalance + transaction >= 0
console.log(balance)


const isDividible = (number) => {
   return number % 1 === 0
}
console.log(isDividible(6.3))
console.log(isDividible(5))

const aa = 10
const bb = 5.5
const dalybaBeliekanos = aa % bb === 0

console.log(dalybaBeliekanos)


// !! Chat Gpt
// // 1
const stringLength = text => text.trim().length
console.log(stringLength('labas rytas    '))

// // 2
const stringFirstAndLastLetter = (text) => {
   const trimmedText = text.trim()
   return trimmedText.charAt(0) + trimmedText.charAt(trimmedText.length -1)}
console.log(stringFirstAndLastLetter('labay gerai  '))

// // 3
const checkLetter = (text, letter) => {
   return text.trim().toLowerCase().includes(letter.trim().toLowerCase())
}
console.log(checkLetter('labas', '  LA'))

// // 4
const letterFinder = (text, letter) => text.indexOf(letter)

console.log(letterFinder('sdfga', 'a'))
console.log(letterFinder('labas', 'a'))

// // 5
// To uppercase
const lettersToUpperCase = text => text.toUpperCase()
console.log(lettersToUpperCase('labas'))
// To lowercase
const lettersToLowerCase = text => text.toLowerCase()
console.log(lettersToLowerCase('LABAS'))

// // 6
const sliceToTheEnd = (text, start) => text.slice(start)
console.log(sliceToTheEnd('labas rytas', 2))

// // 7
const sentenceSlicer = (text, start, end) => text.slice(start, end)
console.log(sentenceSlicer('labas rytas stai ir as', 1, 8))

// // 8
const textSpliter = (text, separator) => text.split(separator)
console.log(textSpliter('labas rytas, stai ir as!', ' '))

// // 9
const stringReplacer = (text, oldword, newword) => {
  return text.replace(oldword, newword)}
console.log(stringReplacer('labas rytas, stai ir as!', 'rytas', 'vakaras'))

// // 10
const trimer = text => text.trim()
console.log(trimer('   Kur dingo mano tarpai?   '))



