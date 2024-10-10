import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_ROUTE from '../utils/ApiRoute';
import axios from 'axios';

const CitiesPage = () => {
    const [cities, setCities] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${API_ROUTE}/cities`)
            .then((response) => {
                setCities(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    const handleDelete = (cityId) => {
        axios.delete(`${API_ROUTE}/cities/${cityId}`)
            .then(() => {
                setCities((prevCities) => prevCities.filter((city) => city.id !== cityId));
            })
            .catch((err) => {
                setError(`Error deleting city: ${err.message}`);
            });
    };

    return (
        <div>
            <h1>List of Cities</h1>
            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
            {cities.length > 0 ? (
                <ul>
                    {cities.map((city) => (
                        <li key={city.id}>
                            <h2>{city.cityName}</h2>
                            <p>Population: {city.population}</p>
                            <p>Country: {city.country}</p>
                            <button onClick={() => handleDelete(city.id)}>Delete</button>
                            <Link to={`/cities/${city.id}`}>
                                <button>Look at City</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No cities available.</p>
            )}
        </div>
    );
};

export default CitiesPage;
