import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";


export const SearchBar = ({ onEnter }) => {
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState('')

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEnter(input);
    }
  };

  const handleChange = (value) => {
      setInput(value);
  };


  const changePlaceholder = (value) => {
    setPlaceholder(value)
  }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder={placeholder}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyPress={handleKeyPress}
        onMouseEnter={() => changePlaceholder('Type to search...')}
        onMouseLeave={() => changePlaceholder('')}
      />
    </div>
  );
};
