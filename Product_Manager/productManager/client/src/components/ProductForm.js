import React, {useState} from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp, errors} = props;
    const[ title, setTitle] = useState(initialTitle);
    const[price, setPrice] = useState(initialPrice);
    const[description, setDescription] = useState(initialDescription);
    
    const navigate = useNavigate()

    const onSubmitHandler  = (e) =>{
        e.preventDefault();
        console.log(onSubmitProp)
        onSubmitProp({ title, price, description})
        setTitle('');
        setPrice('');
        setDescription('');
        navigate("/home");
        }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label className='form-label'>Title:</label><br/>
                {
                    errors.title ? 
                    <h3>{errors.title.message}</h3>:""
                }
                <input  type="text" name='title' value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label className='form-label'>Price:</label><br/>
                <input type="text" name='price' value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label className='form-label'>Description:</label><br/>
                <input type="text" name='description' value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input className="m-2 btn btn-primary" type="submit"/>
        </form>
    )
}
export default ProductForm;