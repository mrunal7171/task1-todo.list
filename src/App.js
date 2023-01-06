import react, { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {

    if (!newItem) {
      alert("Enter an item.");
      return;
    }
    
    const item = {
      id:Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>꧁•⊹٭𝚃𝚘𝙳𝚘 𝙻𝚒𝚜𝚝٭⊹•꧂</h1>
    <input
      type="text"
      placeholder='Add an item...'
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
    />
      

      <button onClick={() => addItem ()}>Add</button>

      <ol>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>❌</button> </li>
          )
        })}
      </ol>

    </div>
  );
}

export default App;
