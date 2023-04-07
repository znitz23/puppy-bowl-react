import React, {useState} from "react";
import { addNewPuppy } from "./ajaxhelpers";

const Form = (props) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const {dogs, setDogs} = props;

    const handleSubmit = () => {
        event.preventDefault();
        setDogs([...dogs, {id: id, name: name, imageUrl: url}])
        setId('');
        setName('');
        setUrl('');
        addNewPuppy({id: id, name: name, imageUrl: url});
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>id: </label>
                <input 
                type="text" 
                value={id} 
                onChange={(event) => setId(event.target.value)} 
                required
                ></input>
            </div>
            <div>
                <label>Name: </label>
                <input 
                type="text" 
                value={name} 
                onChange={(event) => setName(event.target.value)} 
                required
                ></input>
            </div>
            <div>
                <label>Photo URL: </label>
                <input t
                ype="text" 
                value={url} 
                onChange={(event) => setUrl(event.target.value)} 
                required
                ></input>
            </div>
            <button type='submit'>Add User</button>
        </form>
)}

export default Form;