import React, { useState } from 'react';
import API_ROUTE from '../utils/ApiRoute';

const CityCreateForm = ({ onCityCreated }) => {
    const [cityName, setCityName] = useState('');
    const [population, setPopulation] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCity = {
            cityName,
            population,
            country,
        };

        fetch(`${API_ROUTE}/cities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCity),
        })
            .then((response) => response.json())
            .then((data) => {
                setMessage(`City ${cityName} was successfully created!`);
                setCityName('');
                setPopulation('');
                setCountry('');
                if (onCityCreated) {
                    onCityCreated(data); // Add the new city to the state in CitiesPage
                }
            })
            .catch(() => {
                setMessage('Error creating city.');
            });
    };

    return (
        <div>
            {message && <h2 style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</h2>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="cityName">City Name:</label>
                    <input
                        type="text"
                        id="cityName"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="population">Population:</label>
                    <input
                        type="number"
                        id="population"
                        value={population}
                        onChange={(e) => setPopulation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={!cityName.trim() || !population.trim() || !country.trim()}>
                    Create City
                </button>
            </form>
        </div>
    );
};

export default CityCreateForm;

