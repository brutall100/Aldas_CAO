const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    fetch('https://api.waifu.im/search?limit=4') 
        .then(res => res.json())
        .then(data => {
            const output = document.getElementById('output')
            output.innerHTML = '' 
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


document.getElementById('btn2').addEventListener('click', () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=lUt0idzVMjjB7BJ1VFOLrW2n1TVwwhAawP8nanxh')
        .then(res => res.json())
        .then(data => {
            const output = document.getElementById('output2');
            if (data.media_type === 'image') {
                output.innerHTML = `<img src="${data.url}" alt="${data.title}" style="height:70vh;">`;
            } else if (data.media_type === 'video') {
                output.innerHTML = `<iframe src="${data.url}" frameborder="0" allowfullscreen style="width:100%; height:400px;"></iframe>`;
            }
            output.innerHTML += `<h2>${data.title}</h2><p>${data.explanation}</p>`;
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('btn3').addEventListener('click', () => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(res => res.json())
        .then(data => {
            const output = document.getElementById('output3');
            const photo = data.photos[1]; // Get the first photo
            if (photo) {
                output.innerHTML = `<img src="${photo.img_src}" alt="Mars Rover Photo" style="max-width:100%;">`;
                output.innerHTML += `<p>Photo taken by ${photo.rover.name} on ${photo.earth_date} using ${photo.camera.full_name}</p>`;
            } else {
                output.innerHTML = `<p>No photos available for this sol.</p>`;
            }
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

