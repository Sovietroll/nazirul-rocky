import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import {useEffect, useState, useRef, useCallback} from 'react';
import { useScroll, motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {IconArrowExpandVertical} from './Icons';
import me from './images/meDisplayPic.png';

const Text = ({}) => {



const text = 
<p>
In 2023, I began creating a custom website on WordPress as a hobby and quickly developed a passion for coding. Now, I'm expanding my skills in various languages and tools to pursue a career as a Front-End Developer, with the long-term goal of becoming a Full-Stack Developer.
</p>;

  return ( 
    // mobile version
    <Container fluid className='d-md-none'>
    <Row>
      <h1 className='fw-bold'>About me</h1>
    <Col className='col'>
      <Col className='col-12'>
        {text}
      </Col>    
    </Col>



  </Row>
  </Container>
   );
}
 
export default Text;