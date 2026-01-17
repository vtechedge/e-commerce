import React, { memo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";


const MainContent = styled.main`
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const LayoutWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default memo(Layout);

