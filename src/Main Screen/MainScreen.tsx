import React from "react";
import styled from "styled-components/macro";

import Bio from "./Components/Bio";
import Header from "./Header/Header";
import CVSection from "./Work/CVSection";
import Footer from "./Components/Footer";

const MainScreenWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainScreen = () => {
  return (
    <MainScreenWrap>
      <Header title="header" />
      <Bio />
      <CVSection />
      <Footer />
    </MainScreenWrap>
  );
};

export default MainScreen;
