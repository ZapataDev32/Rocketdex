import React, {useEffect} from "react";
import { useSelector, useDispatch, connect } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from '../features/dataSlice.js'


export const InfoCard = () => {
    
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(fetchData())
      }, [])

    console.log(data.apiData.types)

    // const typesArray = data.apiData.types.map((typeData) => {
    //     const {slot, type} = typeData;
    //     const {name, url} = type;

    //     return (
    //         <p>Type: {name}</p>
    //     )
    // })
    // console.log(typesArray)

    //Capitalizing first letter of pokemon name
    const nameStr = String(data.apiData.name)
    const nameStrCap = nameStr[0].toUpperCase() + nameStr.slice(1)


    return (
        <div className="info-card-container">
            <div>
                <h1>Name: {nameStrCap}</h1>
                <p>Weight: {data.apiData.weight} hg</p>
                <p>Height: {data.apiData.height} dm</p>
                {/* <div>Types: {data.apiData.types.map((typeData, index) => {
                            const {type} = typeData;
                            const {name} = type;

                            return (
                                <div key={index}>
                                <p>{name}</p>
                                </div>
                            )
                        })}
                </div> */}
            </div>
        </div>
    )
}