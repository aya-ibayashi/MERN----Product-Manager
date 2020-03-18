import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Main from "./views/main"
import ProductInfo from "./views/ProductInfo"
import UpdateProduct from "./views/updateProduct"


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <ProductInfo path="products/:id"/>
        <UpdateProduct path="products/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
