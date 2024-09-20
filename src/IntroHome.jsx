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
  <h1 className="fw-bold">

    <span className=''>Hello, I'm </span> <br/>
    <span className='' style={{color: '#009785'}}>Nazirul Syafiq</span>
    
  </h1>
  </TransitionText>; 

  const intro = 
    <>
    A self-taught web developer with a passion for learning new skills and quickly adapting to emerging technologies.
    </>

const text = 
<p>
In 2023, I began creating a custom website on WordPress as a hobby and quickly developed a passion for coding. Now, I'm expanding my skills in various languages and tools to pursue a career as a Front-End Developer, with the long-term goal of becoming a Full-Stack Developer.
</p>;

  return ( 
<Container fluid className=''>
  <Row className='gap-0 my-2 align-items-center justify-content-center'>



    <Col className='f-1 col-12 col-md-6 text-md-start p-3'>
    {greeting}
    {intro}
    {/* DESKTOP VERSION */}
      <Col className='d-none d-md-block my-2'>
        <h2 className='fw-bold'>About Me</h2>
        {text}
      </Col>
    </Col>
    

    <Col className='col-12 col-md-6  align-items-center justify-content-center p-2'>
    {myPic}


    <Col className='col-12' >
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