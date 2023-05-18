import React, {useEffect, useState} from 'react'
import axios from 'axios';
import{useNavigate, useParams} from 'react-router-dom';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {
    const {id} = useParams();
    const [ product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {

                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = productParam => {
        axios.patch('http://localhost:8000/api/product/' + id, productParam
        )
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Update</h1>
        {
        loaded && (
            <>
        <ProductForm 
        onSubmitProp= {updateProduct} 
        initialTitle={product.title} 
        initialPrice={product.price} 
        initialDescription={product.description}/>
        <DeleteButton productId = {product._id} successCallback={
            ()=>navigate('/')} />
        </>
        )}
    </div>
  )
}

export default Update