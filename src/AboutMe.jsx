import {motion} from "framer-motion";
import TransitionText from "./TransitionText";
// import { Player } from '@lordicon/react';
import {useState} from 'react';

const AboutMe = () => {

// const ICON = require('./assets/lock.json');

const thisYear = new Date().getFullYear();

const YearTotal = ({yearThen, yearAfter}) => {
  const total = yearThen - yearAfter;  
  const sum = Math.abs(total);
  return(sum)
}


  return ( 

    <div className={`about-me`}>

      <div className="about-me-one">
        <div className= 'about-me-Description'>
          <TransitionText>
            <p>Self Taught Web Developer</p> 
          </TransitionText>
          <TransitionText delay = {.5}>
              <p style={{color: "grey"}}>Nazirul Syafiq bin Young Rockie.</p>
          </TransitionText> 
          </div>
          <motion.div
            initial ={{scale: 1.2, y: 10}}
            animate={{scale:1, y: 0}}
            transition={{
            ease: "linear",
            duration: .4}}>
              <img src="src/images/me bubble head.png" alt="head"
              style={{width: "400px"}} 
                className='bubbleHead'/>
          </motion.div>


      </div>

      arrow here

      <TransitionText
      style={{marginTop: "50px"}}>

      <img src="src/images/01G1.png" style={{width: "400px",float: "left", backgroundColor: "white"}}/>

          <div className="section-container">
            <h1>My Experiences</h1>
              <section>
                <h2>Graphic Designer cum Video Editor cum <br/>Motion Graphic</h2>
                <h3>2021 - 2024 {'\u00B7'} <YearTotal yearThen = {2021} yearAfter={2024}/> years </h3>

                  <ul>
                    <li>Create digital content</li>
                    <li>Create visually appealing design for various mediums</li>
                    <li>Collaborate with clients or project managers</li>
                    <li>Utilize WorPress to manage and update website content</li>
                  </ul>
              </section>

              <section>
                <h2>Career Break</h2>
                <h3>2021 - 2024 {'\u00B7'} <YearTotal yearThen = {2020} yearAfter={2021}/> year </h3>
                <p>Opened my first ever agriculture company</p>
              </section>

              <section>
                <h2>Graphic Designer</h2>
                <h3>2018 - 2019 {'\u00B7'} <YearTotal yearThen = {2018} yearAfter={2019}/>year</h3>
                <ul>
                  <li>Design visually appealing graphics</li>
                </ul>
              </section>
          </div>
      </TransitionText>
    </div>

   );
}
 
export default AboutMe;