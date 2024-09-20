import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import meLight from './images/dplight-01-01-01.jpg';
import meDark from './images/dpdark-01-01-01.jpg';

import { useScroll, motion, useSpring, useTransform, AnimatePresence } from "framer-motion";

const IntroHome = ({TransitionText,toggleDarkMode, ButtonResume,isDarkMode}) => {

  const myPic = 
  <motion.div
  initial ={{scale: 1.2, y: 10}}
  animate={{scale:1, y: 0}}
  transition={{
  ease: "linear",
  duration: .4}}>
    <img  src={isDarkMode? meDark: meLight} className="img-me img-responsive"
    />
  </motion.div>


  const greeting = 
  <TransitionText delay = {.5}>
  <h1 className="fs-1">

    <span className='fw-bold'>Hello, I'm </span> <br/>
    <span className='fs-2'>Nazirul Syafiq</span>
    
  </h1>
  </TransitionText>; 

  const intro = 
    <>
    A self-taught web developer with a strong passion for creating tailored, innovative digital solutions!
    </>

const text = 
<p>
  In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
</p>;

  return ( 
<Container fluid className=''>
  <Row className='gap-0'>



    <Col className='f-1 col-12 col-md-6 text-md-start p-3'>
    {greeting}
    {intro}
      <Col className='d-none d-md-block'>
        <h2>About Me</h2>
        {text}
      </Col>
    </Col>
    

    <Col className='col-12 col-md-6  align-items-center justify-content-center p-2' style={{backgroundColor: 'pink'}}>
    {myPic}


    <Col className='col-12'  style={{backgroundColor: 'purple'}}>
      <ButtonResume content='Contact Me!' id={1}/>  
    </Col>

    </Col>

    {/* <Col>
    <ButtonResume content='Contact Me!' id={1}/>  
    </Col> */}
  

 
 
    



  </Row>
</Container>
   );
}
 
export default IntroHome;