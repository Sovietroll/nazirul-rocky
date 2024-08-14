import {motion} from "framer-motion";
import TransitionText from "./TransitionText";
import MotionFlip from "./MotionFlip";
import {useEffect, useState, useRef} from 'react';
import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CSS.scss';


const AboutMe = () => {

  const [hover, setHover] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Self learn developer","Graphic Designer", "Video Editor", "Motion Graphic"];
  const [open, setOpen] = useState(false);
  
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



  return ( 
<Container>
    <div className={`about-me`}>
      <div className="about-me-one">
        <Row>
        <Col>
        <h1>Hi My name is</h1>
        <TransitionText delay = {.5}>
              <h1 
                className="h1 text-wrap">Nazirul Syafiq bin Young Rockie.</h1>
          </TransitionText> 
          
          <TransitionText >

            <div 
            className="about-me-one-desc-selftaught"
            >
              <TitleStart />
              {/* GRAPHIC DESIGNER / SELF TAUGHT WEB DEVELOPER HERE */}
              </div> 

          </TransitionText>

          </Col>


          </Row>
          
      </div>
      
      
          <Col xs={6} md={6}>
          <motion.div
            initial ={{scale: 1.2, y: 10}}
            animate={{scale:1, y: 0}}
            transition={{
            ease: "linear",
            duration: .4}}>

              <img  
                src="src/images/me.jpg" 
                className="img-fluid rounded-circle"
                
              />

          </motion.div>
          </Col>
      
      
      <Container>
      <Row>

      <p style={{fontSize: "25px",
            paddingLeft: "100px",
            paddingRight: "100px",
            marginTop: "50px",
            marginBottom: "50px"
          }}
          className="fs-4 fs-md-3 fs-sm-1 px-2 px-md-5"
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
                <img src="src/images/codeIcon.png" className="img-fluid"/>
              </Col >

              <Col className="skills-col-1 text-wrap fs-1 fs-md-5 fs-sm-1 px-0 px-md-5" >
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
                  className="fs-3 fs-md-5 fs-sm-1 px-0 px-md-5"
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
                <img src="src/images/designerIcon.png" className="img-fluid"/>
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
    </div>
</Container>
   );
}
 
export default AboutMe;