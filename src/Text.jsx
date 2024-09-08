import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import {useEffect, useState, useRef, useCallback} from 'react';
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const Text = () => {

const [isOpen, setIsOpen] = useState(false);




  return ( 
    <Container>
    <Row>
    {/* <Col>
      <div className='text-truncate'>
      In 2023, I started building a custom website on WordPress for fun and
      </div>
    </Col> */}

   
    <Col className='col-12'>

    <Button
      className='button-text'
      onClick ={() => setIsOpen(!isOpen)}
      aria-controls='collapse-text'
      aria-expanded={isOpen}
    />
        <div className='text-truncate'>
      In 2023, I started building a custom website on WordPress for fun and
      </div>
    <Collapse in={isOpen}>
      <div id='collapse-text'>
      In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
      </div>
    </Collapse>

    </Col>
      
    

  </Row>
  </Container>
   );
}
 
export default Text;