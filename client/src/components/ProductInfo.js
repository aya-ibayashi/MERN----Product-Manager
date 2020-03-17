import React,{useEffect, useState} from 'react';
import axios from 'axios'

export default (props) => {

    const [product, setProduct] = useState({});

    useEffect (() =>{
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res=>setProduct({
                ...res.data
            }))
    }, [])

    return (
        <>
            <h3>{product.title}</h3>
            <h4>Price: {product.price}</h4>
            <h4>Description: {product.description}</h4>
        </>

    )


}
