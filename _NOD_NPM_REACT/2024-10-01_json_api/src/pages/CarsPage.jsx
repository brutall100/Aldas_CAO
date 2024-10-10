import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ROUTE from '../utils/ApiRoute';

const CarsPage = () => {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${API_ROUTE}/cars`)
            .then((response) => {
                setCars(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    const handleDelete = (carId) => {
        axios.delete(`${API_ROUTE}/cars/${carId}`)
            .then(() => {
                setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
            })
            .catch((err) => {
                setError(`Error deleting car: ${err.message}`);
            });
    };

    return (
        <div>
            <h1>List of Cars</h1>
            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
            {cars.length > 0 ? (
                <ul>
                    {cars.map((car) => (
                        <li key={car.id}>
                            <h2>{car.carName}</h2>
                            <p>Model: {car.carModel}</p>
                            <p>Year: {car.carYear}</p>
                            <p>Color: {car.carColor}</p>
                            <button onClick={() => handleDelete(car.id)}>Delete</button>
                            <Link to={`/cars/${car.id}`}>
                                <button>Look at Car</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No cars available.</p>
            )}
        </div>
    );
};

export default CarsPage;

