import React, { useState, useEffect} from "react"

const Characters = () => {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then( data => setCharacter(data.results))
    }, [])
    return (
        <>
       <div className="characters">
           {character.map(character => (
             <h2>{character.name}</h2>
           ))}
       </div>
         <div className="characters">
         {character.map(character => (
           <p>{character.status}</p>
         ))}
     </div>
     </>
    )
}

export default Characters