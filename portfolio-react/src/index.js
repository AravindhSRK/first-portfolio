import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const aboutpage = [
    {
        name: "Aravindh",
        collage:"Kongu Engineering College",
        about:"Im aravindh",
    }
]

function App(){
    return<div className="contain">
        <Images/>
        {aboutpage.map((ab)=><About about={ab} key="ab.name"/>)}
        <Skill/>
    </div>
}

function Images(){
    
    return <div >
        <img src="./Image/aravindh.jpg" alt="error" className="imageplace"/>
    </div>
}


function About({about}){
    return<>
        <h3>{about.name}</h3>
        <p>{about.about}</p>
        <p>{about.collage}</p>
    </>
}

const skilllist=[
    "react",
    "java",
    "c",
    "web developement",
]

function Skill(){
    return <div className="skill-list">
        {skilllist.map((sk)=><p className="skill">{sk}</p>
        )}
    </div>
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />); 