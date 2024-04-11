import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

// export const SearchBar = () => {
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     fetch("https://pokeapi.co/api/v2/pokemon/")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.results.filter((user) => {
//           return (
//             value &&
//             user &&
//             user.name &&
//             user.name.toLowerCase().includes(value)
//           );
//         });
//         console.log(results);
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   return (
//     <div className="input-wrapper">
//       <FaSearch id="search-icon" />
//       <input
//         placeholder="Type to search.."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//     </div>
//   );
// };

export const SearchBar = ({ onEnter }) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEnter(input);
    }
  };

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
