import React, { useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import Delete from '../components/delete'

const ProductList = ( props )  => {

    const { products } = props;
    const { removeFromDom } = props;

    return (
        <div>
            <h2>All Products:</h2>
            {products.map ((product) => 
                <p key={product._id}> 
                    <Link to={"/products/" + product._id}>{product.title}</Link> 
                    <Delete id={product._id} onDeleteProp = {removeFromDom}/>
                </p>
               )}
        </div>
    )
}

export default ProductList;