import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import me from './images/meDisplayPic-square.jpg';
import { useScroll, motion, useSpring, useTransform, AnimatePresence } from "framer-motion";

const IntroHome = ({TransitionText}) => {

  const myPic = 
  <motion.div
  initial ={{scale: 1.2, y: 10}}
  animate={{scale:1, y: 0}}
  transition={{
  ease: "linear",
  duration: .4}}>
    <img  src={me} className="img-me img-responsive"
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

  return ( 
<Container fluid className='my-4'>
  <Row>



    <Col className='f-1 col-12 col-md-6 text-md-start'>
    {greeting}
    {intro}
    </Col>
    

    <Col className='col-12 col-md-6'>
    {myPic}
    <button>Resume</button>
    </Col>


 
 
    



  </Row>
</Container>
   );
}
 
export default IntroHome;