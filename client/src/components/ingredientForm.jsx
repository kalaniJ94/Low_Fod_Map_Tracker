import React, { useState } from 'react';

const IngredientForm = () => {
  const [name, setName] = useState('');
  const [lowFodmapAmount, setLowFodmapAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to save the ingredient to the database
    console.log('Ingredient submitted:', name, lowFodmapAmount);
    // Reset form fields
    setName('');
    setLowFodmapAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Low-FODMAP Amount:
        <input
          type="text"
          value={lowFodmapAmount}
          onChange={(e) => setLowFodmapAmount(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default IngredientForm;
