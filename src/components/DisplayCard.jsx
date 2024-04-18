import React, {useState, useEffect} from "react";
import {Loading} from '../components/Loading.jsx'
import { useSelector, useDispatch, connect } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from '../features/dataSlice.js'

export const DisplayCard = (props) => {
  const { searchResult } = props;
    //LOADING SCREEN
  const [loading, setLoading] = useState(false);


  //Will trigger loading on first render of the page.
  useEffect(() => {
    setLoading(true)
    // IF USING API, could use fetch here and when getting a response from the server would remove the loading.
    // For testing/demonstration purposes, manually setting a load time using setTimeout.
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

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

// const renderImg = () => {
//   console.log(data)
//   if (data.apiData) {
//     return <img src={data.apiData.id} alt={data.apiData.name} />
//   } else {
//     return <p>Image here</p>
//   }
// }

useEffect(() => {
  dispatch(fetchData())
}, [data.id])

  return (
    <div className="blue-container">
      {loading ? (
        <Loading loading={loading}/>
      ) : (
        // searchResult && 
        (
          <div>
            {/* {renderImg()} */}
            {/* <img className="db-pokemon-img" src={searchResult.imageUrl} alt={searchResult.name} /> */}
            {/* {data.apiData.sprites?.other ? <img src={data.apiData.sprites.other.dream_world.front_default} alt={data.apiData.name} /> : null} */}
            {data.apiData.sprites?.other && <img src={
              data.apiData.sprites.other.dream_world.front_default 
                ? data.apiData.sprites.other.dream_world.front_default 
                
                : data.apiData.sprites.other["official-artwork"].front_default
                  ? data.apiData.sprites.other["official-artwork"].front_default
                  : data.apiData.sprites.front_default

              } 
              alt={data.apiData.name} 
              />}
            {/* So it reaches sprites and says AYO HOLD UP dont execute because this is undefined */}
            {/* And since we're using beautiful react ... when the data changes... RE RENDER TIME BABYYYY */}
            {/* so it becomes defined... and then WE COOK. */}
            {/*     if this true                do this this                                                                     otherwise nothing  */}
            {/* SORRY YOU SUCK ERROR.  */}
            {/* but why? */}
            {/* To evaluate if THAT is true... THAT has to be defined */}
            {/* But we don't want to display it unless it's defined and that's why we have the ternary in the frickin first place! */}
            {/* Well.. sorry.. Computer not so smart... to evaluate... I need defined... in this particular case... because im not that smart */}
            {/* So we can add the special ? after certain things in the middle of things... so if something breaks along the way.. it returns undefined.. instead of trying to actually execute on an undefined thingy */}
            {/* {data.apiData.sprites.other  ? <img src={data.apiData.sprites.other.dream_world.front_default} alt={data.apiData.name} /> : null} */}
          </div>
        )
      )
    }
    {/* {greeting()} */}
    </div>
  );
}