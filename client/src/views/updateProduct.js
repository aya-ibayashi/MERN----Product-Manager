import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'
import Form from '../components/form'

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

    const onSubmitProp = (res) => {
        navigate("/products/" + res.data._id)
    }

    return (
        <div>
            <Form initialState={product}
            method = "put"
            url = {"http://localhost:8000/api/products/edit/" + props.id}
            onSubmitProp = {onSubmitProp}/>
        </div>

    )



}