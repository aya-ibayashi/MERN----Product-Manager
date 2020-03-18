import React, { useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

function Form ({initialState, method, url, onSubmitProp }) {

    const [formState, setFormState] = useState(initialState);
       
    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setFormState({
            ...formState,
            [name] : value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios({
            method,
            url,
            data: formState
        })
            .then(response => onSubmitProp(response))
    }


    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <input name="title" value={formState.title} onChange = {onChangeHandler}></input>
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" name="price" value={formState.price} onChange = {onChangeHandler}></input>
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

export default Form;