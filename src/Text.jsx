import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import {useEffect, useState, useRef, useCallback} from 'react';
import { useScroll, motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {IconArrowExpandVertical} from './Icons';
import me from './images/meDisplayPic.png';

const Text = ({}) => {



const text = 
<p>
  In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
</p>;

  return ( 
    <Container fluid className='d-md-none'>
    <Row>
      <h1>About me</h1>
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