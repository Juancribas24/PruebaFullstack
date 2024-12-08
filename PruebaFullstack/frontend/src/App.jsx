import React, { useState, useEffect } from 'react';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import EditItem from './components/EditItem';
import { getItems } from './services/api';
import './App.css';

const App = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [items, setItems] = useState([]);

  const refreshItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    refreshItems();
  }, []);

  return (
    <div className="app-container">
      <h1>Prueba Fullstack Juan Rivas</h1>
      {currentItem ? (
        <EditItem
          currentItem={currentItem}
          refreshItems={refreshItems}
          cancelEdit={() => setCurrentItem(null)}
        />
      ) : (
        <CreateItem refreshItems={refreshItems} />
      )}
      <ItemList items={items} setCurrentItem={setCurrentItem} refreshItems={refreshItems} />
    </div>
  );
};

export default App;
