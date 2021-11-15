import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pirate from '../Components/Pirate.jsx'
import { Link, useParams } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const {id} = useParams();
    const message = ('Pirate Crew');
    const [loaded, setLoaded] = useState(false);
    const [pirate, setPirate] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
            });
            }, [id]);

        return (
            <div>
                <div>
                <h2>{message}</h2>
                <Link to={`/pirate/newpirate`}>
                    Add Pirate
                </Link>
                <br></br>
                </div>
                <div>
                {loaded && <Pirate pirate={pirate}></Pirate>}
                </div>
            </div>
        )
    }

