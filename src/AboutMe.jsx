import {color, motion, useAnimationControls,useSpring } from "framer-motion";
import TransitionText from "./TransitionText";
import MotionFlip from "./MotionFlip";
import {useEffect, useState, useRef} from 'react';
import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './CSS.scss';


const AboutMe = () => {

  const [hover, setHover] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Self Learn Dev","Graphic Designer", "Video Editor", "Motion Graphic"];
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();

  const wrapperVariants = {
    dont: {
      x: 0
    },
    move: {
      x: 10
    }
  }
  
const animationDuration = () =>{
  controls.start('move');
  const animation = setInterval(() => {
    controls.start("dont");
    clearInterval(animation);
  },500)
  
}
// !
  const OpenText = () => {
    const textOpen = 
    (
      <p style={{fontSize: "25px",
        paddingLeft: "100px",
        paddingRight: "100px",
        marginTop: "50px",
        marginBottom: "50px"
      }}
      className="fs-4 fs-md-3 px-1 px-md-5 text-paragraph"
      >
      In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
      </p>
    );

    open? textOpen : null;
   
    return textOpen;
 
  }
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


//!------------------------------------------------------------------------------------------------
return ( 
<Container  className={`about-me`}>

     
      <Container  className="about-me-one">
        <Row>
          
          <Col className="col-12 col-sm-3">

            <h1 className="fs-2 fw-normal">Hi My name is</h1>
            <TransitionText delay = {.5}>
                  <h1 
                    className="fs-1 fw-normal ">Nazirul Syafiq bin Young Rockie.</h1>
              </TransitionText> 
              

            </Col>

        <Col>
          <motion.div
            initial ={{scale: 1.2, y: 10}}
            animate={{scale:1, y: 0}}
            transition={{
            ease: "linear",
            duration: .4}}>
              <img  
                src="src/images/me.jpg" 
                className="img-me img-fluid rounded-circle img-responsive"

              />
          </motion.div>
        </Col>
        <TransitionText >

          <Col className="">
            {/* GRAPHIC DESIGNER / SELF TAUGHT WEB DEVELOPER HERE */}
            {/* <TitleStart  className="about-me-one-desc-selftaught display-6"/> */}
            {/* GRAPHIC DESIGNER / SELF TAUGHT WEB DEVELOPER HERE */}
          </Col>

        </TransitionText>
          </Row>
          </Container>
      
      
      {/* MY PIC */}
        {/* <Col>
          <motion.div
            initial ={{scale: 1.2, y: 10}}
            animate={{scale:1, y: 0}}
            transition={{
            ease: "linear",
            duration: .4}}>
              <img  
                src="src/images/me.jpg" 
                className="img-me img-fluid rounded-circle img-responsive"

              />
          </motion.div>
        </Col> */}
      {/* MY PIC */}
      
      
      <Container>
        <Row>

          <p
              className="lead"
              >
              In 2023, I started building a custom web-...
              </p>   

          {/* <Button
          onClick={() => setOpen(!open)}
          aria-controls="text-paragraph"
          aria-expanded={open}
        >See more</Button>

        <Collapse in={open}>
        <OpenText/>
          <p style={{fontSize: "25px",
            paddingLeft: "100px",
            paddingRight: "100px",
            marginTop: "50px",
            marginBottom: "50px"
          }}
          className="fs-4 fs-md-3 px-1 px-md-5 text-paragraph"
          >
          In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
          </p> 
        </Collapse> */}


      </Row>
      </Container>

      {/* In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer. */}

      <Container className="skills" >

        <Row className="g-1" >

        <Col className="skills-col" >

              <Col>
                <img src="src/images/codeIcon.png" className="img-skills"/>
              </Col >

              <Col className="skills-col-1">
                Developer
              </Col >

              <Col className="skills-col-1-desc text-wrap 
              fs-6
             ">
               I enjoy building projects from the ground up and love transforming concepts into reality in the browser.
              </Col>

              <Col className="skills-col-2">
                <Col>
                <span style={{color: "pink"}}
                  className=""
                >
                  Languages I speak:</span>
                  <Col>
                    HTML, CSS, Javascript, JSX, SASS, Git
                  </Col>

                  <Col  className="skills-col-3">
                  <span>Dev Tools:</span>
                  <ul style={{listStyle: "none", padding: "0px"}}>
                    <li>Bootstrap</li>
                    <li>Github</li>
                    <li>VS Code</li>
                    <li>Framer Motion</li>
                  </ul>
                </Col>

                </Col>

              </Col>
        
        </Col>

          <div className="vr"></div>
        

        <Col className="skills-col">

              <Col>
                <img src="src/images/designerIcon.png" className="img-skills"/>
              </Col>
            
              <Col className="skills-col-1" >
                Designer
              </Col >

              <Col  className="skills-col-1-desc">
                I prioritize straightforward content organization, elegant design principles, and user experiences.
              </Col>

              <Col className="skills-col-2">
                <Col>
                  <span style={{color: "pink"}}>Things I enjoy designing</span>
                  <Col>
                    Poster, logo, photo manipulation, vector, video tribute 
                  </Col>
                  <Col className="skills-col-3">
                  <span>Tools:</span>
                    <ul style={{listStyle: "none", padding: "0px"}}>
                      <li>Photoshop</li>
                      <li>After Effect</li>
                      <li>Illustrator</li>
                      <li>Premiere Pro</li>
                      <li>Lightroom</li>
                    </ul>
                  </Col>
                </Col>
              </Col>
              </Col>
        

        </Row>
      </Container>




    

    <Container>

      <TransitionText style={{marginTop: "20px", position: "relative"}}>

      <motion.div
        initial ={{scale: 1.2, y: 10}}
        animate={{scale:1, y: 0}}
        transition={{ease: "linear"}}
    >
      < img src="src/images/01G1.png" 
      className="imgexp img-responsive"/>
    </motion.div>
          <div className="about-me-section">
            
          
          <div className="about-me-section-container-body  experience-rows" >

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

                    <ul className="">
                      <li>Learn the whole world about web design.</li>
                      <li>Targeting to become offical Full Stack developer at the height of my career.</li>
                    </ul>

                </section>
                <Col>
                  <h4
                    style={{display: "flex",justifyContent: "center",
                    }}
                  ><span style={{paddingRight: "15px"}}>Portfolio</span>
                  {/* PORTFOLIO LINK */}
                      <a href="https://www.youtube.com/">
                      <motion.div
                        variants={wrapperVariants}
                        transition={{type:"spring",
                          damping: 10,
                          mass: 0.75,
                          stiffness: 100,}}
                        initial="dont"
                        animate={controls}
                        onClick = {()=> animationDuration()}
                        >
                          <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} className="arrow-right"/>
                      </motion.div>
                      </a>
                      </h4> 
                  {/* onMouseLeave={()=> controls.start("dont")}> */}
 
                </Col>
                </Col>

            </Row>

            <Row>
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
          </Row>

          <Row>

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
    
</Container>
   );
}
 
export default AboutMe;