import React from "react";

import Bio from "./Components/Bio";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const MainScreen = () => {
  return (
    <>
      <Header />
      <Bio />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default MainScreen;
