//Libs
import React from "react";

//Components
import Cover from "../components/Cover";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Cover />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
