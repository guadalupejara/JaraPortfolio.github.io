import React from "react";
import "./home.css";
import Typewriter from "../Common/TypeWriter";
import MovingSprites from "./MovingSprites";
import Skills from "./skills/Skills";
import Projects from "./projects/projects";

const Home = () => {
  const strings = ["Curious & Grounded UX Researcher", "Horror Game Enthusiest","Software Engineer"];
  return (
    <React.Fragment>
     <div className="home-text-color home-text">
     <div className="container text-center mt-5">
  <div className="row align-items-center">
    <div className="col-4">
      <div>
        <MovingSprites/>
      </div>
    <div>
     I am a <Typewriter strings={strings} />
    </div>
    </div>
    <div className="col-2">

    </div>
    <div className="col-6">
      <h1 className="hello mb-5">Hello!</h1>
      <h2 className="name mt-5"> My name is Guadalupe Jara</h2>
      <div className="mt-5">
      <p>Always a scholar, eager to learn & grow while perfecting 
        my craft through problem identification & creative solution 
        building. I enjoy bringing research data that can become invaluable 
        resources to diverse communities. UX Research, Software Development, 
        and Ethnographic Research are the tools to my trade.</p>
        </div>
    </div>
  </div>
  </div>
  <div className="container imageContainer mt-5">
        <div id="skills">
          <Skills/>
        </div>
      </div>
      <div id="projects">
          <Projects/>
        </div>
     </div>
    </React.Fragment>
  );
};

export default Home;
