// !! Array metodai ir Callbacks

////
function alertName(name) {
   alert(name)
}

function consoleName(name) {
   console.log(name)
}

function coreFunc(name, callback) {
   const formatedName = name.charAt(0).toUpperCase() + name.slice(1)
   callback(formatedName)
}

// coreFunc('john', alertName)
coreFunc('john', consoleName)


////
// A 
const cars = ["BMW", "VW", "Audi"]
cars.forEach((car, i, arr) => console.log( (i+1) + ': ' + car + ' ' + arr) )
// B
const cars2 = ["BMW", "VW", "Audi", "Mercedes", "Opel", "Toyota"];
const thisValue = "My Context";

cars2.forEach(function(car, i, arr) {console.log((i + 1) + ' ' + car + ' ' + this) }, thisValue);


////
let names = ['JoHHn', 'JaNe', 'akck', 'JillEE']
let fixedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase())

console.log(fixedNames)


////
let age = [23, 29, 31, 40, 89]
let ages = age.filter(age => age >= 30)
console.log(ages)


////
let miestai = ['Vilnius', 'Kaunas', 'klaipeda', 'Siauliai', 'Panevezys']
let findK = miestai.find(miestas => miestas.charAt(0) === 'K')
let findV = miestai.find(miestas => miestas.charAt(0) === 'V')
console.log(findK)
console.log(findV)

let some_cities = miestai.some(mazoji_raide => mazoji_raide.charAt(0) === mazoji_raide.charAt(0).toLowerCase())
console.log(some_cities)

let every_cities = miestai.every(didzioji_raide => didzioji_raide.charAt(0) === didzioji_raide.charAt(0).toUpperCase())
console.log(every_cities)



// !!GPT callback
const waitOneSecond = (callback) => {
   setTimeout(function(){
      callback()
   }, 1000)
}

const logDone = () => console.log('As laukiau 1 sekunde')

waitOneSecond(logDone)

// //
const processArray = (array, callback) => {
   array.forEach((element) => {
      callback(element)
   })
}

const printElement = (element) => console.log(element)

processArray([1, 2, 3, 4, 5], printElement)


////
const waitAndCall = (callback) =>{
   setTimeout(() => callback(), 2000)
}

function timeUp() {
   console.log("Laikas baigėsi po 2 sekundziu!");
}

waitAndCall(timeUp)


////
const incrementAndCall =(num, callback) => {
   num = num + 1
   callback(num)
}

function printNumber(number) {
   console.log("Naujas skaičius: " + number);
}

incrementAndCall(5, printNumber);


////
// Main MEssage
const createGreeting = (name, callback) => {
   const sveikinimas = `Hello, ${name}!`;
   callback(sveikinimas);
};
// A
const greetWithTime = (sveikinimas_X) => {
   const currentTime = new Date().toLocaleTimeString();
   console.log(`A  ${sveikinimas_X} Current time is: ${currentTime}`);
};
createGreeting("John", greetWithTime);

// B
const updateHTML = (sveikinimas) => {
   document.getElementById('greeting').innerHTML = sveikinimas;
   console.log("B  " + sveikinimas);
};
createGreeting("Jane", updateHTML);

// C
const countCharacters = (sveikinimas) => {
   const charCount = sveikinimas.length;
   console.log(`C ${sveikinimas} (Character count: ${charCount})`);
};
createGreeting("Emily", countCharacters);

// D
const convertToUpperCase = (sveikinimas) => {
   const upperCaseGreeting = sveikinimas.toUpperCase();
   console.log(`D ${upperCaseGreeting}`);
};
createGreeting("Alice", convertToUpperCase);

// E
const appendRandomNumber = (sveikinimas) => {
   const randomNumber = Math.floor(Math.random() * 100) + 1;
   console.log(`E ${sveikinimas} Random number: ${randomNumber}`);
};
createGreeting("Bob", appendRandomNumber);

// F
const timeBasedGreeting = (sveikinimas) => {
   const hours = new Date().getHours();
   let timeOfDay;

   if (hours < 12) {
       timeOfDay = "Good morning";
   } else if (hours < 18) {
       timeOfDay = "Good afternoon";
   } else {
       timeOfDay = "Good evening";
   }

   console.log(`F ${timeOfDay}, ${sveikinimas}`);
};
createGreeting("Sarah", timeBasedGreeting);



////
const arr = ['hello', 'hi', 'good', 'morning', 'evening', 'night']

const mainFunc = (skambutis) => {
   arr.forEach(skambutis)
}

const toUpperCase = (word) => {
   console.log(word.toUpperCase())
}

mainFunc(toUpperCase)


//// CALLBACKS
function callFunction(callback) {
   let name = 'Aldas'
   callback(name);
}
function callbackFunction(vardas) {
   console.log(`Callback funkcija veikia! ${vardas}`);
}
callFunction(callbackFunction);


////
function processData (data, callback) {
   console.log('Processing data...1.2.3')
   callback(data)
}
function displayData(dataFromProcessData) {
   console.log(`Data: ${dataFromProcessData}`)
}
processData('Siunciamas tekstas', displayData)


////
function asyncFunction(callback){
   setTimeout(function(){
      callback('Async funkcija veikia')
   }, 5000)
}
function callbackFunction(duomenys){
   console.log(duomenys + ' ir atspausdinamas callback')
}

asyncFunction(callbackFunction)


////
function processArray2 (array, call){
   for (let i = 0; i < array.length; i++){
      call(array[i])
   }
}

function printElement2(elementFromProcessArray){
   console.log(elementFromProcessArray)
}

let masyvas = [1, 'KAip', 3, 'tu', 5]
processArray2(masyvas, printElement2)


////
function getUserData(callll){
   const userData = {
      name: 'Aldas',
      age: 29,
      city: 'Vilnius'
   }
   callll(userData)
}

function displayUserData(userDataFromGetUserData){
   console.log(`Vardas: ${userDataFromGetUserData.name}, Amzius: ${userDataFromGetUserData.age}, Miestas: ${userDataFromGetUserData.city}`)
}
getUserData(displayUserData)



////
function validateInput(input, calllas){
   const isValid = input.length > 5
   calllas(isValid)
}

function validationfromCall(isValid){
   if (isValid){
      console.log('Ivestas tekstas yra ilgesnis nei 5 simboliai')
   } else {
      console.log('Ivestas tekstas yra per trumpas')
   }
}

validateInput('Labas', validationfromCall)


////
function transformData(data, callback) {
   const transformedData = data.map(item => callback(item));
   return transformedData;
}

function transformationCallback(item) {
   return item.toUpperCase();
}

const data = ['a', 'b', 'c'];
const transformed = transformData(data, transformationCallback);
console.log('Transformuoti duomenys:', transformed);






