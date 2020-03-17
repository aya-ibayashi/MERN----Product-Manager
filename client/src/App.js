import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Main from "./views/main"
import ProductInfo from "./components/ProductInfo"


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <ProductInfo path="products/:id"/>
      </Router>
    </div>
  );
}

export default App;
