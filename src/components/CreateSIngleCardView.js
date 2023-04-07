import React from "react";
import CreateCardList from "./CreateCards";

const CreateSingleCard = ({singleDog, setSingleDog}) => {
    return(
        <div className="single-player-view">
            <div className="header-info">
                <p className="pup-title">{singleDog.name}</p>
                <p className="pup-number">{singleDog.id}</p>
            </div>
            <p>Team: {singleDog.teamId}</p>
            <p>Breed: {singleDog.breed}</p>
            <img className="single-player-view img" src={singleDog.imageUrl}/>
            <button onClick={() => setSingleDog({})}>Back to All Puppys</button>
        </div>
        )
}

export default CreateSingleCard