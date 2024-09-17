import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import {useEffect, useState, useRef, useCallback} from 'react';
import { useScroll, motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {IconArrowExpandVertical} from './Icons';

const Text = () => {

const [isOpen, setIsOpen] = useState(false);

const variant = {
  exit: {
    opacity: 0,
    y: 10
  },
  enter: {
    opacity: 0,
    y: -100
  }

}



  return ( 
    <Container fluid className='mb-3'>
    <Row>
    <Col> 
     
    In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
    </Col>
    

  </Row>
  </Container>
   );
}
 
export default Text;