import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const DropDownMenu = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const [idValue, setIdValue] = useState('')
    const navigate= useNavigate();
    const options = [
        { label: 'People', value: 'people' },
        { label: 'Planets', value: 'planets' },
        { label: 'Films', value: 'films' },
        { label: 'Species', value: 'species' },
        { label: 'Vehicles', value: 'vehicles' },
        { label: 'Starships', value: 'starships' }
    ];

    const dropDownChange = (e) => {
        setSelectedValue(e.target.value)
    }

    const handleIdChange = (e) => {
        setIdValue(e.target.value)
    }

    const handleOnSubmit =(e) => {
        e.preventDefault();
        // ================================
        // not the best place to make an api call, try and call api as close to where you will utilize the data. This grabbed the api and stored a large amount of data that could be passed but not the most efficient way .
        // ================================
        // axios
        //     .get(`https://swapi.dev/api/${selectedValue}/${idValue}`)
        //     .then((response) => {
        //         console.log('This is a response for HandleOnSubmit', response);
        //     setApiData(response.data);
            navigate(`/details/${selectedValue}/${idValue}`);
        // setIdValue ("")
        // setSelectedValue ("")
        };
        // if (apiData?.error) {
        //     return (
        //         <div>
        //             {/* <video autoplay loop muted playsinline>
        //                 <source src="https://i.gifer.com/5lMw.gif" type="video/gif"/>
        //             </video>                     */}
        //             <h1>These aren't the DROIDS you're looking for</h1>
        //         </div>
        //     )
        // }else{

            return (
                <div className="container">
                    <form onSubmit={handleOnSubmit} className="form-inline">
                        <div className="form-group m-5">
                            <label className="mx-4" htmlFor="dropdownMenu">Search for:</label>
                            <select
                                className="form-control"
                                id="dropdownMenu"
                                value={selectedValue}
                                onChange={dropDownChange}
                            >
                                {options.map((option, idx) => (
                                    <option key={idx} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <label className='mx-4'>ID:</label>
                            <input className='form-control' value={idValue} type="text" onChange={handleIdChange} />
                            <button type='submit' className='btn btn-primary mx-4'>Search</button>
                        </div>
                    </form>
                </div>
            );  
        };

export default DropDownMenu