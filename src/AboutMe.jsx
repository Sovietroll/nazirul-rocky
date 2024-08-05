import {motion} from "framer-motion";
import TransitionText from "./TransitionText";
import MotionFlip from "./MotionFlip";
import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutMe = () => {



const [hover, setHover] = useState(false);
const [hoverImg, setHoverImg] = useState(false);



const MouseHover = () => {
  const sum = hover? 
  (<MotionFlip>
    Graphic Designer
  </MotionFlip>)
  : 
  (<MotionFlip>
    Self Taught Web Developer
  </MotionFlip>)
    return sum
 }

const thisYear = new Date().getFullYear();

const YearTotal = ({yearThen, yearAfter}) => {
  const total = yearThen - yearAfter;  
  const sum = Math.abs(total);
  return(sum)
}

useEffect(() => {
  
  const interval = setInterval(() => {
    setHover(hover => !hover)
  },5000);

  hover?(
  <MotionFlip>
    Graphic Designer
  </MotionFlip>
  )
  : 
  (<MotionFlip>
    Self Taught Web Developer
  </MotionFlip>)

  return() => {
    clearInterval(interval)
  }
},[]);

  return ( 

    <div className={`about-me`}>

      <div className="about-me-one">
        <div className= 'about-me-one-desc'>

          <TransitionText >

            <div 
            // onMouseEnter={() => setHover(true)}
            // onMouseLeave={() => setHover(false)}
            className="about-me-one-desc-selftaught"
            >
              <MouseHover />
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
                // onMouseEnter = {()=> setHoverImg(true)}
                // onMouseLeave = {()=> setHoverImg(false)}

              />

          </motion.div>


      </div>

      {/* arrow here---------------------------------- */}
    <Container>
      <TransitionText
      style={{marginTop: "50px"}}>

        

        
          <div className="about-me-section">
{/*< img src="src/images/01G1.png" style={{width: "400px", backgroundColor: "white"}}/> */}
          
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
                    <p>Opened my first ever agriculture company</p>
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