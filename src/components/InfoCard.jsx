import React from "react";


export const InfoCard = ({searchResult}) => {
    
    return (
        <div className="info-card-container">
            {searchResult && <h1>{searchResult}</h1>}
        </div>
    )
}