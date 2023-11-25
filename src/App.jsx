import React from "react";
import "./App.css";
import "./Responsive.css";
import Hero from "./components/homepage/hero";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Education from "./components/education/Education";
import Project2 from "./components/project2";


const App = () => {
  return (
    <>
      <section id="Home">
        <Hero />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects" style={{minHeight:"120vh"}}>
        <Projects />
      </section>
      <section id="Experience">
        <Education />
      </section>
      <section id="Contact">
        <Contact />
      </section>

      {/* <section>
        <Project2/>
      </section> */}
      
    </>
  );
};

export default App;
