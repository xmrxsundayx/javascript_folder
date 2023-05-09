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
        <div className="row">
            <div className="col-md-12">
                <h2>All Products:</h2>
                <hr className="my-4"/>
            </div>
            {
                product.map((product, index)=>{
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">{product.title}</h4>
                                <p className="card-text">Price: {product.price}</p>
                                <Link to={`/product/${product._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </div>
    )
}
export default ProductList;