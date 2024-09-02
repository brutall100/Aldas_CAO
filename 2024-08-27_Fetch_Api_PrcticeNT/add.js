document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const imageUrl = document.querySelector('#img').value;
    const price = document.querySelector('#price').value;
    const description = document.querySelector('#description').value;
    const city = document.querySelector('#city').value;

    const newProperty = { city, price, description, imageUrl };
    console.log(newProperty);

    try {
        const response = await fetch('https://robust-safe-crafter.glitch.me/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newProperty), 
        });

        if (response.ok) {
            console.log('Data successfully sent to the server.');
            fetchData(); 
        } else {
            console.error('Failed to send data to the server.');
        }
    } catch (error) {
        console.error('Error:', error);
    }

    event.target.reset();
});



