import { useState } from 'react'; 

function Manage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [items, setItems] = useState([
    { id: 1, name: 'blender', price: '$29.99', category: 'kitchen' },
    { id: 2, name: 'toaster', price: '$19.99', category: 'kitchen' },
    { id: 3, name: 'lamp', price: '$499.99', category: 'living room' }
  ]);

  const handleAdd = (event) => {
    event.preventDefault();
    const id = items.length + 1;
    const newItem = { id: id, name: name, price: price, category: category };
    const itemsUpdated = [...items, newItem];
    setItems(itemsUpdated);
  }

  const handleDelete = (id) => {
    const itemsUpdated = items.filter(item => item.id !== id);
    setItems(itemsUpdated);
  }
  
  return (
    <>
      <h2>Current Items</h2>
      { items.map((item) => (
        <div key={item.id}>
          { item.name } . . . { item.price } . . . { item.category} . . . 
          <button onClick={() => handleDelete(item.id) }>Delete</button>
        </div>
      ))}<br />
      <h2>Add New Item</h2>
      <form onSubmit={handleAdd}>
        Item Name: 
        <input 
          type="text"
          onChange={(event) => setName(event.target.value)} 
          value={name}
          /><br /><br />
        Item Price:
        <input 
          type="text" 
          onChange={(event) => setPrice(event.target.value)} 
          value={price}
          /><br /><br />
        Item Category:
        <input 
          type="text" 
          onChange={(event) => setCategory(event.target.value)} 
          value={category}
          /><br /><br />
        <button type="submit">Create Item</button>
      </form>
    </>
  );
}
  
export default Manage;
