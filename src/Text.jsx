import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import {useEffect, useState, useRef, useCallback} from 'react';
import Collapse from './Collapse';
import { useScroll, motion } from "framer-motion";


const Text = () => {

const [isOpen, setIsOpen] = useState(false);
const {scrollYProgress} = useScroll();

  return ( 
    <Container>
            <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    <Row>

      <div
          className="lead fs-6"
          >
            {!isOpen? <p>In 2023, I started building a custom web-...</p> : null}
            <Collapse  isOpen={isOpen} setIsOpen={setIsOpen}/>

          </div>   


  </Row>
  </Container>
   );
}
 
export default Text;