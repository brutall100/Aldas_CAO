document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Fetching name and logging it
    const name = document.getElementById('name').value;
    console.log(name);

    // Fetching gender probability data
    fetch(`https://api.genderize.io?name=${name}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((result) => {
            console.log(result);
            const genderParagraph = document.createElement('p');
            const formattedProbability = (result.probability * 100).toFixed(2); // Format to 2 decimal places
            genderParagraph.textContent = `Gender: ${result.name} is most likely ${result.gender}. Tikimybe: ${formattedProbability}%`;
            document.body.appendChild(genderParagraph);
        });

    const email = document.getElementById('email').value;
    console.log(email);

    try {
        const response = await fetch(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=bc4ab08e962432bd989a3f68d21177bcc3a677ef`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);

        const scoreParagraph = document.createElement('p');
        scoreParagraph.textContent = `Score: ${result.data.score}`;
        document.body.appendChild(scoreParagraph);

        const resultParagraph = document.createElement('p');
        resultParagraph.textContent = `Address ${result.data.email} :: Result: ${result.data.result}`;
        document.body.appendChild(resultParagraph);

        console.log(result.data.score);
        console.log(result.data.result);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    fetch(`https://api.nationalize.io?name=${name}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((result) => {
            console.log(result);
            const nationalityParagraph = document.createElement('p');
            const formattedNationalityProbability = (result.country[0].probability * 100).toFixed(2); // Format to 2 decimal places
            nationalityParagraph.textContent = `Tautybe: ${result.country[0].country_id} Tikimybe: ${formattedNationalityProbability}%`;
            document.body.appendChild(nationalityParagraph);
        });
});
