


import React, { useState } from 'react';
import CarForm from '../../forms/CarForm';
import CarsList from '../CarsList';
import './Main.css';

const Main = () => {
  const [cars, setCars] = useState([]);

  // Calculate final price when a new car is added
  const calculateFinalPrice = (car) => {
    let additionalCost = 0;
    const basePrice = parseFloat(car.basePrice);
    let discountPercentage = 0;

    // Additional cost based on engine type
    switch (car.engineType) {
      case 'electric':
        additionalCost += 10000;
        break;
      case 'hybrid':
        additionalCost += 7500;
        break;
      case 'diesel':
        additionalCost += 5000;
        break;
      case 'petrol':
        additionalCost += 0;
        break;
      default:
        additionalCost += 0;
        break;
    }

    let priceAfterAdditions = basePrice + additionalCost;

    // Apply km-based discount
    const km = parseFloat(car.km);
    if (km > 400000) {
      discountPercentage = 50;
    } else if (km > 100000) {
      discountPercentage = 30;
    } else if (km > 50000) {
      discountPercentage = 20;
    } else if (km > 20000) {
      discountPercentage = 15;
    } else if (km > 0) {
      discountPercentage = 10;
    }

    const kmDiscountAmount = (priceAfterAdditions * discountPercentage) / 100;
    let finalPrice = priceAfterAdditions - kmDiscountAmount;

    // Apply color adjustment
    let colorCost = 0;
    if (car.color === 'special blue') {
      colorCost = 500;
      finalPrice += 500; // Add 500€ for 'special blue'
    } else if (
      car.color !== 'black' &&
      car.color !== 'red' &&
      car.color !== 'blue' &&
      car.color !== 'silver' &&
      car.color !== 'white'
    ) {
      colorCost = 3000;
      finalPrice += 3000; // Add 3000€ for any color that's not in the default list
    }

    // Apply discount from form (if provided)
    const formDiscount = car.discount ? parseFloat(car.discount) : 0;
    const formDiscountAmount = (finalPrice * formDiscount) / 100;

    finalPrice -= formDiscountAmount; // Subtract form discount if it exists

    // Calculate VAT (PVM)
    const VAT = finalPrice * 0.21;
    const finalPriceWithVAT = finalPrice + VAT;

    return {
      ...car,
      basePrice,
      additionalCost,
      kmDiscountAmount,
      colorCost,
      formDiscountAmount,
      finalPrice,
      VAT,
      finalPriceWithVAT
    };
  };

  const addCar = (newCar) => {
    const carWithPrice = calculateFinalPrice(newCar); // Calculate price when adding
    setCars([...cars, carWithPrice]);
  };

  return (
    <main>
      <h2>Car Management</h2>
      <CarForm addCar={addCar} />
      <CarsList cars={cars} />
    </main>
  );
};

export default Main;

