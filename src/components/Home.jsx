import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { DisplayCard } from "./DisplayCard";
import { LeftSideButton } from "./LeftSideButton";
import { DPadButtons } from "./DPadButtons";
import { InfoCard } from "./InfoCard";
import { useSelector, useDispatch, connect } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from '../features/dataSlice.js'

const Home = () => {

  // LOADING SCREEN
  const [loading, setLoading] = useState(false);


  // Will trigger loading on first render of the page.
  useEffect(() => {
    setLoading(true)
    // IF USING API, could use fetch here and when getting a response from the server would remove the loading.
    // For testing/demonstration purposes, manually setting a load time using setTimeout.
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

    const [searchResult, setSearchResult] = useState('');

    const dispatch = useDispatch()

    const handleSearch = (query) => {
      if (!query) {
        setSearchResult({
            name: "",
            id: "",
            weight: "",
            height: "",
            imageUrl: ""
        });
        console.log("handlesearch line 29 homejsx")
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

          dispatch(inputId(data.id))

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
        <div className="home-container">
          <div id="red-container-left" className="red-container">
          <div className="search-bar-container">
          <SearchBar onEnter={handleSearch} />
          </div>
                  <DisplayCard searchResult={searchResult}/>
                  <LeftSideButton/>
                  <DPadButtons/>
               </div>
               <div id="red-container-right" className="red-container">
                <InfoCard searchResult={searchResult}/>
              </div>
          </div>
    );
}

export default Home;