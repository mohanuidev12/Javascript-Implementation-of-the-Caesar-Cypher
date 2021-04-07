import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Form, Button, FormControl, Card, InputGroup } from "react-bootstrap";

const Input = ({ userInput, setUserInput, isShiftCountInValid }) => {
  const [plainText, setPlainText] = useState("");
  const [shiftCount, setShiftCount] = useState("");
  const [direction, setDirection] = useState("");

  useEffect(() => {
    setDirection("Left");
  }, []);

  const updatePlainText = (e) => {
    setPlainText(e.target.value);
  };

  const updateShiftCount = (e) => {
    setShiftCount(e.target.value);
  };

  const updateDirection = (e) => {
    setDirection(e.target.value);
  };

  const encrypt = (e) => {
    e.preventDefault();
    setUserInput({
      ...userInput,
      plainText,
      shiftCount,
      direction,
    });
  };

  return (
    <div>
      <StyledCard>
        <Card.Body>
          <Card.Title>Please Enter Your Input</Card.Title>
          <form>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Plain Text</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="Plain Text"
                type="text"
                value={plainText}
                onChange={updatePlainText}
                placeholder="Plain Text"
                aria-label="Plain Text"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3" hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon2">Shift Count</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="shiftcount"
                type="number"
                value={shiftCount}
                min="1"
                max="26"
                onChange={updateShiftCount}
                placeholder="Shift Count"
                aria-label="shiftcount"
                aria-describedby="basic-addon2"
                isInvalid={isShiftCountInValid}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid shift count in between 0 - 26.
              </Form.Control.Feedback>
            </InputGroup>

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Direction</Form.Label>
              <Form.Control
                as="select"
                custom
                selectedValue="Left"
                value={direction}
                onChange={updateDirection}
              >
                <option>Left</option>
                <option>Right</option>
              </Form.Control>
            </Form.Group>

            <ButtonDiv>
              <StyledButton variant="outline-dark" onClick={encrypt}>
                Encrypt
              </StyledButton>
            </ButtonDiv>
          </form>
        </Card.Body>
      </StyledCard>
    </div>
  );
};

const ButtonDiv = styled.div`
  text-align: center;
`;

const StyledButton = styled(Button)`
  width: 8rem;
`;

const StyledCard = styled(Card)`
  min-height: 40vh;
  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border: none;
`;
export default Input;
