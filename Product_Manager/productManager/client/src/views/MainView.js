import React, {useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const MainView = (props) =>{
    const [product, setProduct] = useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    return (
        <div className='container'>
            <h1 className='my-5'>Product Inventory</h1>
            <ProductForm product = {product} setProduct = {setProduct}/>
            <hr/>
            <ProductList product = {product} setProduct = {setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default MainView;