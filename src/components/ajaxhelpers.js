import React from "react";

const cohortName = '2303-ftb-et-web-fte-react';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const getPuppyList = async () => {
try {
    const response = await fetch(`${APIURL}/players`);
    const {succes, error, data: {players}} = await response.json();
    console.log(players);
    return players
}
catch (error) {
    console.error(error);
}
};

export const addNewPuppy = async ({name, id, imageUrl}) => {
    try {
        
        const response = await fetch(`${APIURL}/players`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, id, imageUrl})
        });
        const {succes, error, data: {newPlayer}} = await response.json();
        return newPlayer
    } catch (error) {
     console.error(error);   
    }
};

export const removePuppy = async (dogId) => {
    try {
        
        const response = await fetch(`${APIURL}/players/${dogId}`,
        {
            method: 'DELETE',
        });
        const {succes, error, data} = await response.json();
        return 
    } catch (error) {
     console.error(error);   
    }
};
