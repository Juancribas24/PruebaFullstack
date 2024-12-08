import React, { useState } from 'react';
import { addItem } from '../services/api';

const CreateItem = ({ refreshItems }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addItem({ name });
      setName('');
      refreshItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nombre del elemento"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="input"
      />
      <button type="submit" className="button">
        Agregar
      </button>
    </form>
  );
};

export default CreateItem;
