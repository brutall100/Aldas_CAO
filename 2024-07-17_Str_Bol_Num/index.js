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