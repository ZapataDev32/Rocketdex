import React from "react";


export const InfoCard = (props) => {
    console.log(props.searchResult)
    const { searchResult } = props;
    return (
        <div className="info-card-container">
            
            {/* {searchResult && ( */}
            <div>
            <h1>Name: {searchResult.name}</h1>
            <p>ID: {searchResult.id}</p>
            <p>Weight: {searchResult.weight}</p>
            <p>Height: {searchResult.height}</p>
            {/* <img src={searchResult.imageUrl} alt={searchResult.name} /> */}
            </div>
        {/* )} */}
        </div>
    )
}