import React, {useState} from "react";
import { removePuppy } from "./ajaxhelpers";



const CreateCard = ({dog, dogs, setSingleDog, setDogs}) => {
    const handleSubmitDelete = () => {
        setDogs(dogs.filter((thisDog) => dog.id !== thisDog.id));
        removePuppy(dog.id);
    }
    return(
        <div className="single-player-card">
                <p>{dog.name}</p>
                <p>{dog.id}</p>
            <img className="single-player-card img" src={dog.imageUrl}/>
            <button onClick={() => {setSingleDog(dog)}}>See Details</button>
            <button onClick={handleSubmitDelete}>Remove Puppy</button>
            </div>
        )
}

const CreateCardList = ({dogs, setDogs, singleDog, setSingleDog, players}) => {
    return (
        dogs.map((dog) => {
            return (
                    <CreateCard key={dog.id} dog={dog} dogs={dogs} setDogs={setDogs} singleDog={singleDog} setSingleDog={setSingleDog}/>
            )
        }
        )
        )
}

export default CreateCardList