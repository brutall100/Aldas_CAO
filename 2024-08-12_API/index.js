const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    fetch('https://api.waifu.im/search?limit=5') // Fetch 5 images
        .then(res => res.json())
        .then(data => {
            const output = document.getElementById('output')
            output.innerHTML = '' // Clear previous images
            data.images.forEach(image => {
                const imgElement = document.createElement('img')
                imgElement.src = image.url
                imgElement.alt = 'waifu'
                imgElement.className = 'anime'
                output.appendChild(imgElement)
            })
            console.log(output)
            console.log(data)
        })
})