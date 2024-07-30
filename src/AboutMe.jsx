import {useState, useEffect} from 'react';
import useFadeIn from "./useFadeIn.jsx";


const AboutMe = () => {

  const visible = useFadeIn();

  return ( 
    <>
      <h1 className="about-me">
        About Me
      </h1>
      <div className={`about-me-under ${visible ? 'visible' : ''}`}>
        
        <ul>
          Currently making portfolio page
        </ul>

        <ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, alias.
        </ul>

        <ul>
          Nazirul Syafiq Young Rockie
        </ul>

        <ul>
          From Marang Terengganu
        </ul>

        <ul>
          Qualifications
        </ul>

        <ul
          className="skill-list"
        >
          <h2>Skills</h2>
          <li className="list-1">Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe After Effect</li>
          <li>React.js</li>
          <li>Javascript</li>
          <li>Html+Css</li>
          <li>SASS</li>
          <li>Git</li>


        </ul>
      </div>
    </>
   );
}
 
export default AboutMe;