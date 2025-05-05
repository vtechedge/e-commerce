import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #fafafa; */
  padding: 1rem 2rem;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  width: 100%;
`;

function Landing() {
  return (
    <Container>
      <Main></Main>
    </Container>
  );
}

export default Landing;
