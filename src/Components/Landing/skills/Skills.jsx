import React,{useState, useEffect} from "react";
import SkillsDetails from "./skillsDetails";
import react from "../../../Assests/techIcon/React.png"
import c from "../../../Assests/techIcon/C.png"
import sql from "../../../Assests/techIcon/SQL.png"
import net from "../../../Assests/techIcon/dotNet.png"
import figma from "../../../Assests/techIcon/Figma.png"
import xd from "../../../Assests/techIcon/XD.png"
import javascript from "../../../Assests/techIcon/JS.png"
import bootstrap from "../../../Assests/techIcon/Bootstrap.png"
import git from "../../../Assests/techIcon/git.png"
import postman from "../../../Assests/techIcon/postman.png"

function Skills() {
const skillArrays = [
    {
    name:"React",
    pic: react
},
{
    name:"C#",
    pic: c
},
{
    name:"Javascript",
    pic: javascript
},
{
    name:"SQL",
    pic: sql
},
{
    name:"Bootstrap",
    pic: bootstrap
},
{
    name:".Net",
    pic: net
},
{
    name:"Adobe XD",
    pic: xd
},
{
    name:"Figma",
    pic: figma
},
{
    name:"Git",
    pic: git
},
{
    name:"Postman",
    pic: postman
},
]

const[array, setArray]= useState({
    rawSkills:skillArrays,
    mappedSkills:[]
})
  
const skillMapper = (data) => {
setArray((prevstate)=>{
    let newState = {...prevstate};
    newState.mappedSkills = data.map(mapDetails);
    return newState
}
)

const mapDetails = (skill, index)=>{
console.log(skill, "mapper1")
return(
<SkillsDetails key={index} skill={skill}/>
)
}
};

useEffect(() => {
    skillMapper(array.rawSkills);
  },[array.rawSkills]);

  return (
<React.Fragment>
    <div className="container">
        <div className="spacing">
    <div className="row justify-content-center">
        <h1 className="header"><b>Skills</b></h1>
{array.mappedSkills}
</div>
</div>
</div>
</React.Fragment>
   
  );
}

export default Skills;