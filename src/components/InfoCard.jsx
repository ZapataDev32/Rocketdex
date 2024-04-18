import React from "react";
import {useSelector} from "react-redux"


export const InfoCard = (props) => {
    console.log(props.searchResult)
    // const { searchResult } = props;
    
    const data = useSelector((state) => state.data)
    return (
        <div className="info-card-container">
            
            {/* {searchResult && ( */}
            <div>
            <h1>Name: {data.apiData.name}</h1>
            <p>ID: {data.apiData.id}</p>
            <p>Weight: {data.apiData.weight}</p>
            <p>Height: {data.apiData.height}</p>
            {/* <img src={searchResult.imageUrl} alt={searchResult.name} /> */}
            </div>
        {/* )} */}
        </div>
    )
}