import React from "react";
import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {id, successCallBack} = props

    const deletePirate = () => {
        axios.delete(`http://localhost:8000/api/pirate/delete/${id}`)
        .then(res=>{console.log(res.data)})
        successCallBack();
    }

    return (
        <div>
            <button onClick={deletePirate} >Walk the Plank</button>
            </div>
        
    )
}