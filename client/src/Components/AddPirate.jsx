import React, { useState } from 'react';
import { useHistory} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { initialName, initialImage, initialButton, initialChest, initialCatchphrase, initialPosition, errors, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [image, setImage] = useState(initialImage);
    const [chest, setChest] = useState(initialChest);
    const [catchphrase, setCatchphrase] = useState(initialCatchphrase);
    const [position, setPosition] = useState(initialPosition);
    const [button, setButton] = useState(initialButton);
    const [nameError,setNameError] = useState('');
    const [imageError,setImageError] = useState('');
    const [chestError,setChestError] = useState('');
    const [catchphraseError,setCatchphraseError] = useState('');
    const [positionError,setPositionError] = useState('');
    const history = useHistory();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name,image,chest,catchphrase,position});
    }

    const handleName = (e) => {
        console.log(setName)
        setName(e.target.value)
        if(e.target.value.length >=1){
            setNameError("")
        }
        else{
            setNameError("Name Field cannot be empty!")
        }
    }

    const handleImage = (e) => {
        setImage(e.target.value)
        if(e.target.value.length >=1){
            setImageError("")
        }
        else{
            setImageError("Image Field cannot be empty!")
        }
    }

    const handleChest = (e) => {
        setChest(e.target.value)
        if(e.target.value.length >=1){
            setChestError("")
        }
        else{
            setChestError("Chest Field cannot be empty!")
        }
    }

    const handleCatchphrase = (e) => {
        setCatchphrase(e.target.value)
        if(e.target.value.length >=1){
            setCatchphraseError("")
        }
        else{
            setCatchphraseError("Catchphrase Field cannot be empty!")
        }
    }

    const handlePosition = (e) => {
        setPosition(e.target.value)
        if(e.target.value.length >=1){
            setPositionError("")
        }
        else{
            setPositionError("Position Field cannot be empty!")
        }
    }

    const home = (e) => {
        e.preventDefault();
        history.push('/')
    }
    
    return (
        <>
        <button onClick={home}>Crew Board</button>
            <form onSubmit={onSubmitHandler}>
                <p style={{ color: 'red' }}>{errors.name?.message}</p>
                <p style={{ color: 'red' }}>{nameError}</p>
                <p>
                    <label>Pirate name</label><br />
                    <input type="text" name="name" onChange={(e) => {handleName(e)}} value={name} />
                </p>
                <p style={{ color: 'red' }}>{errors.image?.message}</p>
                <p style={{ color: 'red' }}>{imageError}</p>
                <p>
                    <label>Image URL</label><br/>
                    <input type="text" name="image" onChange={(e) => {handleImage(e)}} value={image} />
                </p>
                <p style={{ color: 'red' }}>{errors.chest?.message}</p>
                <p style={{ color: 'red' }}>{chestError}</p>
                <p>
                    <label># of Treasure Chest</label><br />
                    <input type="number" name="chest" onChange={(e) => {handleChest(e)}} value={chest} />
                </p>
                <p style={{ color: 'red' }}>{errors.catchphrase?.message}</p>
                <p style={{ color: 'red' }}>{catchphraseError}</p>
                <p>
                    <label>Pirate Catch Phrase</label><br />
                    <input type="text" name="catchphrase" onChange={(e) => {handleCatchphrase(e)}} value={catchphrase} />
                </p>
                <p style={{ color: 'red' }}>{errors.position?.message}</p>
                <p style={{ color: 'red' }}>{positionError}</p>
                <p>
                    <label>Crew Position</label><br />
                    <select name ='position' value= {position} onChange={(e) => {handlePosition(e)}}>
                    <option value= "Select Category" selected hidden behind></option>
                    <option value='Captain'>Captain</option>
                    <option value='First Mate'>First Mate</option>
                    <option value='Quarter Master'>Quarter Master</option>
                    <option value='Boat Swain'>Boat Swain</option>
                    <option value='Powder Monkey'>Powder Monkey</option>
                    </select>
                </p>
                    <input type="submit" value={button} />
            </form>
            <br></br>
        </>
    )
}
