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
            setProductsList(res);
            setLoaded(true);
            console.log(res)})
        .catch(err=>console.log(err))
    }, [])


    return (

        <>
            <ProductForm/>
            <hr/>
            {loaded && <ProductsList products = {productsList}/>}
        </>


    )

}

export default Main;
