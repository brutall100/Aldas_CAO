const convertMStoKMH = (ms) => ms * 3.6

console.log(convertMStoKMH(10))
console.log(convertMStoKMH(20))
console.log(convertMStoKMH(25))

const compareNumber = (n1, n2) => {
   if (n1 === n2) {
      return 'equal'
   }
   if (typeof n1 !== 'number' || typeof n2 !== 'number') return 'Error: most arguments must be numbers'
   if (n1 > n2) {
      return n1
   } else return n2
}

console.log(compareNumber(8, 7)) // 8
console.log(compareNumber(4, 7)) // 7
console.log(compareNumber(5, 5)) // "equal"
console.log(compareNumber('5', 5)) // "Error: most arguments must be numbers"

// ROMANAS tasks
// // 1
const dogYearCalc = (year) => year * 7
console.log(dogYearCalc(7))

// // 2
// const bookPerYear = book => 365 / book
const bookPerYear = (book) => {
   const days = 365
   let calculatedDays = days / book
   let fixedDays = calculatedDays.toFixed(0)
   let sentence = `Norint perskaityti ${book} knygų per metus, vienai knygai perskaityti turėsi apie ${fixedDays} dienas`
   return sentence
}
console.log(bookPerYear(10))

// // 3
const daysToWeeks = (diena) => {
   if (diena < 0) return 'Error: dienos negali būti neigiamos!!!!'
   let savaites = Math.floor(diena / 7)
   let sentence = `${diena} dienos yra ${savaites} savaitės`
   return sentence
}
console.log(daysToWeeks(-6))
console.log(daysToWeeks(7))
console.log(daysToWeeks(55))

// // 4
const daysToYears = (day) => {
   if (day >= 0) {
      let years = Math.floor(day / 365)
      let sentence = `${day} dienos yra ${years} metai`
      return sentence
   }
   return 'Error: dienos negali būti neigiamos'
}
console.log(daysToYears(-5))
console.log(daysToYears(364))
console.log(daysToYears(18464))

// // 5
const yearsToHours = (year) => {
   if (typeof year !== 'number') return 'Error: metai turi būti skaičius'
   if (year < 0) return 'Error: metai negali būti neigiami!'
   let hours = year * 365 * 24
   let sentence = `${year} metai turi ${hours} valandų`
   return sentence
}

console.log(yearsToHours(-5))
console.log(yearsToHours('Hello world'))
console.log(yearsToHours(2))
console.log(yearsToHours(45))

// // 6
const monthsToHours = (month) => {
   if (typeof month !== 'number') return 'Error: mėnesiai turi būti skaičius'
   if (month < 0) return 'Error: mėnesiai negali būti neigiami'
   let hours = month * 30 * 24
   let sentence = `${month} mėnesiai turi ${hours} valandų`
   return sentence
}

console.log(monthsToHours(-5))
console.log(monthsToHours('-5'))
console.log(monthsToHours(1))
console.log(monthsToHours(12))

// // 7
const monthToMinutes = (month) => {
   if (typeof month !== 'number') return 'Error: month has to be number'
   if (month < 0) return 'Error: Month cant be negative'
   let minutes = month * 30.44 * 24 * 60
   let sentence = `${month} mėnesiai turi ${minutes.toFixed()} minučių`
   return sentence
}

console.log(monthToMinutes(-50))
console.log(monthToMinutes(''))
console.log(monthToMinutes(1))
console.log(monthToMinutes(2))

// // 8
const formatedDate = (days, format) => {
   if (typeof days !== 'number') return 'Error: days has to be number'
   if (days < 0) return 'Error: days cant be negative'

   let sentence

   switch (format) {
      case 'minutes':
         sentence = `${days} dienos - ${days * 24 * 60} minučių`
         break
      case 'hours':
         sentence = `${days} dienos - ${days * 24} valandų`
         break
      case 'weeks':
         sentence = `${days} dienos - ${(days / 7).toFixed(2)} savaites`
         break
      case 'months':
         sentence = `${days} dienos - ${(days / 30.44).toFixed(2)} mėnesius`
         break
      case 'years':
         sentence = `${days} dienos - ${(days / 365).toFixed(2)} metus`
         break
      default:
         sentence = 'Error: neteisingas formatas'
         break
   }

   return sentence
}

console.log(formatedDate(1))
console.log(formatedDate(-6, 'minutes'))
console.log(formatedDate('10', 'minutes'))
console.log(formatedDate(1, 'minutes'))
console.log(formatedDate(1, 'hours'))
console.log(formatedDate(1, 'weeks'))
console.log(formatedDate(1, 'months'))
console.log(formatedDate(1, 'years'))



// // 9
const clearDivide = (dalinys, daliklis) => {
   if (typeof dalinys !== 'number' || typeof daliklis !== 'number') return 'Error: dalinys ir daliklis turi būti skaičiai'
   if (daliklis === 0) return 'Error: daliklis negali būti 0'

   if (dalinys % daliklis === 0) return `${dalinys} dalinasi iš ${daliklis}.`

   const liekana = dalinys % daliklis
   return `Skaičius ${dalinys} nesidalina iš ${daliklis}. Liekana yra ${liekana}.`
}

console.log(clearDivide(10, 'Hi, kas cia?'))
console.log(clearDivide(10, 5))
console.log(clearDivide(11, 5))  




// // 10
const hasEvenLength = (text) => {
    if (typeof text !== 'string') return 'Error: text must be string'
    let trimedText = text.trim()
    if (trimedText.length % 2 === 0) return true
    return false
}

console.log(hasEvenLength(1))
console.log(hasEvenLength('Hell'))
console.log(hasEvenLength('Hello World'))
console.log(hasEvenLength('12'))
console.log(hasEvenLength('12            '))


// // 11 Su daug GPT pagalbos
const letterChecker = (text, number) => {
    if (typeof text !== 'string') return 'Error: text must be a string';
    if (typeof number !== 'number') return 'Error: number must be a number';
    if (number <= 0) return `Teksto "${text}" ${number} raidė nuo galo yra "${text[text.length + number]}"`;
    if (number > text.length) return `Tekstas "${text}" turi ${text.length} simbolius, o jūs nurodėte grąžinti ${number}.`;
    if (text.trim().length === 0) return 'Error: text cannot be empty';

    let sentence = `Teksto "${text}" ${number} raide yra "${text[number - 1]}"`;

    return sentence;
}

console.log(letterChecker('Hello World', 1));  
console.log(letterChecker('Hello World', 3));  
console.log(letterChecker('Hello World', -1));  
console.log(letterChecker('', 5));              
console.log(letterChecker(123, 2));             
console.log(letterChecker('Hello', 'abc'));     

