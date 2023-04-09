import React, {useState, useEffect} from 'react';
import CreateCardList from './CreateCards';
import CreateSingleCard from './CreateSIngleCardView';
import Form from './Form';
import { getPuppyList } from './ajaxhelpers';
// import SearchBar from './filterByName';


// const handleSearchSubmit = (value) => {
    //         return   (
        
        //     )
        // }


        // const SearchBar = () => {
//     return (
//         <>
//         <label>Search By Name </label>
//         <input type='text' value={Search Term} required></input>
//         {/* <button onSubmit={handleSearchSubmit} */}
//         ></button>
//     </>
//         )
// }
const searchDogs = (listOfPuppys, searchTerm) => {
return listOfPuppys.filter(puppy => puppy.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

const PuppyList = () => { 
    const [dogs, setDogs] = useState([]);
    const [singleDog, setSingleDog] = useState({});

    useEffect(() => {
       const fetchPuppys = async () => {
           const players = await getPuppyList();
           
            const searchedPuppy = searchDogs(players, 'bert' )
            console.log(searchedPuppy)
        setDogs(players)
    };
    fetchPuppys()
    
    
}, [])

return ( 
    <>
        <div id="new-player-form">
            
        </div>
        <Form dogs={dogs} setDogs={setDogs}/>
        {/* <SearchBar /> */}
        <div id="all-players-container">
            {singleDog.id ? (
                <CreateSingleCard 
                singleDog={singleDog}
            setSingleDog={setSingleDog}
            />
            ) : (
            <CreateCardList dogs={dogs} setDogs={setDogs} singleDog={singleDog} setSingleDog={setSingleDog}/>)}
        </div>
        
    </>
     )}

export default PuppyList
