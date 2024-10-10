import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API_ROUTE from '../utils/ApiRoute';
import axios from 'axios'

const CarDetailsPage = () => {
    const { carId } = useParams();
    const [car, setCar] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${API_ROUTE}/cars/${carId}`)
            .then((data) => {
                setCar(data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [carId]);

    if (error) {
        return <h2 style={{ color: 'red' }}>{error}</h2>;
    }

    if (!car) {
        return <p>Loading car details...</p>;
    }

    return (
        <div>
            <h1>Car Details</h1>
            <h2>{car.carName}</h2>
            <p>Model: {car.carModel}</p>
            <p>Year: {car.carYear}</p>
            <p>Color: {car.carColor}</p>
            <Link to ="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default CarDetailsPage;
