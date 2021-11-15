import React, { useState} from "react"
import axios from "axios"
import AddPirate from "./AddPirate"
import {useHistory, useParams} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const {id} = useParams();
    const [pirate, setPirate] = useState([]);
    const [errors, setErrors] = useState({});

    
    const createPirate = (pirate) => {
        axios.post(`http://localhost:8000/api/pirate/new`, pirate)
        .then(res => {
            console.log(res.data)
            if (res.data.errors){
            setErrors(res.data.errors)}
        })
        .catch(err=>{console.log(err)})
    }

    return(
        <div>
            <h1>Add Pirate</h1>
            <AddPirate onSubmitProp={createPirate} errors={errors} initialName={''} initialImage={''} initialChest={''} initialCatchphrase={''} initialPosition={''}  initialButton={'Create'}></AddPirate>
        </div>
        
    )
}