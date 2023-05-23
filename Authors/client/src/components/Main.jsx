import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Main = () => {
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(() => {
                setAuthor(author.filter((author) => author._id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container">
            <Link to="/author/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {author.map((eachAuthor) => (
                        <tr key={eachAuthor._id}>
                            <td>{eachAuthor.authorName}</td>
                            <td>
                                <Link to={`/author/edit/${eachAuthor._id}`}>Edit</Link>
                                <button  onClick={() => handleDelete(eachAuthor._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Main;