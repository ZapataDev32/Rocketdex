import React from "react";


export const DisplayCard = ({searchResult}) => {
    
    return (
        <div className="blue-container">
            {searchResult && <h1>{searchResult}</h1>}
            <img src='https://placehold.co/600x400' alt='placeholder'/>
        </div>
    )
}
