
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';

function App() {
  return (
    
   
      <Routes>
        <Route path="/"  element={<Products/>} />
        <Route path="/product/:id"  element={<Product/>} />
      </Routes>
    
  );
}

export default App;
