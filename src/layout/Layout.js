import React, { memo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";


const MainContent = styled.main`
  /* padding-bottom: 2rem; */
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default memo(Layout);

