import React, { useState } from 'react';
import { updateItem } from '../services/api';

const EditItem = ({ currentItem, refreshItems, cancelEdit }) => {
  const [name, setName] = useState(currentItem.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateItem(currentItem.id, { name });
      refreshItems();
      cancelEdit();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="input"
      />
      <button type="submit" className="button">
        Guardar
      </button>
      <button type="button" onClick={cancelEdit} className="button cancel">
        Cancelar
      </button>
    </form>
  );
};

export default EditItem;
