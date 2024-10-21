import React from 'react';
import UserForm from '../forms/UserCreateForm';
import CarCreateForm from '../forms/CarCreateForm';
import CityCreateForm from '../forms/CityCreateForm';
import SearchInput from '../components/SearchInput'; // Import the new SearchInput component
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledPage = styled.div`
  padding: 20px;
  background-color: #afdec0;
  font-family: Arial, sans-serif;
`;

const StyledH1 = styled.h1`
  font-size: 2.5em;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const Section = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 30px;
 padding: 20px;
 border-radius: 8px;
 background-color: #e6f7ff;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledH2 = styled.h2`
  font-size: 1.8em;
  color: #004080;
  margin-bottom: 20px;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleUserCreated = (userName) => {
    console.log(`User created: ${userName}`);
  };

  const handleCarCreated = (carName) => {
    console.log(`Car created: ${carName}`);
  };

  const handleCityCreated = (cityName) => {
    console.log(`City created: ${cityName}`);
  };

  const handleSearch = (query) => {
    navigate(`/search?q=${query}`);
  };

  return (
    <StyledPage>
      <StyledH1>This is the main Home page</StyledH1>
      <Section>
        <SearchInput onSearch={handleSearch} />
      </Section>
      <Section>
        <StyledH2>Create a New User</StyledH2>
        <UserForm onUserCreated={handleUserCreated} />
      </Section>
      <Section>
        <StyledH2>Create a New Car</StyledH2>
        <CarCreateForm onCarCreated={handleCarCreated} />
      </Section>
      <Section>
        <StyledH2>Create a New City</StyledH2>
        <CityCreateForm onCityCreated={handleCityCreated} />
      </Section>
    </StyledPage>
  );
};

export default HomePage;




