import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);


    useEffect(() =>{
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=807')")
        .then((response) =>{
            console.log("this is response from line 12",response)
            setPokemon(response.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
    console.log("-------------------------------",pokemon)

  return (
    <div>
        <h1>Axios Pokemon</h1>
        <ul>
            {pokemon.map((pokemonObj, index) =>{
                return (<li key={index}>{pokemonObj.name}</li>)
            })}
        </ul>
    </div>
  )
}

export default Pokemon