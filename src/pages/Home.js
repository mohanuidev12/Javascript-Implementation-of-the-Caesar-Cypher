import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Output from "../components/Output";
import styled from "styled-components";

const Home = () => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [result, setResult] = useState("");

  const [userInput, setUserInput] = useState({
    plainText: "",
    shiftCount: "",
    direction: "",
  });

  const [isShiftCountInValid, setIsShiftCountInValid] = useState(false);

  useEffect(() => {
    if (
      !(Number(userInput.shiftCount) > -1 && Number(userInput.shiftCount) <= 26)
    ) {
      setIsShiftCountInValid(true);
    } else {
      setIsShiftCountInValid(false);
      setResult([...userInput.plainText].map((char) => encrypt(char)).join(""));
    }
  }, [userInput]);

  const encrypt = (char) => {
    const shiftCount = Number(userInput.shiftCount);
    if (alphabet.includes(char.toUpperCase())) {
      const position = alphabet.indexOf(char.toUpperCase());
      let newPosition;
      if (userInput.direction === "Left") {
        newPosition = (position - shiftCount + 26) % 26;
      }
      if (userInput.direction === "Right") {
        newPosition = (position + shiftCount) % 26;
      }
      return alphabet[newPosition];
    } else {
      return char;
    }
  };

  return (
    <>
      <StyledH1>Javascript Implementation of the Caesar Cypher</StyledH1>
      <HomeList>
        <List>
          <Input
            userInput={userInput}
            setUserInput={setUserInput}
            isShiftCountInValid={isShiftCountInValid}
          />
          <Output result={result} />
        </List>
      </HomeList>
    </>
  );
};

const StyledH1 = styled.h1`
  text-align: center;
  padding: 5rem;
`;

const HomeList = styled.div`
  padding: 5rem 15rem;
`;

const List = styled.div`
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
