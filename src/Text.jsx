import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import {useEffect, useState, useRef, useCallback} from 'react';
import Collapse from './Collapse';
import { useScroll, motion, useSpring, useTransform } from "framer-motion";


const Text = () => {

const [isOpen, setIsOpen] = useState(false);
const style = {

};

  return ( 
    <Container>
    <Row>

      {/* <div className="lead fs-6">
        {!isOpen? <p>In 2023, I started building a custom web-...</p> : null}
        <Collapse  isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>    */}

    <div className=' fs-6 fw-light' style={style}>

    <button 
      className='btn btn-primary' 
      type='button'
      data-bs-toggle='collapse' 
      data-bs-target='#collapseExample' 
      aria-expanded="false" 
      aria-controls="collapseExample">
        Click
    </button>
      
      <div className='collapse' id='collapseExample'>
        <div className='card card-body'>
          In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
        </div>
      </div>
    </div>

  </Row>
  </Container>
   );
}
 
export default Text;