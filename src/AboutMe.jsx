import {motion} from "framer-motion";
import TransitionText from "./TransitionText";
import MotionFlip from "./MotionFlip";
import {useEffect, useState, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CSS.scss';


const AboutMe = () => {

  const [hover, setHover] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Self learn developer","Graphic Designer", "Video Editor", "Motion Graphic"];
  

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
        <h1>Hi My name is</h1>

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
                src="src/images/me.jpg" 
                alt="head"
                style={{width: "350px",
                  borderRadius: "100%",
                  padding: "20px"
                }} 
              />

          </motion.div>
      </div>
        <p style={{fontSize: "25px",
          paddingLeft: "100px",
          paddingRight: "100px",
          marginTop: "50px",
          marginBottom: "50px"

        }}>
          Back in 2023, I decided to try to create my own custom website at WordPress just for fun. I literally went into an infinity hole of coding and web development. I instantly fell in love with it. Fast-forward to today, I still studying and learning to code various languages and tools in hope of becoming a <b>Front End Developer</b> and the end goal is <b>Full Stack Developer</b>.   
        </p>

      <Container className="skills" >

        <Row className="g-3" >

        <Col className="skills-dev-col" >

              <Col >
                <img src="src/images/designerIcon.png" style={{width: "120px"}}/>
              </Col >

              <Col className="skills-dev-col-1" >
                Developer
              </Col >

              <Col style={{backgroundColor: "purple"}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime harum corrupti et rerum omnis sed error deleniti similique. Necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, accusantium?
              </Col>

              <Col className="skills-dev-col-2">
                <Col>
                <span style={{color: "pink"}}>Languages I speak:</span>
                  <Col>
                    HTML, CSS, Javascript, JSX Sass, Git, Bootstrap
                  </Col>
                </Col>

                <Col  className="skills-dev-col-3">
                  Dev Tools:
                  <ul style={{listStyle: "none"}}>
                    <li>Bootstrap</li>
                    <li>Github</li>
                    <li>VS Code</li>
                    <li>Framer Motion</li>
                  </ul>
                </Col>
              </Col>
        
        </Col>

        <Col className="skills-des-col">

        <Col className="skills-des-col-row1">

                <img src="src/images/designerIcon.png" style={{width: "200px"}}/>
              </Col >

              <Col style={{backgroundColor: "black"}}>
                Designer
              </Col >

              <Col  style={{backgroundColor: "green"}}>
                <Col>What I do:
                
                  <Col>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, at?
                  </Col>
                </Col>
              </Col>
        
        </Col>

        </Row>
      </Container>



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
                  <h2>Self learn Web Developer</h2>
                  </Col>
                  <h3>2023 - Present {'\u00B7'} <YearTotal yearThen = {2023} yearAfter={2024}/> years </h3>
                    <ul>
                      <li>Learn the whole world about web design.</li>
                      <li>Targeting to become offical Full Stack developer at the height of my career.</li>
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
                      <li>Create digital content.</li>
                      <li>Collaborate with clients or project managers.</li>
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
                      <li>Opened my first ever agriculture company.</li>
                    </ul>
                  </section>
                  </Col>

                  <Col className="Col">
                  <section>
                    <h2>Graphic Designer</h2>
                    <h3>2018 - 2019 {'\u00B7'} <YearTotal yearThen = {2018} yearAfter={2019}/>year</h3>
                    <ul>
                      <li>Design visually appealing graphics.</li>
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