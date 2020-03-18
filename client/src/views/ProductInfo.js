import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { Link, navigate } from '@reach/router'

export default (props) => {

    const [product, setProduct] = useState({});

    useEffect (() =>{
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res=>setProduct({
                ...res.data}))
    }, [])

    const deleteProduct = (e) => {
        axios.delete("http://localhost:8000/api/products/delete/" + props.id)
            .then(res => navigate("/products") )
            .catch(err=>console.log("err"))
        
    }

    return (
        <>
            <h3>{product.title}</h3>
            <h4>Price: {product.price}</h4>
            <h4>Description: {product.description}</h4>
            <Link to={"/products/edit/" + product._id}>Update</Link>{" "}
            <br/>
            <Link to="/products">Return to list</Link>
            <br/>
            <button onClick = {deleteProduct}>Delete</button>
        </>

    )


}
