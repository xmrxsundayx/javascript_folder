import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {

    const {product, removeFromDom} = props


    return (
        <div className="row">
            <div className="col-md-12">
                <h2>All Products:</h2>
            </div>
            {
                product.map((newProduct, index)=>{
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">{newProduct.title}</h4>
                                <p className="card-text">Price: {newProduct.price}</p>
                                <Link to={`/product/${newProduct._id}`} className="m-2 btn btn-primary">View Details</Link>
                                <Link to={"/product/edit/" + newProduct._id}  className="m-2 btn btn-primary">Edit</Link>
                                <DeleteButton  productId = {newProduct._id} successCallback={
                                    ()=>removeFromDom(newProduct._id)
                                } />
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