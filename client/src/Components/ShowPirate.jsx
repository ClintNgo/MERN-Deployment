import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { id } = useParams();
    const [pirate, setPirate] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.log('Error', err))
    }, [id]);

    return (
        <>
            <div>
                <img className="photo" src={pirate.image}></img>
                <h1>{pirate.name}</h1>
                <p>{pirate.catchphrase}</p>
                <h2>About</h2>
                <p>Position {pirate.position}</p>
                <p>Treasure Chest:{pirate.chest}</p>
            </div>
        </>
    )
}