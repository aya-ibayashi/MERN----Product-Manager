import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from "../components/form";

export default ( ) => {

    const initialState = {
        title: "",
        price: "",
        description:"",
    };

    const onSubmitProp = (res) => {
        navigate("/products/" + res.data._id)
    }

    return (
        <>
            <h3>Product Manager</h3>
            <Form initialState = {initialState}
                method = "post"
                url = "http://localhost:8000/api/products/create"
                onSubmitProp = {onSubmitProp}/>
        </>



    )





}