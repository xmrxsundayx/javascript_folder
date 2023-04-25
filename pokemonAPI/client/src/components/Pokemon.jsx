import React, {useEffect, useState} from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807')")
        .then(response => response.json())
        .then(response =>setPokemon(response.results))
    }, []);

  return (
    <div>
        <h1>Pokemon</h1>
        <ul>
            {pokemon.map((pokemon, index) =>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
        </ul>
    </div>
  )
}

export default Pokemon