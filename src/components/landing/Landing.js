import React from "react";
import styled from "styled-components";
import Breadcrumb from "@/components/common/Breadcrumb";

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
  /* background-color: #f8f9fa; */

  /* max-width: 1400px; */
  /* margin: 0 auto; */
  width: 100%;
`;

function Landing() {
  const breadcrumbItems = [{ label: "Home", href: "/" }];

  return (
    <Container>
        <Breadcrumb items={breadcrumbItems} />
      <Main>
      </Main>
    </Container>
  );
}

export default Landing;
