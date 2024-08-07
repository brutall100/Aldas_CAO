document.querySelector('button').addEventListener('click', () => {
    document.querySelector('p').textContent = 'Hello World!'
})

const counterToPlus = document.createElement('h1');
counterToPlus.textContent = 0;
document.body.appendChild(counterToPlus);

const button = document.createElement('button');
button.textContent = 'Click + ';
document.body.appendChild(button);

button.addEventListener('click', () => {
    counterToPlus.textContent++;
})

document.getElementsByClassName('long-paragraph')[0].addEventListener('copy', () => {
    console.log('You copied the text');
    // alert('You copied the text');
})

document.querySelector('div').addEventListener('click', () => {
    console.log('You clicked the div');
    let randNumber = Math.floor(Math.random() *100)
    console.log(randNumber);
    document.querySelector('div').textContent = randNumber;
})


document.querySelectorAll('button')[1].addEventListener('click', () => {
    document.querySelectorAll('p')[2].textContent = 'Alus!'
})
document.querySelectorAll('button')[2].addEventListener('click', () => {
    document.querySelectorAll('p')[2].textContent = 'Nieko neturim!'
})

function randomNumber() {
    let randNumber = Math.floor(Math.random() * 3) + 1;
    return randNumber;
}

document.getElementById('spin').addEventListener('click', () => {
    console.log('You clicked the spin button');
    let randNumber = randomNumber();
    return randNumber;
});

document.getElementById('_1').addEventListener('click', () => {
    console.log('You clicked 1 button');
    if (randomNumber() === 1) {
        console.log('You won 1!');
        document.getElementById('result').textContent = 'You won 1!';
    }
})

document.getElementById('_2').addEventListener('click', () => {
    console.log('You clicked 2 button');
    if (randomNumber() === 2) {
        console.log('You won 2!');
        document.getElementById('result').textContent = 'You won 2!';
    }
})

document.getElementById('_3').addEventListener('click', () => {
    console.log('You clicked 3 button');
    if (randomNumber() === 3) {
        console.log('You won 3!');
        document.getElementById('result').textContent = 'You won 3!';
    }
})
