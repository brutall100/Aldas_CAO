import React from 'react';
import UserForm from '../forms/UserCreateForm';
import CarCreateForm from '../forms/CarCreateForm';
import CityCreateForm from '../forms/CityCreateForm';

const HomePage = () => {
    const handleUserCreated = (userName) => {
        console.log(`User created: ${userName}`);
    };

    const handleCarCreated = (carName) => {
        console.log(`Car created: ${carName}`);
    };

    const handleCityCreated = (cityName) => {
        console.log(`City created: ${cityName}`);
    };

    return (
      <>
        <h1>This is the main Home page</h1>
        <div>
            <h2>Create a New User</h2>
            <UserForm onUserCreated={handleUserCreated} />
        </div>
        <div>
            <h2>Create a New Car</h2>
            <CarCreateForm onCarCreated={handleCarCreated} />
        </div>
        <div>
            <h2>Create a New City</h2>
            <CityCreateForm onCityCreated={handleCityCreated} />
        </div>
      </>
    );
};

export default HomePage;


