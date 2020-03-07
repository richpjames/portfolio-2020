import React from "react";
import styled from "styled-components/macro";

import Bio from "./Components/Bio";
import Header from "./Header/Header";
import Experience from "./Work/Experience";
import Skills from "./Work/Skills";
import Projects from "./Work/Projects";
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
