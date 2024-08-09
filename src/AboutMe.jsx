import {motion} from "framer-motion";
import TransitionText from "./TransitionText";
import MotionFlip from "./MotionFlip";
import {useEffect, useState, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {

  const [hover, setHover] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Graphic Designer", "Web Developer", "Video Editor", "Motion Graphic"];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex => (prevIndex + 1) % titles.length))
    },3500);
  
    return() => {
      clearInterval(interval)
    }
  },[]);

const TitleStart  = () => {
  return (
    <MotionFlip>
      {titles[titleIndex]}
    </MotionFlip>
  )
 }

const thisYear = new Date().getFullYear();
const YearTotal = ({yearThen, yearAfter}) => {
  const total = yearThen - yearAfter;  
  const sum = Math.abs(total);
  return(sum)
}



  return ( 

    <div className={`about-me`}>
      
      <div className="about-me-one">
        <div className= 'about-me-one-desc'>

          <TransitionText >

            <div 
            className="about-me-one-desc-selftaught"
            >
              <TitleStart />
              {/* GRAPHIC DESIGNER / SELF TAUGHT WEB DEVELOPER HERE */}
              </div> 

          </TransitionText>

          <TransitionText delay = {.5}>
              <p 
                style={{color: "grey"}}>Nazirul Syafiq bin Young Rockie.</p>
          </TransitionText> 
          </div>
          <motion.div
            initial ={{scale: 1.2, y: 10}}
            animate={{scale:1, y: 0}}
            transition={{
            ease: "linear",
            duration: .4}}>

              <img 
                src="src/images/me bubble head.png" 
                alt="head"
                style={{width: "400px"}} 
                className='bubbleHead'
              />

          </motion.div>
      </div>

      {/* Arrow HERE */}
      <Row 
        style={{marginTop: "20px",
        display: "inline-block",
        backgroundColor: "black"}}
        >
         FSAFASF
         {/* <FontAwesomeIcon icon={faChevronDown} /> */}
        
      </Row>
      {/* Arrow HERE */}
    
    {/* < img src="src/images/01G1.png" className="imgexp"/> */}

    <Container>
    <motion.div
        initial ={{scale: 1.2, y: 10}}
        animate={{scale:1, y: 0}}
        transition={{ease: "linear"}}
        className="imgexp"
    >
    < img src="src/images/01G1.png" style={{width: "200px"}}/>
    </motion.div>

      <TransitionText style={{marginTop: "20px"}}>
          <div className="about-me-section">
            
          
          <div className="about-me-section-container-body">

            <Row>
            <h1>My Experiences</h1>
            </Row>


            <Row>
              <Col className="Col">
                

                <section>
                  <Col>
                  <h2>Freelance Web Developer</h2>
                  </Col>
                  <h3>2023 - Present {'\u00B7'} <YearTotal yearThen = {2023} yearAfter={2024}/> years </h3>
                    <ul>
                      <li>Ensure websites are visually appealing and user-friendly.</li>
                      <li>Use Git for version control to manage and track changes in code.</li>
                    </ul>
                </section>
                </Col>

                <Col className="Col">
                <section>
                <Col>
                  <h2>Graphic Designer / Video Editor / Motion Graphic</h2>
                  <h3>2021 - 2024 {'\u00B7'} <YearTotal yearThen = {2021} yearAfter={2024}/> years </h3>
                </Col>
                    <ul>
                      <li>Create digital content</li>
                      <li>Collaborate with clients or project managers</li>
                    </ul>
                </section>
                </Col>

                </Row>


                <Row>
                  <Col className="Col">
                  <section>
                    <h2>Career Break</h2>
                    <h3>2020 - 2021 {'\u00B7'} <YearTotal yearThen = {2020} yearAfter={2021}/> year </h3>
                    <ul>
                      <li>Opened my first ever agriculture company</li>
                    </ul>
                  </section>
                  </Col>

                  <Col className="Col">
                  <section>
                    <h2>Graphic Designer</h2>
                    <h3>2018 - 2019 {'\u00B7'} <YearTotal yearThen = {2018} yearAfter={2019}/>year</h3>
                    <ul>
                      <li>Design visually appealing graphics</li>
                    </ul>
                  </section>
                  </Col>

                </Row>
          </div>
        
          </div>
      </TransitionText>
      </Container>
    </div>

   );
}
 
export default AboutMe;