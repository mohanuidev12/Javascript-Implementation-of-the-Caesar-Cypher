import React from "react";
import styled from "styled-components";

import { Card } from "react-bootstrap";

const Output = ({ result }) => {
  return (
    <div>
      <StyledCard>
        <Card.Body>
          <Card.Title>Result</Card.Title>
          <p>{result}</p>
        </Card.Body>
      </StyledCard>
    </div>
  );
};

const StyledCard = styled(Card)`
  min-height: 40vh;
  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border: none;
`;
export default Output;
