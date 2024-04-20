import React, { useState, useEffect } from "react";
import Card from "./Card";
import './Game.css'


const Game = () => {

  // EDITING (UPDATE)
  const [locations, setLocations] = useState([]);
  const [locationType, setLocationType] = useState(null);
  //state and store locations and the currently edited location
  const [editing, setEditing] = useState(null); //null if not editing
  const [formData, setFormData] = useState({name: '', type: ''})
  const [editFormData, setEditFormData] = useState({ name: '', type: ''})
  
  const startEditing = (location) => {
    setEditing(location._id);
    setEditFormData({ name: location.name, type: location.type});
  };

  const handleEditFormChange = (event) => {
    const {name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  }

  const saveUpdates = async (id) => {
    try {
      const response = await fetch(`https://ilv5baby57.execute-api.us-east-2.amazonaws.com/db/api/journey/${id}`,
      {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editFormData)
    });
    if (!response.ok) throw new Error('Failed to updated location');
    const updatedLocation = await response.json();
    const updatedLocations = locations.map(location => 
      location._id === id ? updatedLocation : location
  );
  console.log('Received Updated Location:', updatedLocation);
  console.log('Old Locations:', locations);
  console.log('New Locations:', updatedLocations);
  


  setLocations(updatedLocations);
  setEditing(null);
   } catch (error) {
      console.error('Error updating location:', error);
    }
  }
  
  useEffect(() => {

  }, [])

  useEffect(() => {
    console.log('Locations updated:', locations)
  }, [locations])

  useEffect(() => {
    if (locationType) {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`https://ilv5baby57.execute-api.us-east-2.amazonaws.com/db/api/journey?type=${locationType}`)
        
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
  
// DELETE 
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

const handleInputChange = (event) => {
  const {name, value} = event.target;
  setFormData({...formData, [name]: value})
}

const handleSubmit = async (event) => {
  event.preventDefault()
  try {
    const response = await fetch('https://ilv5baby57.execute-api.us-east-2.amazonaws.com/db/api/journey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if(!response.ok) {
      throw new Error('Failed to create location');
    }
    const newLocation = await response.json();
    setLocations([...locations, newLocation]);
    setFormData({name: '', type: ''})
  } catch (error) {
    console.error('Error creating location:', error);
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

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Location Name" value={formData.name} onChange={handleInputChange}/>
        <input type="text" name="type" placeholder="Location Type" value={formData.type} onChange={handleInputChange}/>
        <button type="submit">Create Location</button>
      </form>

        {locations.map((location) => {
          // console.log('Mapping locations:', location);
          return (
            <div className="location-map-container" key={location._id}>
              {editing === location._id ? (
                <div>
                  <input type='text' name='name' value={editFormData.name} onChange={handleEditFormChange}/>
                  <input type='text' name='type' value={editFormData.type} onChange={handleEditFormChange}/>
                  <button onClick={() => saveUpdates(location._id)}>Save</button>
                  <button onClick={() => setEditing(null)}>Cancel</button>
                </div>
              ) : (
                <div key={location._id}>
                <ul>
                <li>{location.name}</li>
                  <ul>
                    <li>{location.type}</li>
                  </ul>
              </ul>
                <button onClick={() => deleteLocation(location._id)}>DELETE</button>
                <button onClick={() => startEditing(location)}>EDIT</button>
                </div>
              )}

            </div>
          )
        })}


        <button onClick={() => setLocationType('Mountains')}>Mountains</button>
        <button onClick={() => setLocationType('Shorelines')}>Shorelines</button>
        <button onClick={() => setLocationType('Forests')}>Forests</button>
        <button onClick={() => setLocationType('Cities')}>Cities</button>

        {/* {console.log(locationType)} */}

    </div>
  );
};

export default Game;
