const h1Element = document.querySelector('h1')
const h2Element = document.querySelector('h2')
const h3Element = document.querySelector('h3')
const h4Element = document.querySelector('h4')
const h5Element = document.querySelector('h5')

h1Element.addEventListener('click', function() {
    // h1Element.style = `color: pink; 
    //                    font-size: 50px;
    //                    border: 2px solid black;`

    h1Element.style.color = 'pink'
    h1Element.style.backgroundColor = 'green'
    h1Element.textContent = 'Clicked'
    
    // setInterval(function() {
    //     h1Element.style.color = ''
    //     h1Element.style.backgroundColor = ''
    //     h1Element.textContent = 'Pirmas elementas'
    // }, 3000)
})

h2Element.addEventListener('click', () => {
    h2Element.style.fontSize = '40px'
})

// h3Element.addEventListener('click', () => {
//     h3Element.style.color = 'purple'
//     h1Element.style.color = 'purple'
// })

h3Element.addEventListener('click', clickedH3Element)
function clickedH3Element() {
    h3Element.style.color = 'purple'
    h1Element.style.color = 'purple'
}

// h4Element.addEventListener('click', () => {
//     h4Element.style.border = '2px dashed black'
//     h1Element.style.border = '2px dashed black'
// })

// h5Element.addEventListener('click', () => {
//     h4Element.style.border = '2px dashed black'
//     h1Element.style.border = '2px dashed black'
// })

h4Element.addEventListener('click', changeBorders)
h5Element.addEventListener('click', changeBorders)

function changeBorders() {
    h4Element.style.border = '2px dashed black'
    h1Element.style.border = '2px dashed black'

    const paragraph = document.createElement('p')
    paragraph.textContent = 'Cia yra paragrafas'

    h5Element.after(paragraph)
}