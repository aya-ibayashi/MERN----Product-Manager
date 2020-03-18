import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import Delete from '../components/delete'

export default (props) => {

    const [product, setProduct] = useState({});

    useEffect (() =>{
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res=>setProduct({
                ...res.data}))
    }, [])

    const onDeleteProp = () => {
        navigate("/products") 
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
            <Delete id = {props.id} onDeleteProp = {onDeleteProp}/>
        </>

    )


}
