import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";
import Home from './components/Home';
import { TitleScreen } from "./components/TitleScreen";

function App() {

  return (
        <Router>
          <div className="App">
              <Routes>
              <Route exact path="/" Component={TitleScreen}/>
              <Route exact path="/journey" Component={Game}/>
              <Route path="/pokedex" Component={Home} />
            </Routes>
               </div>
        </Router>
  );
}

export default App;