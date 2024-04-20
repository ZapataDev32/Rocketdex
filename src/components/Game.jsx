import React, { useState, useEffect } from "react";
import Card from "./Card";
import './Game.css'


const Game = () => {


  const [locations, setLocations] = useState([]);
  const [locationType, setLocationType] = useState(null);
  

  useEffect(() => {
    if (locationType) {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`https://ilv5baby57.execute-api.us-east-2.amazonaws.com/db/api/journey?type=${locationType}`)
        //http://localhost:5555/api/journey
        const data = await response.json()
        setLocations(data)
        console.log(data)
      } catch (error) {
        console.log('Error fetching locations', error)
      }
    }
    fetchLocations()
    }
  }, [locationType])


  const [currentScene, setCurrentScene] = useState(0);
  const scenes = [
    {
      title: "Scene 1",
      content: "You are at a crossroads. Do you go left or right?",
      choices: [
        { content: "Go left", nextScene: 1 },
        { content: "Go right", nextScene: 2 },
      ],
    },
    {
      title: "Scene 2",
      content:
        "You see a chicken in front of you wearing a yellow-latex jumpsuit, as it dances, yelling 'Eat me Morris!' as it slaps its  chicken butt, keep note you are not Morris, this is not your name... what do you do?",
      choices: [
        { content: "Go Left and never look back", nextScene: 1 },
        { content: "Dance With the Chicken", nextScene: 2 },
      ],
    },
    // Add more scenes here...
  ];

  const makeChoice = (choiceIndex) => {
    // You can still use randomness here or directly use the choiceIndex
    // const randomChoiceIndex = Math.floor(Math.random() * scenes[currentScene].choices.length);
    // const chosenPath = scenes[currentScene].choices[choiceIndex]; // If you want to use randomization, replace 'choiceIndex' with 'randomChoiceIndex'
    const chosenPath = scenes[currentScene].choices[choiceIndex];
    setCurrentScene(chosenPath.nextScene);
  };

  console.log('Locations:', locations)

  const deleteLocation = async (id) => {
    try {
    const response = await fetch(`https://ilv5baby57.execute-api.us-east-2.amazonaws.com/db/api/journey/${id}`, {
      method: 'DELETE'
    });
    if(!response.ok) throw new Error('Failed to delete location');
    const updatedLocations = locations.filter(location => location._id !== id)
    setLocations(updatedLocations);
  } catch (error) {
    console.error('Error deleting location:', error);
  }
}

// const updateLocation = async (id) => {
//   try {
//     const response = await fetch(`https://ilv5baby57.execute-api.us-east-2.amazonaws.com/db/api/journey/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//     });
  
//   } catch (error) {
//     console.error('Error updating location:', error);
//   }
// }

  return (
    <div>
      <Card
        title={scenes[currentScene].title}
        content={scenes[currentScene].content}
        choices={scenes[currentScene].choices}
        onChoose={makeChoice}
      />

        {locations.map((location, index) => {
          // console.log('Mapping locations:', location);
          return (
            <div className="location-map-container">
            <ul key={location._id} className="location-map-item">
              <li>{location.name}</li>
                <ul>
                  <li>{location.type}</li>
                </ul>
            </ul>
              <button onClick={() => deleteLocation(location._id)}>DELETE</button>

              {/* <button onClick={() => updateLocation(location._id)}>UPDATE</button> */}
            </div>
          )
        })}


        <button onClick={() => setLocationType('Mountains')}>Mountains</button>
        <button onClick={() => setLocationType('Shorelines')}>Shorelines</button>
        <button onClick={() => setLocationType('Forests')}>Forests</button>
        <button onClick={() => setLocationType('Cities')}>Cities</button>

        {console.log(locationType)}

    </div>
  );
};

export default Game;
