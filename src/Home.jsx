import {color, motion, useAnimationControls,useSpring } from "framer-motion";
import TransitionText from "./TransitionText";
import MotionFlip from "./MotionFlip";
import {useEffect, useState, useRef, useCallback} from 'react';
import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import './CSS.scss';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Collapse from './Collapse';
import Skills from './Skills';
import Experiences from './Experiences'
import IntroHome from './IntroHome';
import Footer from "./Footer";

const AboutMe = () => {

  const [hover, setHover] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Self Learn Dev","Graphic Designer", "Video Editor", "Motion Graphic"];
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
    const [matches, setMatches] = useState(false);


  const windowScrollTo = () => {
    window.scrollTo(0,0);
  }

  const floating = {
    position: 'sticky',
    top: 0
  }
  
const animationDuration = () =>{
  controls.start('move');
  const animation = setInterval(() => {
    controls.start("dont");
    clearInterval(animation);
  },500)
  
}

  const handleWindowResize = useCallback(event => {
    setWindowWidth(window.innerWidth);
  })

  //! USEFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex => (prevIndex + 1) % titles.length))
    },3500);
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    
  
    return() => {
      clearInterval(interval),
      window.removeEventListener('resize', handleWindowResize)
    }
  },[handleWindowResize]);

const TitleStart  = () => {
  return (
    <MotionFlip>
      {titles[titleIndex]}
    </MotionFlip>
  )
 }


const myPic = 
  <motion.div
  initial ={{scale: 1.2, y: 10}}
  animate={{scale:1, y: 0}}
  transition={{
  ease: "linear",
  duration: .4}}>
    <img  src="src/images/me.jpg" className="img-me rounded img-fluid img-responsive"
    />
  </motion.div>

//!--------------------RETURN----------------------------------------------------------------------------
return ( 
<Container  className={`about-me`}>

<IntroHome {...{ TransitionText, TitleStart, myPic }} />
                
      <Container>
        <Row>

          <div
              className="lead fs-6"
              >
                {!isOpen? <p>In 2023, I started building a custom web-...</p> : null}
              {/* // In 2023, I started building a custom web-... */}
{/* -------------COLLAPSE BUTTON--------------- */}
              <Collapse  isOpen={isOpen} setIsOpen={setIsOpen}/>
{/* -------------COLLAPSE BUTTON--------------- */}

              </div>   


      </Row>
      </Container>

      <hr className="border-3 border-danger rounded"></hr>

<Skills windowWidth={windowWidth}/>
<hr className="border-3 border-danger rounded"></hr>
<Experiences windowWidth={windowWidth}/>
<hr className="border-3 border-danger rounded"></hr>

  <Contact/>
</Container>
   );
}
 
export default AboutMe;