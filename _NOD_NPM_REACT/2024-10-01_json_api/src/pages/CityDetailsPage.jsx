import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API_ROUTE from '../utils/ApiRoute';
import axios from 'axios';

const CityDetailsPage = () => {
    const { cityId } = useParams();
    const [city, setCity] = useState(null);
    const [error, setError] = useState('');
   

    useEffect(() => {
        axios(`${API_ROUTE}/cities/${cityId}`)
            .then((response) => {
                setCity(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
       
    }, [cityId]);

    if (error) {
        return <h2 style={{ color: 'red' }}>{error}</h2>;
    }

    if (!city) {
        return <p>Loading city details...</p>;
    }

    return (
        <div>
            <h1>City Details</h1>
            <h2>{city.cityName}</h2>
            <p>Population: {city.population}</p>
            <p>Country: {city.country}</p>
            <Link to ="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default CityDetailsPage;
