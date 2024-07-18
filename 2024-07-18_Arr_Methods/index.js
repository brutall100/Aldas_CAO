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




