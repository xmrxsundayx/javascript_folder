import React, {useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const MainView = (props) =>{
    const [product, setProduct] = useState([]);
    return (
        <div>
            <ProductForm product = {product} setProduct = {setProduct}/>
            <hr/>
            <ProductList product = {product} setProduct = {setProduct}/>
        </div>
    )
}
export default MainView;