import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeletePirate from "./DeletePirate.jsx"


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [pirate, setPirate] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate')
            .then(res => setPirate(res.data))
            .catch(err => console.log('Error', err))
    }, [updated])

    const removeFromDom = (PokemonId) => {
        setPirate(pirate.filter(pirate => pirate._id !== PokemonId));
        setUpdated(!updated);
    }

    pirate.sort(function(a,b){
        if (a.name.toLowerCase() < b.name.toLowerCase()
            ) return-1;
        if (a.name.toLowerCase() > b.name.toLowerCase()
            ) return 1;
        return 0;
    })

    return (
        <>
            {pirate.map((pirate, id) => {
                return (
                    <div key={id}>
                        <div>
                        <img  className ="photo" src={pirate.image}/>
                        </div>
                        <h3>{pirate.name}</h3>
                        <h6><Link to={`/pirate/${pirate._id}`}>View Pirate</Link>
                        <br></br>
                            <DeletePirate id={pirate._id} successCallBack={removeFromDom}></DeletePirate></h6>
                    </div>
                )
            }
            )}
        </>
    )
}

