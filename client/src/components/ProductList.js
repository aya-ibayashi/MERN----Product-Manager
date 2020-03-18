import React, { useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'

const ProductList = ( props )  => {

    const { products } = props;
    const { removeFromDom } = props;

    const deleteProduct = (id) => {
        Axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res => {
                removeFromDom(id)
            })
    }


    return (
        <div>
            <h2>All Products:</h2>
            {products.map ((product) => 
                <p key={product._id}> 
                    <Link to={"/products/" + product._id}>{product.title}</Link> 
                    <button onClick = { e => {deleteProduct(product._id)}}>Delete</button>
                </p>
               )}
        </div>
    )
}

export default ProductList;