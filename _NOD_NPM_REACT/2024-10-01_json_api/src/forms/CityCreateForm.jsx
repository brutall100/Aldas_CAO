import React, { useState } from 'react';
import API_ROUTE from '../utils/ApiRoute';
import styled from 'styled-components';

const FormContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid ${props => props.showError ? 'red' : 'rgb(204, 204, 204)'};
    background-color: ${props => props.showError ? '#ffe6e6' : 'white'};
    border-radius: 4px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:disabled {
        background-color: #ccc;
    }
`;

const Message = styled.h2`
    color: ${props => (props.isError ? 'red' : 'green')};
`;

const CityCreateForm = ({ onCityCreated }) => {
    const [cityName, setCityName] = useState('');
    const [population, setPopulation] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');
    const [touched, setTouched] = useState({
        cityName: false,
        population: false,
        country: false
    });

    const handleBlur = (field) => {
        setTouched({
            ...touched,
            [field]: true
        });
    };

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
                setTouched({
                    cityName: false,
                    population: false,
                    country: false
                });
                if (onCityCreated) {
                    onCityCreated(data);
                }
            })
            .catch(() => {
                setMessage('Error creating city.');
            });
    };

    const isFormInvalid = !cityName.trim() || !population.trim() || !country.trim();

    return (
        <FormContainer>
            {message && <Message isError={message.includes('Error')}>{message}</Message>}
            <form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="cityName">City Name:</Label>
                    <Input
                        type="text"
                        id="cityName"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        onBlur={() => handleBlur('cityName')}
                        showError={touched.cityName && !cityName.trim()}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="population">Population:</Label>
                    <Input
                        type="number"
                        id="population"
                        value={population}
                        onChange={(e) => setPopulation(e.target.value)}
                        onBlur={() => handleBlur('population')}
                        showError={touched.population && !population.trim()}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="country">Country:</Label>
                    <Input
                        type="text"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        onBlur={() => handleBlur('country')}
                        showError={touched.country && !country.trim()}
                        required
                    />
                </div>
                <Button type="submit" disabled={isFormInvalid}>
                    Create City
                </Button>
            </form>
        </FormContainer>
    );
};

export default CityCreateForm;


