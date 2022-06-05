import React from "react";
import Typewriter from "typewriter-effect";
import Headshot from "../Images/Assets/LinkedinIconNoBg.png";

import "../styles/Home.scss";

function Home() {




  return (
  <div className="home">
      <div className="head">
      <img src={Headshot} className="img"/>
        
            <div className="about">
                <h2>Paul O'Bar</h2>
                <div className="prompt">
                <span>
                <Typewriter
                options={{
                    cursor: '',
                    pauseFor: 3000,
                    delay: 20,
                    deleteSpeed: 20,
                    strings: ['Software Developer', 'Game Developer', 'Simulation Developer', 'Amature Frycook'],
                    autoStart: true,
                    loop: true,
                }}
                />
                
                </span>
                </div>
                    
            </div>
        </div>


        <div className="skills">
            <ol className="list">
            
            <div className="about-text">
            <h1>About</h1>
                        Graduated from the University of Texas at San Antonio with a Bachelor of Science in Computer Science. 
                        Currently developing software and games with a focus on emerging technologies. 
                </div>

                <li className="item">
                    <h2 className="headline">Technologies</h2>
                    Unity3D, Game Development, AI Simulation Work, 
                    Linux System Management, 3D Modeling and Printing, 
                    Software Malware Analysis and Reverse Engineering, Mixed Reality [AR-VR], 
                    Computer Vision, Machine Learning, Grilling,
                    Home Server Management, and more.
                </li>



                <li className="item">
                    <h2 className="headline">Languages</h2>
                    <span>JavaScript, PHP, Java, Python, C#, C, C++, Golang, Assembly(Intel x86)</span>
                </li>


            </ol>
      </div>
      

  </div>
  );
}
export default Home;
