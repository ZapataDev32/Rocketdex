import React, {useState, useEffect} from "react";
import {Loading} from '../components/Loading.jsx'
import { useSelector, useDispatch, connect } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from '../features/dataSlice.js'

export const DisplayCard = () => {
  
    //LOADING SCREEN
  // const [loading, setLoading] = useState(false);


  //Will trigger loading on first render of the page.
  // useEffect(() => {
  //   setLoading(true)
  //   // IF USING API, could use fetch here and when getting a response from the server would remove the loading.
  //   // For testing/demonstration purposes, manually setting a load time using setTimeout.
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])

//   function greeting() {
//   if (!loading && !searchResult) {
//     return (
//       <div><h1>Welcome to your Pokedéx!</h1></div>
//     )
//   }
// }

//STORE
const dispatch = useDispatch()
const data = useSelector((state) => state.data)


useEffect(() => {
  dispatch(fetchData())
}, [data.id])

  return (
    <div className="blue-container">
      {/* {loading ? (
        <Loading loading={loading}/>
      ) : (
        // searchResult && 
        ( */}
          <div>
            {data.apiData.sprites?.other && <img src={
              data.apiData.sprites.other.dream_world.front_default 
                ? data.apiData.sprites.other.dream_world.front_default 
                
                : data.apiData.sprites.other["official-artwork"].front_default
                  ? data.apiData.sprites.other["official-artwork"].front_default
                  : data.apiData.sprites.front_default

              } 
              alt={data.apiData.name} 
              />}
          </div>
        {/* )
      )
    } */}
    </div>
  );
}