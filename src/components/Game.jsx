import React, { useState, useEffect } from "react";
import Card from "./Card";
import './Game.css'


const Game = () => {

  // const mockLocations = [
  //   {_id: 1, name: "Lorem Ipsum 1"},
  //   {_id: 2, name: "Lorem Ipsum 2"},
  //   {_id: 3, name: "Lorem Ipsum 3"}
  // ]

  const [locations, setLocations] = useState([])

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`http://localhost:5555/api/journey`)
        const data = await response.json()
        setLocations(data)
      } catch (error) {
        console.log('Error fetching locations', error)
      }
    }
    fetchLocations()
  }, [])


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
          <div>
            <ul>
          <li key={location._id}>{location.name}</li>
            <ul>
              <li key={location.name}>{location.type}</li>
            </ul>
            </ul>
          </div>
          )
        })}
    </div>
  );
};

export default Game;
