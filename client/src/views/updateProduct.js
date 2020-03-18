import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

export default ( props ) => {

    const [product, setProduct] = useState(null)

    useEffect( ()=>{
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(product => setProduct(product.data))
            .catch(err=>console.log(err));
    }, [])

        if (product == null){
            return "Loading..."
        }

    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/edit/" + props.id,
            product)
            .then(res=> navigate("/products/" + res.data._id));
    }

    return (

        <div>
            <form onSubmit={onSubmitHandler}> 
                <p>
                    <label>Title: </label>
                    <input name="title" value={product.title} onChange={onChangeHandler}/>
                </p>
                <p>
                    <label>Price: </label>
                    <input name="price" value={product.price} onChange={onChangeHandler}/>
                </p>
                <p>
                    <label>Description: </label>
                    <input name="description" value={product.description} onChange={onChangeHandler}/>
                </p>
                
                <button>Update</button>
            </form>
        </div>


    )



}