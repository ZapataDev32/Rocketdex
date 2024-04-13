import React, { useState } from "react";
import Card from "./Card";

const Game = () => {
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

  return (
    <div>
      <Card
        title={scenes[currentScene].title}
        content={scenes[currentScene].content}
        choices={scenes[currentScene].choices}
        onChoose={makeChoice}
      />
    </div>
  );
};

export default Game;
