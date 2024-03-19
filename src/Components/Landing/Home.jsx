import React from "react";
import "./home.css";
import Typewriter from "../Common/TypeWriter";
import MovingSprites from "./MovingSprites";

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
    <div className="col-8">
      <h1 className="hello mb-3">Hello!</h1>
      <h2 className="name mb-5"> My name is Guadalupe Jara</h2>
      <p>Always a scholar, eager to learn & grow while perfecting 
        my craft through problem identification & creative solution 
        building. I enjoy bringing research data that can become invaluable 
        resources to diverse communities. UX Research, Software Development, 
        and Ethnographic Research are the tools to my trade.</p>
    </div>
  </div>
  </div>
     </div>
    </React.Fragment>
  );
};

export default Home;
