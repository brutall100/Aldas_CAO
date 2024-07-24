let friends = ['Sarah', 'Greg', 'Cindy', 'Jeff', 'Holly']
friends.sort()
console.log(friends)

let friends2 = ['Sarah', 'Greg', 'Cindy', 'Jeff', 'Holly']
// friends2.sort().reverse()
friends2.sort((a, b) => (b > a ? 1 : -1))
console.log(friends2)

let sortingNumbers = [5, 10, 20, 11, 12, 1, 0, 14, 25]
sortingNumbers.sort((a, b) => b - a)
console.log(sortingNumbers)

let highestNumber = [10, 5, 20, 4]
let bigNum = highestNumber.sort((a, b) => b - a)
console.log(bigNum[0])

// reduce()
const people = [
   {
      name: 'Petras',
      age: '18',
   },
   {
      name: 'Jonas',
      age: 15,
   },
   {
      name: 'Antanas',
      age: 20,
   },
   {
      name: 'Urtė',
      age: 10,
   },
   {
      name: 'Diana',
      age: 25,
   },
   {
      name: 'Ieva',
      age: 16,
   },
]
console.log(people)

let adult = people
   .filter((person) => person.age >= 18)
   .map((person) => person.name)
   .sort()
console.log(adult)

const drinks = [
   {
      name: 'Lemonade',
      price: 50,
   },
   {
      name: 'Coke',
      price: 100,
   },
   {
      name: 'Pepsi',
      price: 80,
   },
   {
      name: 'Water',
      price: 30,
   },
]
console.log(drinks)

function fn(items) {
   items.sort((a, b) => a.price - b.price)
   return { pigus: items[0], brangus: items[items.length - 1] }
}
console.log(fn(drinks))

const addElement = (arr, element) => {
   return [...arr, element]
}
console.log(addElement([1, 2, 3], 4))

const mergeArrays = (arr1, arr2) => {
   return [...arr1, ...arr2]
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]))

const addMultipleElements = (arr, ...elements) => {
   return [...arr, ...elements]
}
console.log(addMultipleElements([1, 2, 3], 4, 5, 6))

const doubleValues = (arr) => {
   return arr.map((item) => item * 2)
}
console.log(doubleValues([1, 2, 3]))

const findUnique = (num) => {
   return [...new Set(num)]
}
console.log(findUnique([1, 1, 2, 3, 4, 4, 5, 6, 6]))

const planTrip = (weights) => {
   const totalWeight = weights.reduce((total, weight) => total + weight, 0)
   return totalWeight <= 200
}
console.log(planTrip([30, 70, 90]))
console.log(planTrip([100, 85, 60]))

const optimizeQueue = (orders) => orders.sort((a, b) => a.size - b.size).map((order) => order.id)
console.log(
   optimizeQueue([
      { id: 1, size: 5 },
      { id: 2, size: 3 },
      { id: 3, size: 8 },
   ]),
)

const findMostFrequent = (num) => {
   const freq = num.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
   }, {})
   const max = Math.max(...Object.values(freq))
   return Object.keys(freq).filter((key) => freq[key] === max)
}
console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]))

const findMissingNumber = (numb) => {
   const n = numb.length + 1
   const total = (n * (n + 1)) / 2
   const sum = numb.reduce((acc, val) => acc + val, 0)
   return total - sum
}
console.log(findMissingNumber([1, 2, 4, 5, 6]))
console.log(findMissingNumber([1, 2, 3, 4, 5, 6]))

const generateChessBoard = (size) => {
   const board = []
   for (let i = 0; i < size; i++) {
      const row = []
      for (let j = 0; j < size; j++) {
         row.push((i + j) % 2 === 0 ? 'W' : 'B')
      }
      board.push(row)
   }
   return board
}
console.log(generateChessBoard(3))

// CHAT GPT
let numbers = [34, 7, 23, 32, 5, 62]
//   numbers.sort((a, b) => a - b)
numbers.sort((a, b) => b - a)
console.log(numbers)

let words = ['banana', 'apple', 'cherry', 'date']
// words.sort()
words.sort((a, b) => a.localeCompare(b))
words.sort((a, b) => b.localeCompare(a))
console.log(words)

let peoplle = [
   { name: 'John', age: 30 },
   { name: 'Jane', age: 25 },
   { name: 'Alex', age: 35 },
]
peoplle.sort((a, b) => a.age - b.age)
console.log(peoplle)

let peopllle = [
   { name: 'John', age: 30 },
   { name: 'Jane', age: 25 },
   { name: 'Alex', age: 35 },
]
peopllle.sort((a, b) => b.age - a.age)
console.log(peopllle)

let words_ = ['elephant', 'cat', 'hippopotamus', 'dog']
words_.sort((a, b) => a.length - b.length)
console.log(words_)

let words__ = ['elephant', 'cat', 'hippopotamus', 'dog']
words__.sort((a, b) => b.length - a.length)
console.log(words__)

let mixed = [34, 'banana', 7, 'apple', 23, 'cherry', 5, 62]
let numbersOfMix = mixed.filter((item) => typeof item === 'number').sort((a, b) => a - b)
console.log(numbersOfMix)

let zmogai = [
   { name: 'John', age: 30 },
   { name: 'Jane', age: 25 },
   { name: 'Alex', age: 30 },
   { name: 'Chris', age: 25 },
]
zmogai.sort((a, b) => {
   if (a.age === b.age) {
      return a.name.localeCompare(b.name)
   } else {
      return a.age - b.age
   }
})
console.log(zmogai)

