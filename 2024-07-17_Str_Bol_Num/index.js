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





 