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



const optimizeQueue = (orders) => orders.sort((a, b) => a.size - b.size).map(order => order.id)
console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }]))



const findMostFrequent = (num) => {
    const freq = num.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
    const max = Math.max(...Object.values(freq))
    return Object.keys(freq).filter(key => freq[key] === max)
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
    const board = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push((i + j) % 2 === 0 ? 'W' : 'B');
        }
        board.push(row);
    }
    return board;
}
console.log(generateChessBoard(3))