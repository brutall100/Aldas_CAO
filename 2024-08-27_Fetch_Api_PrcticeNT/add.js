document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const imageUrl = document.querySelector('#img').value;
    const price = document.querySelector('#price').value;
    const description = document.querySelector('#description').value;
    const city = document.querySelector('#city').value;
    const newProperty = { city, price, description, imageUrl };
    console.log(newProperty);
    // data.push(newProperty);
    // processData(data);
    event.target.reset(event);
});