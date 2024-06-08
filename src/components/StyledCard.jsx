// StyledCard.js
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 300px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  color: #333333;
  font-size: 24px;
`;

const CardContent = styled.p`
  color: #666666;
  font-size: 16px;
`;

const ChooseButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Card = ({ title, content, onChoose }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
    <ChooseButton onClick={onChoose}>Choose</ChooseButton>
  </CardContainer>
);

export default Card;
