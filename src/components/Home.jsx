import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { DisplayCard } from "./DisplayCard";
import { LeftSideButton } from "./LeftSideButton";
import { DPadButtons } from "./DPadButtons";
import { InfoCard } from "./InfoCard";
import  Game  from "./Game";

const Home = () => {
    const [searchResult, setSearchResult] = useState({
        name: "",
        id: "",
        weight: "",
        height: "",
        imageUrl: ""
    });

    const handleSearch = (query) => {
      if (!query) {
        setSearchResult({
            name: "",
            id: "",
            weight: "",
            height: "",
            imageUrl: ""
        });
        return;
      }
  
      // Normalize the input for consistency
      const searchQuery = query.trim().toLowerCase();
  
      // Fetch the Pokemon data
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Pokemon not found");
          }
          return response.json();
        })
        .then((data) => {
          // Assuming you want to display the Pokemon's name
          setSearchResult({
            name: data.name,
            id: data.id,
            weight: data.weight,
            height: data.height,
            imageUrl: data.sprites.other.dream_world.front_default
          });
        })
        .catch((error) => {
          // Handle the case where the Pokemon is not found
          setSearchResult({
            name: "Pokemon not found",
            id: "",
            weight: "",
            height: "",
            imageUrl: ""
          });
        });

    }

    return (
        <div className="App">
        
          <div className="red-container left">
          <div className="search-bar-container">
          <SearchBar onEnter={handleSearch} />
          {searchResult.name && (
            <div>
              <h1>{searchResult.name}</h1>
              <p>Entry Number: {searchResult.id}</p>
              <img src={searchResult.imageUrl} alt={searchResult.name} ></img>
              <p>Weight: {searchResult.weight}</p>
              <p>Height: {searchResult.height}</p>
              </div>
          )}
          </div>
                  <DisplayCard/>
                  <LeftSideButton/>
                  <DPadButtons/>
               </div>
               <div className="red-container right">
                <InfoCard searchResult={searchResult}/>
                  </div>
          </div>
    );
}

export default Home;