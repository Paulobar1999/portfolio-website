import React from "react";
import ProjectItem from "../components/ProjectItem";
import ARG from "../Images/Projects/Arg.png";
import RMAR from "../Images/Projects/RM.png";
import OGAG from "../Images/Projects/OGAG.png";
import CMP from "../Images/Projects/CMP.png";

import FP from "../Images/Projects/FP.png";
import SA from "../Images/Projects/SA.png";

import FAE from "../Images/Projects/FAE.png";
import QP from "../Images/Projects/QP.png";
import SOAG from "../Images/Projects/SOAG.png";
import RR from "../Images/Projects/RR.png";
import MR from "../Images/Projects/MR.png";
import Swam from "../Images/Projects/Swam.png";

import "../styles/Projects.scss";
function Projects() {
    return (
    <div className="projects">
        <div className="projects-header">
        <h1>Personal Projects</h1>
        <p>Here are some projects I've made for a variety of competitions, Note that most are made over a 24-48 hour period</p>
        </div>
          <div className="projectList">
          <ProjectItem title="BugBlasterARG" image={ARG} subtitle="📱🍔🐛"
          discription="Augmented Reality Game"
          link="https://www.linkedin.com/feed/update/urn:li:activity:6937506177643675648/"/>

          <ProjectItem title="RowdymonARG" image={RMAR} subtitle="🍕📱🍟" 
          discription="Augmented Reality Card Game" 
          link="https://devpost.com/software/rowdymon-ar-card-game"/>






          <ProjectItem title="OF GUS AND GOLD" image={OGAG} subtitle="🏆🥇🏆" 
          discription="First Place Winner"
          link="https://paulobar.itch.io/of-gus-and-gold"/>

          <ProjectItem title="Clean My Plate" image={CMP} subtitle="🍗🍽️🥦" 
          discription="Food for Thought"
          link="https://paulobar.itch.io/clean-my-plate"/>


          <ProjectItem title="Spamazon" image={SA} subtitle="📈✨🤖" 
          discription="Amazon Review Graphing Utility "
          link="https://www.youtube.com/watch?v=pkKXkXm-fMY"/>

          <ProjectItem title="FRUITPUNCH" image={FP} subtitle="🤜🏻🍎🤛🏻" 
          discription="Judges Choice"
          link="https://paulobar.itch.io/fruit-punch"/>



          <ProjectItem title="Fishin' Ain't Easy" image={FAE} subtitle="🐳🎣⛵" 
          discription="Fishing Game made in 10 Days"          
          link="https://paulobar.itch.io/fishin-aint-easy"/>


          <ProjectItem title="QPICK VR" image={QP} subtitle="🗣️🥽🥈"
          discription="Second Place Winner"
          link="https://paulobar.itch.io/qpick"/>


          <ProjectItem title="Sort of a game VR" image={SOAG} subtitle="📦🥽📦"
          discription="VR Sorting Game"
          link="https://paulobar.itch.io/sort-of-a-game"/>

          <ProjectItem title="Raygun Randy VR" image={RR} subtitle="🔫🥽👽"
          discription="VR Arcade Shooter"
          link="https://www.youtube.com/watch?v=HoAun4FrhlI"/>








          <ProjectItem title="MADRUN" image={MR} subtitle="😡📱🏃‍♂️"
          discription="Published Android Game"
          link="https://play.google.com/store/apps/details?id=com.ArcadeSheep.MadRun&hl=en_US&gl=US"/>

          <ProjectItem title="SWAM" image={Swam} subtitle="🕹️🟦💥"
          discription="Published Steam Game"
          link="https://store.steampowered.com/app/565650/SWAM/"/>

            
          </div>
    </div>
    
    
    
    
    );
    
  }
  export default Projects;
  