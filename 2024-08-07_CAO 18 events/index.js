document.querySelector('button').addEventListener('click', () => {
   document.querySelector('p').textContent = 'Hello World!'
})

const counterToPlus = document.createElement('h1')
counterToPlus.textContent = 0
document.body.appendChild(counterToPlus)

const button = document.createElement('button')
button.textContent = 'Click + '
document.body.appendChild(button)

button.addEventListener('click', () => {
   counterToPlus.textContent++
})

document.getElementsByClassName('long-paragraph')[0].addEventListener('copy', () => {
   console.log('You copied the text')
   // alert('You copied the text');
})

document.querySelector('div').addEventListener('click', () => {
   console.log('You clicked the div')
   let randNumber = Math.floor(Math.random() * 100)
   console.log(randNumber)
   document.querySelector('div').textContent = randNumber
})

document.querySelectorAll('button')[1].addEventListener('click', () => {
   document.querySelectorAll('p')[2].textContent = 'Alus!'
})
document.querySelectorAll('button')[2].addEventListener('click', () => {
   document.querySelectorAll('p')[2].textContent = 'Nieko neturim!'
})

let mySpinedNumber

function randomNumber() {
   let randNumber = Math.floor(Math.random() * 3) + 1
   console.log(randNumber)
   return randNumber
}

document.getElementById('spin').addEventListener('click', () => {
   console.log('You clicked the spin button')
   mySpinedNumber = randomNumber()
   console.log(mySpinedNumber)
})

document.getElementById('_1').addEventListener('click', () => {
   console.log('You clicked 1 button')
   if (mySpinedNumber === 1) {
      console.log('You won 1!')
      document.getElementById('result').textContent = 'You won 1!'
   }
})

document.getElementById('_2').addEventListener('click', () => {
   console.log('You clicked 2 button')
   if (mySpinedNumber === 2) {
      console.log('You won 2!')
      document.getElementById('result').textContent = 'You won 2!'
   }
})

document.getElementById('_3').addEventListener('click', () => {
   console.log('You clicked 3 button')
   if (mySpinedNumber === 3) {
      console.log('You won 3!')
      document.getElementById('result').textContent = 'You won 3!'
   }
})


const btn = document.getElementById('btn');
let isClicked = false;

btn.addEventListener('click', () => {
    isClicked = !isClicked;
    if (isClicked) {
        btn.textContent = 'Juk sakiau paspausti negalima!';
    } else {
        btn.textContent = "Don't Click me";
    }
});

document.querySelector('h1').addEventListener('mousemove', () => {
    document.querySelector('h1').textContent = 'Kiek galima neklausyti?!!'
    console.log('Kiek galima neklausyti?!')
})
