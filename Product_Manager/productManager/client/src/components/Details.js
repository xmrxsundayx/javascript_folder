import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
const Details = (props) => {
    const [productDets, setProductDets] = useState({})
    const navigate = useNavigate();
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProductDets(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteProduct = () =>{
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                navigate('/home')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h2 className="my-5">{productDets.title} Details:</h2>
            <hr className="my-4"/>
            <div className="row">
                <div className="col-md-6">
                    <p><strong>Title:</strong> {productDets.title}</p>
                    <p><strong>Price:</strong> {productDets.price}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Description:</strong> {productDets.description}</p>
                </div>
                <button className="m-2 btn btn-primary" onClick={(e)=>{deleteProduct(productDets._id)}}>
                            Delete
                        </button>
            </div>
        </div>
    );
}
export default Details;