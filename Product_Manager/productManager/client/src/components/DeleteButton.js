import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { productId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="m-2 btn btn-primary" onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;