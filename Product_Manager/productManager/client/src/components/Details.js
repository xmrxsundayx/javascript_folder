import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Details = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div className="container">
            <h2 className="my-5">{product.title} Details:</h2>
            <hr className="my-4"/>
            <div className="row">
                <div className="col-md-6">
                    <p><strong>Title:</strong> {product.title}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Description:</strong> {product.description}</p>
                </div>
            </div>
        </div>
    );
}
export default Details;