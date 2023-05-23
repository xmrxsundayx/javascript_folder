import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const EditAuthor = () => {
    const [authorName, setAuthorName] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then(res => {
                console.log(res)
                setAuthorName(res.data.authorName);
            })
            .catch(err => console.log(err))
    }, [])
    const editAuthorHandler = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:8000/api/author/edit/" + id, {
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
            <h1>Edit this Author:</h1>
            <form className='border col -6 form-group' onSubmit={editAuthorHandler}>
                <p>
                    <label className='form-label'>Author Name:</label> {errors.authorName ?
                        <h3>{errors.authorName.message}</h3>
                        : ""}<br />
                    <input className='form-control' type="text" onChange={(e) => setAuthorName(e.target.value)} value={authorName} />
                </p>
                <input className='btn btn-primary' type="submit" value="Edit Author" />
                <button class="btn btn-primary" ><Link className='text-decoration-none text-white' to="/">Cancel</Link></button>
            </form>
        </div>
    )
}

export default EditAuthor