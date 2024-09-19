import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import {useEffect, useState, useRef, useCallback} from 'react';
import { useScroll, motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {IconArrowExpandVertical} from './Icons';
import me from './images/meDisplayPic.png';

const Text = () => {

  // const myPic = 
  // <motion.div
  // initial ={{scale: 1.2, y: 10}}
  // animate={{scale:1, y: 0}}
  // transition={{
  // ease: "linear",
  // duration: .4}}>
  //   <img  src={me} className="img-me rounded-circle img-responsive"
  //   />
  // </motion.div>

const text = 
<p>
  In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
</p>;

  return ( 
    <Container fluid className='mb-3'>
    <Row>
      <h1>About me</h1>
    <Col className='col'>
      <Col className='col-12'>
        {text}
      </Col>    
    </Col>

    <Col className='col-12'>
        {/* {myPic}  */}
    </Col>
    

  </Row>
  </Container>
   );
}
 
export default Text;