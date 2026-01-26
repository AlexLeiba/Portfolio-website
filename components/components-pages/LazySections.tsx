import React from "react";
import Projects from "./Projects/Projects";
import Contact from "./Contact";
import Skills from "./Skills/Skills";

export function LazySections() {
  return (
    <>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
