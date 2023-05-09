import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const {product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div>
            <h1>All Products:</h1>
            <p>-----------------------------------------------</p>
            {
                product.map((product, index)=>{
                return <div key={index}>

                    <Link to={`/product/${product._id}`}>{product.title}'s Page!</Link>
                    </div>
                })
            }
        </div>
    )
}
export default ProductList;