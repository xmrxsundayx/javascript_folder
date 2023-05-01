import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ApiDetails = () => {
    const [apiData, setApiData] = useState('')
    const { selectedValue, id } = useParams();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${selectedValue}/${id}`)
            .then((response) => {
                console.log("this is the api details response",response.data)
                setApiData(response.data);
                setLoaded(true)
            })
            .catch((err) => {
                console.log(err);
                setApiData({ error: true });
            })
    }, [id,selectedValue]);
        return (
            <div>
                    {apiData.error &&(
            <div>
                <img src="https://i.imgur.com/KyPXMl7.png" alt="Obi-Wan Kenobi" />
                <h1>These aren't the droids you're looking for</h1>
            </div>
    )}

            {loaded?
            <div>
                <h1>{apiData.name}</h1>
                {selectedValue === "people" && (
                    <>
                        <p>Height: {apiData.height }</p>
                        <p>Mass: { apiData.mass}</p>
                        <p>Gender: {apiData.gender}</p>
                    </>
                )}
                {selectedValue === "planets" && (
                    <>
                        <p>Climate: {apiData.climate}</p>
                        <p>Terrain: { apiData.terrain}</p>
                        <p>Population: {apiData.population}</p>
                    </>
                )}
                {selectedValue === "films" && (
                    <>
                        <p>Director: {apiData.director}</p>
                        <p>Release Date: {apiData.release_date}</p>
                        <p>Opening Crawl: { apiData.opening_crawl}</p>
                    </>
                )}
                {selectedValue === "species" && (
                    <>
                        <p>Classification: {apiData.classification}</p>
                        <p>Average Height: {apiData.average_height}</p>
                        <p>Average Lifespan: {apiData.average_lifespan}</p>
                    </>
                )}
                {selectedValue === "vehicles" && (
                    <>
                        <p>Model: {apiData.model}</p>
                        <p>Manufacturer: {apiData.manufacturer}</p>
                        <p>Cost in Credits: {apiData.cost_in_credits}</p>
                    </>
                )}
                {selectedValue === "starships" && (
                    <>
                        <p>Model: {apiData.model}</p>
                        <p>Manufacturer: {apiData.manufacturer}</p>
                        <p>Crew: {apiData.crew}</p>
                    </>
                )}
            </div>
            :null}
        </div>
        )
    }

export default ApiDetails;