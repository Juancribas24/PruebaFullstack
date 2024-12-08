import React from 'react';
import { deleteItem } from '../services/api';

const ItemList = ({ items, setCurrentItem, refreshItems }) => {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      refreshItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item">
          <span>{item.name}</span>
          <div>
            <button className="edit-btn" onClick={() => setCurrentItem(item)}>
              Editar
            </button>
            <button className="delete-btn" onClick={() => handleDelete(item.id)}>
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
