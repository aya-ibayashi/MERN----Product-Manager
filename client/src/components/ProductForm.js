import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [formState, setFormState] = useState({
        title: "",
        price: "",
        description:"",
    });

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products/create',{
            title: formState.title,
            price: formState.price,
            description: formState.description
        })
            .then(res=> console.log(res))
            .catch(err=>console.log(err))
        
    }


    return (
        <>
            <h3>Product Manager</h3>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <input name="title" value={formState.title} onChange = {onChangeHandler}></input>
                </p>
                <p>
                    <label>Price</label>
                    <input name="price" value={formState.price} onChange = {onChangeHandler}></input>
                </p>
                <p>
                    <label>Description</label>
                    <input name="description" value={formState.description} onChange = {onChangeHandler}></input>
                </p>

                <button>Submit</button>

            </form>
        </>



    )





}