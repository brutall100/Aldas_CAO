import React, { useState } from 'react';
import './CarForm.css'; // Import CSS file

const CarForm = ({ addCar }) => {
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    engineType: 'petrol',
    basePrice: '0',
    km: '0',
    color: 'black',
    otherColor: '',
    imageUrl: '',
    discount: '0'
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
      color: 'black',
      otherColor: '',
      imageUrl: '',
      discount: ''
    });
  };

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={carData.brand}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Model</label>
        <input
          type="text"
          name="model"
          value={carData.model}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Engine Type</label>
        <select
          name="engineType"
          value={carData.engineType}
          onChange={handleChange}
          required
          className="form-select"
        >
          <option value="">Select engine type</option>
          <option value="electric">Electric</option>
          <option value="diesel">Diesel</option>
          <option value="petrol">Petrol</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <div className="form-group">
        <label>Base Price</label>
        <input
          type="number"
          name="basePrice"
          value={carData.basePrice}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Kilometers (km)</label>
        <input
          type="number"
          name="km"
          value={carData.km}
          onChange={handleChange}
          placeholder="Enter kilometers"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Color</label>
        <select
          name="color"
          value={carData.color}
          onChange={handleChange}
          required
          className="form-select"
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
        <div className="form-group">
          <label>Specify Color</label>
          <input
            type="text"
            name="otherColor"
            value={carData.otherColor}
            onChange={handleChange}
            placeholder="Enter color"
            required
            className="form-input"
          />
        </div>
      )}

      <div className="form-group">
        <label>Image Link</label>
        <input
          type="text"
          name="imageUrl"
          value={carData.imageUrl || 'https://via.placeholder.com/150'}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Discount</label>
        <input
          type="number"
          name="discount"
          value={carData.discount}
          onChange={handleChange}
          placeholder="Enter discount (%)"
          className="form-input"
        />
      </div>

      <button type="submit" className="form-button">Add Car</button>
    </form>
  );
};

export default CarForm;





