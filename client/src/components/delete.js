import React from 'react'
import axios from 'axios'

const Delete = ({id, onDeleteProp}) => {

    const deleteProduct = id => {
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res => onDeleteProp(id))
    } 

    return(
        <button onClick = { e => {deleteProduct(id)}}>Delete</button>
    )

}

export default Delete;