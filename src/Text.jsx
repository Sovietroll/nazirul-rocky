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
    <Container>
    <Row>
    <Col className='fs-6'> 
     
    In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
    </Col>

   
    {/* <Col className='col-12'>

    
    <AnimatePresence>
    <motion.div className='text-truncate'
      animate={isOpen? 'exit' : null}
      exit={'enter'}
      variants={variant}
      transition={{ease:'linear'}}
      >
       In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
    </motion.div>
    </AnimatePresence>

    <Collapse in={isOpen}>
      <div id='collapse-text'>
      In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
      </div>
    </Collapse>
    <Button
      className='button-text'
      onClick ={() => setIsOpen(!isOpen)}
      aria-controls='collapse-text'
      aria-expanded={isOpen}
    >
      <IconArrowExpandVertical width='30px' height='30px'/>
    </Button>
    </Col> */}
      
    

  </Row>
  </Container>
   );
}
 
export default Text;