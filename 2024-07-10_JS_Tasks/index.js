const arr = new Array(1, 2, 3, 4, 5);
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


let i = 1
let sum = 0
while(i <= 5){
    sum += i
    i++
}
console.log(sum)


for(let i = 2; i <= 10; i+= 2){
    console.log(i)
}


for( let i = 10; i >= 0; i--){
    console.log(i)
}



let counter = 0
let i_ = 1
while(i_ <= 20){
    if(i_ % 3 ===0){
        counter++
        console.log(i_)
    }
    i_++

}



let array = [1, 2, 3, 4, 500, -5, 375, 20, 501, -600]
let max = []
for(let i = 0; i < array.length; i++){
    if(array[i] >max){
        max = array[i]
    }
}
console.log(max)



let daliklis = 15
for(let i = 1; i <= daliklis; i++){
    if(daliklis % i === 0){
        console.log(`is daliklio ${daliklis} dalinasi ${i}`)
    }
}



let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = []
let odd = []

for( let i = 0; i < arr3.length; i++){
    if(arr3[i] % 2 === 0){
        even.push(arr3[i])
    } else {
        odd.push(arr3[i])
    }
    
}
console.log(odd)
console.log(even)

// Pats neiveikiau
for (let i = 1; i <= 20; i++) { 
    let isPrime = true; 
    if (i > 1) { 
        for (let j = 2; j < i; j++) { 
            if (i % j === 0) { 
                isPrime = false; 
                break; 
            }
        }
        if (isPrime) { 
            console.log(i); 
        }
    }
}



// Pats neiveikiau
let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= 10; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(nextTerm);
}

// Kartojimas 2 pamoka
const text1 = 'Labas rytas'
const text2 = 'Labas Rytas'

const result = text1 === text2 ? 'taip' : 'ne'
console.log(result)

const number = 10
const string = '10'

const result1 = number != string 
const result2 = number == string 
const result3 = number === string 
console.log(result1)
console.log(result2)
console.log(result3)


const currentBalance = 50;
const transaction = 51;

const rezultas = currentBalance + transaction < 0 ? 'ne' : 'taip'
console.log(rezultas)


const numX = 18
const numY = 3

let dividibleNumber = numX % numY === 0 ? 'taip' : 'ne'
console.log(dividibleNumber)

// Kartojimas 3 pamoka
// const atsakymas = 'Vatikanas'
// const klausimas = prompt('Koks yra maziausias pasaulio miestas?')

// if(atsakymas === klausimas){
//     alert('Atsakymas teisingas')
// } else{
//     alert('Tu rimtai?')
// }

let a = 2, b = 2
let resultt = (a + b < 4) ? 'Maziau' : (a + b == 4) ? 'Lygu' : 'Daugiau'
console.log(resultt)

login = 'Director'
let message = (login == 'Employee')? 'Hello' : 
(login== 'Director') ? 'Greetings' : 
(login == '') ? 'No login' : ''
console.log(message)


let legalAge = 20
let clientAge = 17
if(clientAge >= legalAge){
    console.log(`Welcome, you are ${clientAge}. Enough to enter `)
} else{
    console.log(`You are ${legalAge}. Too young`)
}


let name = 'Varnis'
if(name.length >= 6){
    console.log('Per ilgas vardasis')
} else{
    console.log('Vardas tinka')
}


let age = -20
if(age <= 0 || age > 100)
console.log('Netinkamas amzius')
else{
    if(age >= 1 && age <= 18){
        console.log('Zmogus yra nepilnametis')
    }else{
        console.log('Zmogus yra pilnametis')
    }
}


const car = 'Mini'
const vwGroup = new Array('VW', 'Audi', 'Bentley', 'Bugatti', 'Lamborghini', 'Porsche')
const bmwGroup = new Array('BMW', 'Mini', 'Rolls-Royce')

if(vwGroup.includes(car)){
    console.log('VW Group')
} else if(bmwGroup.includes(car)){
    console.log('BMW Group')
} else{
    console.log('Unknown')
}


let nameOfDog = 'Rdsdex'
console.log(nameOfDog.length > 5 ? 'Vardas ilgas' : 'Vardas trumpas')



clientAge = 17
legalAge = 18
const canDrive = clientAge < 0 || clientAge > 120 ? 'Netinkamas amzius' : clientAge >= legalAge ? 'Gali vairuoti' : 'Negali vairuoti'
console.log(canDrive)



let phone = 'iphone'
let isIphoneUser = phone === 'iphone' ? 'Iphone user' : 'Not an Iphone user'
console.log(isIphoneUser)
