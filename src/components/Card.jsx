// Card.js
import React from "react";
import styled from "styled-components";

// Add your styled components here

const Card = ({ title, content, choices, onChoose }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
    {choices.map((choice, index) => (
      <button key={index} onClick={() => onChoose(index)}>
        {choice.content}
      </button>
    ))}
  </div>
);

export default Card;
