import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const AddNewAuthor = () => {
    const [authorName, setAuthorName] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const addAuthorHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author/new", {
            authorName
        })
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div className='m-3'>
            <Link to="/">Home</Link>
            <h1>Add a New Author:</h1>
            <form className='border col -6 form-group' onSubmit={addAuthorHandler}>
                <p>
                    <label className='form-label'>Author Name:</label> {errors.authorName ?
                        <h3>{errors.authorName.message}</h3>
                        : ""}<br />
                    <input className='form-control' type="text" onChange={(e) => setAuthorName(e.target.value)} />
                </p>
                <input className='btn btn-primary' type="submit" value="Add Author" />
                <button class="btn btn-primary" ><Link className='text-decoration-none text-white' to="/">Cancel</Link></button>
            </form>
        </div>
    )
}

export default AddNewAuthor;