let products = [
   { name: 'Banana', price: 1.0 },
   { name: 'Apple', price: 1.5 },
   { name: 'Cherry', price: 1.0 },
   { name: 'Date', price: 2.0 },
]

products.sort((a, b) => {
   if (a.price === b.price) {
      return a.name.localeCompare(b.name)
   } else {
      return b.price - a.price
   }
})
console.log(products)

let rectangles = [
   { width: 5, height: 10 },
   { width: 7, height: 5 },
   { width: 10, height: 10 },
   { width: 6, height: 7 },
]

rectangles.sort((a, b) => {
   if (a.height === b.height) {
      return b.width - a.width
   } else {
      return a.height - b.height
   }
})
console.log(rectangles)



// GPT REDUCE()
let numbers_ = [1, 2, 3, 4, 5];
let sum = numbers_.reduce((acc, val) => acc + val, 2)
console.log(sum);


let numbers3 = [1, 2, 3, 4, 5];
let product = numbers3.reduce((acc, val) => acc * val, 1)
console.log(product);



let numbers4 = [10, 5, 200, 8, 30, 201];
// let max = numbers4.reduce((acc, val) => Math.max(acc, val), 0)
let max = numbers4.reduce((acc, val) => {
   if (acc > val){
      return acc
   } else{
      return val
   }
}, 0)
console.log(max);



let items = [1, "banana", true, 3.14];
let count = items.reduce((acc, val) => {
   if (typeof val === 'number'){
      return acc +1
   } else{
      return acc
   }
}, 0)
console.log(count);



let people1 = [
   { name: "John", age: 30 },
   { name: "Jane", age: 25 },
   { name: "Alex", age: 35 }
];

let names = people1.reduce((acc, person) => {
   console.log('Prieš:', acc);
   acc.push(person.name);
   console.log('Po:', acc);
   return acc;
}, []); 

console.log('Galutinis rezultatas:', names);

 


let numbersX = [10, 20, 30, 40, 50, 871];
let average = numbersX.reduce((acc, val) => acc + val, 0) / numbersX.length
console.log(average.toFixed(2));



let numbersY = [-10, 20, -30, 40, 50];
let positiveSum = numbersY.reduce((acc, val) => {
   if (val > 0){
      return acc + val
   } else{
      return acc
   }  
}, 0)
console.log(positiveSum);



let itemsC = [1, "banana", true, 3.14, "apple", false];
let typeCounts = itemsC.reduce((acc, val) => {
   let type = typeof val
   if (!acc[type]){
      acc[type] = 0
   }
   acc[type]++
   return acc
   
}, {})
console.log(typeCounts)




let wordsK = ["apple", "banana", "cherry", "date"];
let wordLengths = wordsK.reduce((acc, val) => {
   let length = val.length
   if (!acc[length]){
      acc[length] = []
   }
   acc[length].push(val)
   return acc
}, {})
console.log(wordLengths);


let peopleZ = [
   { name: "John", age: 30 },
   { name: "Jane", age: 25 },
   { name: "Alex", age: 35 },
   { name: "Chris", age: 40 }
];

let ageGroups = peopleZ.reduce((acc, person) => {
    let age = person.age;
    if (age >= 20 && age <= 30) {
        acc["20-30"].sum += age;
        acc["20-30"].count += 1;
    } else if (age >= 31 && age <= 40) {
        acc["31-40"].sum += age;
        acc["31-40"].count += 1;
    }
    return acc;
}, {
    "20-30": { sum: 0, count: 0 },
    "31-40": { sum: 0, count: 0 }
});

// Apskaičiuokite vidurkius
let averages = {
    "20-30": ageGroups["20-30"].count === 0 ? 0 : ageGroups["20-30"].sum / ageGroups["20-30"].count,
    "31-40": ageGroups["31-40"].count === 0 ? 0 : ageGroups["31-40"].sum / ageGroups["31-40"].count
};

console.log("Amžiaus sumos pagal grupes:", ageGroups);
console.log("Amžiaus vidurkiai pagal grupes:", averages);



let wordsY = ["apple", "banana", "apple", "cherry", "banana", "banana"];
let wordFrequency = wordsY.reduce((acc, word) => { 
      if (!acc[word]) {
         acc[word] = 0;
      }
      acc[word]++;
      return acc;
   }, {});
console.log(wordFrequency);



let numbersE = [1, 2, 3, 4, 3, 2, 1, 5];
let uniqueNumbers = numbersE.reduce((acc, val) => {
   if (!acc.includes(val)){
      acc.push(val)
   }
   return acc
}, [])
console.log(uniqueNumbers);



let words___ = ["Apple", "banana", "Cherry", "date", "Elderberry"];

let capitalizedCount = words___.reduce((acc, word) => {
    // Patikriname, ar žodis prasideda didžiąja raide
    if (word[0] === word[0].toUpperCase()) {
        acc += 1;
    }
    return acc;
}, 0);

console.log(capitalizedCount);



let itemms = [
   { category: "fruit", value: 10 },
   { category: "vegetable", value: 20 },
   { category: "fruit", value: 15 },
   { category: "dairy", value: 5 }
 ];
 
 let categoryTotals = itemms.reduce((acc, item) => {
     if (!acc[item.category]) {
         acc[item.category] = 0;
     }
     acc[item.category] += item.value;
     return acc;
 }, {});
 
 console.log(categoryTotals);

 
 








