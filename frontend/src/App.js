import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Seven Cells</h1>
        <p>Renew Your Body, Cell by Cell</p>
      </header>
      <section>
        <h2>Our Wellness Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.category} - ${product.price}</p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;