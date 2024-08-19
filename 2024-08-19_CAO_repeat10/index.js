// String methods
console.groupCollapsed('String methods');
const convertToUpperCase = str => str.toUpperCase()
const convertToLowerCase = str => str.toLowerCase()

console.log(convertToUpperCase('Hello World')) // HELLO WORLD
console.log(convertToLowerCase('Hello World')) // hello world



const extractSubstring = str => str.substring(3, 8)

console.log(extractSubstring("Sveikas pasauli")); // "eikas"



const capitalizeFirstLetter = str => {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

console.log(capitalizeFirstLetter("labas rytas, pasauli!")); // "Labas Rytas, Pasauli!"


const censorCurseWords = (text, curseWords) => {
    let censoredText = text;
    for (let i = 0; i < curseWords.length; i++) {
        const curseWord = curseWords[i];
        while (censoredText.includes(curseWord)) {
            censoredText = censoredText.replace(curseWord, '****');
        }
    }
    return censoredText;
};

console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); // "This is a **** and another ****."
console.groupEnd();


// Number methods
console.groupCollapsed('Number methods');

const milkPrice = 3.54645
const fixedMilkPrice = milkPrice.toFixed(2)
if (Number.isInteger(fixedMilkPrice)) {
    console.log("Centų nereikia")
} else {
    console.log(`Centų prireiks...${fixedMilkPrice}`)
}


const findMaxNum = (...numbers) => Math.max(...numbers)
console.log(findMaxNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 10

console.groupEnd();

// Boolean methods
console.groupCollapsed('Boolean methods');

const isLegalAge = age => age >= 18
console.log(isLegalAge(21)) // true
console.log(isLegalAge(17)) // false

const isEven = num => num % 2 === 0
console.log(isEven(2)) // true
console.log(isEven(3)) // false

console.groupEnd();
