async function fetchData() {
    try {
        const response = await fetch('https://robust-safe-crafter.glitch.me/');
        const data = await response.json();
        processData(data); // Call the non-async function with the fetched data
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchData();

const cardContainer = document.querySelector('.card-container');
cardContainer.textContent = 'Loading...'; // Show loading text

function processData(data) {
    // Clear the card container before adding new content
    cardContainer.textContent = '';

    data.forEach((ntObj, index) => {
		console.log(`id ${index + 1}:`)//
		console.log(`City: ${ntObj.city}`)//
		console.log(`Price: ${ntObj.price}`)//
		console.log(`Description: ${ntObj.description}`)//
		console.log(`Image URL: ${ntObj.image}`)//
		console.log('--------------------------')//


        const id = index + 1;
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

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = city;
        cardTitle.className = 'card-title';

        const cardPrice = document.createElement('p');
        cardPrice.textContent = `Price: $${price}`;
        cardPrice.className = 'card-price';

        const cardDescription = document.createElement('p');
        cardDescription.textContent = description;
        cardDescription.className = 'card-description';

        // Append elements to the cardContent div
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardPrice);
        cardContent.appendChild(cardDescription);

        // Append the image and content to the card
        card.appendChild(cardImage);
        card.appendChild(cardContent);

        // Append the card to the cardContainer
        cardContainer.appendChild(card);
    });
}
