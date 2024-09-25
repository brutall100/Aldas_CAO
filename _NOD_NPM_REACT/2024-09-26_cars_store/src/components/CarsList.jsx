import React from 'react';

const CarsList = ({ cars }) => {
  return (
    <div>
      <h3>List of Cars</h3>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <h4>{car.brand} - {car.model}</h4>
            <p>1. Bazinė kaina: €{car.basePrice}</p>
            
            <p>2. Papildomos paslaugos:</p>
            <p>2.1. Variklio tipas: {car.engineType} (€{car.additionalCost})</p>
            <p>2.2. Spalva: {car.color} (€{car.colorCost})</p>
            <p>2.3. Viso už papildomas paslaugas: €{car.additionalCost + car.colorCost}</p>
            
            <p>3. Kainos sumažėjimas:</p>
            <p>3.1. Dėl kilometražo: -€{car.kmDiscountAmount}</p>
            <p>3.2. Nuolaida: -€{car.formDiscountAmount}</p>
            <p>3.3. Viso kainos sumažėjimas: -€{car.kmDiscountAmount + car.formDiscountAmount}</p>
            
            <p>4. Galutinė kaina: €{car.finalPrice}</p>
            
            <p>5. PVM (21%): €{car.VAT}</p>
            
            <p>6. Galutinė kaina su PVM: €{car.finalPriceWithVAT}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;




