import React, {useEffect, useState } from 'react';
import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductList";
import axios from 'axios';



const Main = () => {

    const [productsList, setProductsList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect (()=>{
    axios.get("http://localhost:8000/api/products")
        .then(res=>{
            setProductsList(res.data);
            setLoaded(true);
            console.log(res)})
        .catch(err=>console.log(err))
    }, [])

    const removeFromDom = (id) => {
        setProductsList(productsList.filter(product => product._id !== id));
    }


    return (
        <>
            <ProductForm/>
            <hr/>
            {loaded && <ProductsList removeFromDom = {removeFromDom} products = {productsList}/>}
        </>
    )

}

export default Main;
