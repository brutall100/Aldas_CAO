const apiKey = 'lUt0idzVMjjB7BJ1VFOLrW2n1TVwwhAawP8nanxh';
const apodEndpoint = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const marsRoverEndpoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=`;
const spaceLibraryEndpoint = 'https://images-api.nasa.gov/search?q=space&media_type=image';

function fetchApod() {
    fetch(apodEndpoint)
        .then(response => response.json())
        .then(data => {
            const { title, date, explanation, hdurl } = data;
            const apodContainer = `
                <div class="apod-container">
                    <div class="apod-image-wrapper" style="background-image: url('${hdurl}');">
                        <div class="apod-text">
                            <h1 class="apod-title">${title}</h1>
                            <p class="apod-date">${date}</p>
                        </div>
                    </div>
                    <p class="apod-explanation">${explanation}</p>
                </div>
            `;
            document.querySelector('header').innerHTML = apodContainer;
        })
        .catch(error => console.error('Failed to fetch APOD:', error));
}

function fetchRandomMarsPhoto(sol) {
    fetch(`${marsRoverEndpoint}${sol}&page=1&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const photos = data.photos;
            if (photos.length > 0) {
                const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
                updateImage('.left-section', randomPhoto.img_src, randomPhoto.earth_date, 'mars-image');
            } else {
                updateImage('.left-section', '', 'No photos available for this date.', 'mars-image', true);
            }
        })
        .catch(error => console.error('Failed to fetch Mars photos:', error));
}

function fetchRandomSpacePhoto() {
    fetch(spaceLibraryEndpoint)
        .then(response => response.json())
        .then(data => {
            const items = data.collection.items;
            if (items.length > 0) {
                const randomItem = items[Math.floor(Math.random() * items.length)];
                const imageUrl = randomItem.links ? randomItem.links[0].href : '';
                updateImage('.right-section', imageUrl, randomItem.data[0].title || 'Space Image', 'space-image');
            } else {
                updateImage('.right-section', '', 'No images found', 'space-image', true);
            }
        })
        .catch(error => console.error('Failed to fetch space images:', error));
}

function updateImage(sectionSelector, imgSrc, imgAlt, imgClass, showMessage = false) {
    const section = document.querySelector(sectionSelector);
    const existingImage = section.querySelector(`.${imgClass}`);
    if (existingImage) existingImage.remove();

    if (imgSrc) {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = imgAlt;
        img.className = imgClass;
        section.appendChild(img);
    } else if (showMessage) {
        section.innerHTML += `<p>${imgAlt}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchApod();

    const leftSection = document.querySelector('.left-section');
    const rightSection = document.querySelector('.right-section');

    leftSection.innerHTML = `
        <div class="mars-controls">
            <input type="number" id="solInput" placeholder="SOL" />
            <button id="fetchMarsButton" type="button">Mars Photo</button>
        </div> 
        <img src="img/mars.png" alt="Default Mars Image" class="mars-image">
    `;

    rightSection.innerHTML = `
        <button id="fetchSpaceButton" type="button">Space Photo</button>
        <img src="img/space.webp" alt="Default Space Image" class="space-image">
    `;

    document.getElementById('fetchMarsButton').addEventListener('click', () => {
        const sol = document.getElementById('solInput').value || 2000;
        fetchRandomMarsPhoto(sol);
    });

    document.getElementById('fetchSpaceButton').addEventListener('click', () => {
        fetchRandomSpacePhoto();
    });
});


// Made with ❤️ by GHAT GPT 
// ME 10% CODE 
// 90% CHAT GPT