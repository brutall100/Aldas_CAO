async function fetchData() {
    try {
        const response = await fetch('https://robust-safe-crafter.glitch.me/');
        const data = await response.json();
        processData(data);
        setupFilterButtons(data); 
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchData();

const cardContainer = document.querySelector('.card-container');
cardContainer.textContent = 'Loading...';

function processData(data) {
    cardContainer.textContent = '';

    data.forEach((ntObj, index) => {
        const city = ntObj.city;
        const price = ntObj.price;
        const description = ntObj.description;
        const imageUrl = ntObj.image;

        const card = document.createElement('div');
        card.className = 'card';

        const cardImage = document.createElement('img');
        cardImage.src = imageUrl;
        cardImage.alt = city;
        cardImage.className = 'card-image';

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const cardTitle = document.createElement('h5');
        cardTitle.textContent = city;
        cardTitle.className = 'card-title';

        const cardPrice = document.createElement('p');
        cardPrice.textContent = `€${price}`;
        cardPrice.className = 'card-price';

        const cardDescription = document.createElement('p');
        cardDescription.textContent = description;
        cardDescription.className = 'card-description';

        cardContent.appendChild(cardPrice);
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardDescription);

        card.appendChild(cardImage);
        card.appendChild(cardContent);

        cardContainer.append(card);
    });
}

function setupFilterButtons(data) {
    const main = document.querySelector('main');
    const filterButtonsElement = document.createElement('div');
    filterButtonsElement.className = 'filter-buttons-element';
    main.prepend(filterButtonsElement);

    const filterButtons = ['Visi miestai', 'Vilnius', 'Kaunas', 'Klaipeda'];

    filterButtons.forEach((city) => {
        const filterButton = document.createElement('button');
        filterButton.textContent = city;
        filterButton.className = 'filter-button';
        filterButton.addEventListener('click', () => filterByCity(city, data));
        filterButtonsElement.append(filterButton);
    });

    const filterText = document.createElement('h3');
    filterText.textContent = 'Filter by city:';
    filterText.className = 'filter-text';
    filterButtonsElement.prepend(filterText);
}

function filterByCity(cityName, data) {
    console.log("Filtering by city:", cityName);

    const filteredData = cityName === 'Visi miestai' ? data : data.filter(item => item.city === cityName);


    processData(filteredData);
}
