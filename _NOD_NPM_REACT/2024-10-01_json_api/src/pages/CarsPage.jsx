import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ROUTE from '../utils/ApiRoute';
import styled from 'styled-components';

// Styled components
const StyledPage = styled.div`
  padding: 20px;
  background-color: #898c7a;
  font-family: Arial, sans-serif;
`;

const StyledH1 = styled.h1`
  font-size: 2.5em;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const ErrorMessage = styled.h2`
  color: red;
  text-align: center;
  margin-bottom: 20px;
`;

const CarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CarItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CarTitle = styled.h2`
  font-size: 1.8em;
  color: #004080;
  margin-bottom: 10px;
`;

const CarDetails = styled.p`
  font-size: 1.2em;
  color: #666;
  margin: 5px 0;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

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
        <StyledPage>
            <StyledH1>List of Cars</StyledH1>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {cars.length > 0 ? (
                <CarList>
                    {cars.map((car) => (
                        <CarItem key={car.id}>
                            <CarTitle>{car.carName}</CarTitle>
                            <CarDetails>Model: {car.carModel}</CarDetails>
                            <CarDetails>Year: {car.carYear}</CarDetails>
                            <CarDetails>Color: {car.carColor}</CarDetails>
                            <Button onClick={() => handleDelete(car.id)}>Delete</Button>
                            <Link to={`/cars/${car.id}`}>
                                <Button>Look at Car</Button>
                            </Link>
                        </CarItem>
                    ))}
                </CarList>
            ) : (
                <p>No cars available.</p>
            )}
        </StyledPage>
    );
};

export default CarsPage;


