import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { DisplayCard } from "./components/DisplayCard";
import { DPadButtons } from "./components/DPadButtons";
import { InfoCard } from "./components/InfoCard";
import { LeftSideButton } from "./components/LeftSideButton";
// import { Loading } from "./components/Loading";
import Game from "./components/Game";
import Home from './components/Home';

function App() {

  return (
        <Router>
          <div className="App">
              <Routes>
              <Route exact path="/" Component={Home}/>
              {/* Change below path name to match component */}
              <Route exact path="/locations" Component={Game}/>
            </Routes>
               </div>
        </Router>
  );
}





export default App;



// const [searchResult, setSearchResult] = useState("");

  // const handleSearch = (query) => {
  //   if (!query) {
  //     setSearchResult("");
  //     return;
  //   }

  //   // Normalize the input for consistency
  //   const searchQuery = query.trim().toLowerCase();

  //   // Fetch the Pokemon data
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Pokemon not found");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Assuming you want to display the Pokemon's name
  //       setSearchResult(data.name);
  //     })
  //     .catch((error) => {
  //       // Handle the case where the Pokemon is not found
  //       setSearchResult("Pokemon not found");
  //     });
  // };