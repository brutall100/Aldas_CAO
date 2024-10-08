import React, { useState } from 'react';
import API_ROUTE from '../utils/ApiRoute'; // Assuming API_ROUTE is defined similarly to your UserForm

const CarCreateForm = ({ onCarCreated }) => {
    const [formData, setFormData] = useState({
        carName: '',
        carModel: '',
        carYear: '',
        carColor: ''
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormComplete = Object.values(formData).every(value => value.trim() !== '');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${API_ROUTE}/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(() => {
            setMessage(`Car ${formData.carName} was successfully created!`);
            setFormData({
                carName: '',
                carModel: '',
                carYear: '',
                carColor: ''
            });
            if (onCarCreated) {
                onCarCreated(formData.carName);
            }
        })
        .catch(() => {
            setMessage('Error creating car.');
        });
    };

    return (
        <div>
            {message && <h2 style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</h2>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="carName">Car Name:</label>
                <input
                    type="text"
                    name="carName"
                    id="carName"
                    value={formData.carName}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="carModel">Car Model:</label>
                <input
                    type="text"
                    name="carModel"
                    id="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="carYear">Car Year:</label>
                <input
                    type="number"
                    name="carYear"
                    id="carYear"
                    value={formData.carYear}
                    onChange={handleInputChange}
                />
                <br />

                <label htmlFor="carColor">Car Color:</label>
                <input
                    type="text"
                    name="carColor"
                    id="carColor"
                    value={formData.carColor}
                    onChange={handleInputChange}
                />
                <br />

                <button type="submit" disabled={!isFormComplete}>Submit</button>
            </form>
        </div>
    );
}

export default CarCreateForm;



