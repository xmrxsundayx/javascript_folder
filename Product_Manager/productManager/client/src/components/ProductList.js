import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [product, setProduct] = useState([])
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
    const removeFromDom = (productId) =>{
        setProduct(product.filter(product => product._id !== productId))
            }

    return (
        <div className="row">
            <div className="col-md-12">
                <h2>All Products:</h2>
            </div>
            {
                product.map((product, index)=>{
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">{product.title}</h4>
                                <p className="card-text">Price: {product.price}</p>
                                <Link to={`/product/${product._id}`} className="m-2 btn btn-primary">View Details</Link>
                                <Link to={"/product/edit/" + product._id}  className="m-2 btn btn-primary">Edit</Link>
                                <DeleteButton productId = {product._id} successCallback={
                                    ()=>removeFromDom(product._id)
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