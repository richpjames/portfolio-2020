import React from "react";
import styled from "styled-components/macro";

import Bio from "./Components/Bio";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
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
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </MainScreenWrap>
  );
};

export default MainScreen;
