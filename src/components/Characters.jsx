import React, { useState, useEffect, useReducer, useMemo } from "react"

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action ) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      default:
        return state;
  }
}

const Characters = () => {
    const [character, setCharacter] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSetSearch] = useState('')

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then( data => setCharacter(data.results))
    }, [])

    const handleClick = favorite => {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: favorites })
    }

    return (
    <>
       <div className="characters">
         {favorites.favorites.map(favorites =>(
           <li key={favorites.id}>{favorites.name}</li>
         ))}
           {character.map(character => (
             <div className="item" key={character.id }>
               <h2>{character.name}</h2>
               <button type='button' onClick={() => handleClick(character)}>Agregar a Favoritos</button>
             </div>
           ))}
       </div>
       </>
    )
}

export default Characters