import React from 'react';

const Form = ({ formData, handleFormChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Vardas:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleFormChange} 
        />
      </div>
      <div>
        <label htmlFor="age">Amžius:</label>
        <input 
          type="number" 
          id="age" 
          name="age" 
          value={formData.age} 
          onChange={handleFormChange} 
        />
      </div>
      <div>
        <label htmlFor="isStudent">Ar studentas:</label>
        <input 
          type="checkbox" 
          id="isStudent" 
          name="isStudent" 
          checked={formData.isStudent} 
          onChange={handleFormChange} 
        />
      </div>
      <button type="submit">Pateikti</button>
    </form>
  );
};

export default Form;

