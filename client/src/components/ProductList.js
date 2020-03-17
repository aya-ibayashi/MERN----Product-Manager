import React, { useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'

const ProductList = ({products})  => {


    return (
        <div>
            <h2>All Products:</h2>
            <ul>
            {products.data.map ((product) => 
                <li key={product._id}> <Link to={"/products/" + product._id}>{product.title}</Link> </li>
               )}
            </ul>
        </div>
    )
}

export default ProductList;