import React, {useState} from 'react'

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const[ title, setTitle] = useState(initialTitle);
    const[price, setPrice] = useState(initialPrice);
    const[description, setDescription] = useState(initialDescription);

    const onSubmitHandler  = (e) =>{
        e.preventDefault();
        onSubmitProp({ title, price, description})
        }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label className='form-label'>Title:</label><br/>
                <input  type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label className='form-label'>Price:</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label className='form-label'>Description:</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input className="m-2 btn btn-primary" type="submit"/>
        </form>
    )
}
export default ProductForm;