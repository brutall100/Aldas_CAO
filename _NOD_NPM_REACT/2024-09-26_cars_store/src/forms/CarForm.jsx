import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    engineType: '',
    basePrice: '',
    km: '',
    color: '',
    otherColor: '', 
    imageUrl: '',
    discount: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCarData = {
      ...carData,
      color: carData.color === 'other' ? carData.otherColor : carData.color,
      discount: carData.discount || '0' 
    };
    addCar(finalCarData); 
    setCarData({
      brand: '',
      model: '',
      engineType: '',
      basePrice: '',
      km: '',
      color: '',
      otherColor: '', 
      imageUrl: '',
      discount: '' 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={carData.brand}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Model</label>
        <input
          type="text"
          name="model"
          value={carData.model}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Engine Type</label>
        <select
          name="engineType"
          value={carData.engineType}
          onChange={handleChange}
          required
        >
          <option value="">Select engine type</option>
          <option value="electric">Electric</option>
          <option value="diesel">Diesel</option>
          <option value="petrol">Petrol</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <div>
        <label>Base Price</label>
        <input
          type="number"
          name="basePrice"
          value={carData.basePrice}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Kilometers (km)</label>
        <input
          type="number"
          name="km"
          value={carData.km}
          onChange={handleChange}
          placeholder="Enter kilometers"
          required
        />
      </div>

      <div>
        <label>Color</label>
        <select
          name="color"
          value={carData.color}
          onChange={handleChange}
          required
        >
          <option value="">Select color</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="silver">Silver</option>
          <option value="white">White</option>
          <option value="special blue">Special Blue</option>
          <option value="other">Other</option>
        </select>
      </div>

      {carData.color === 'other' && (
        <div>
          <label>Specify Color</label>
          <input
            type="text"
            name="otherColor"
            value={carData.otherColor}
            onChange={handleChange}
            placeholder="Enter color"
            required
          />
        </div>
      )}

      <div>
        <label>Image Link</label>
        <input
          type="text"
          name="imageUrl"
          value={carData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Discount</label>
        <input
          type="number"
          name="discount"
          value={carData.discount}
          onChange={handleChange}
          placeholder="Enter discount (%)"
        />
      </div>

      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;




