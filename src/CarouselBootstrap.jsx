import {Row, Col, Container,Button,Collapse, Fade, Carousel,} from 'react-bootstrap';
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState } from 'react';
import IconChatLeftQuoteFill from './IconChatLeftQuoteFill';


const CarouselBootstrap = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex (selectedIndex);
  }


  const carouselOne = 

  <Col className='carousel-container'>
    <div className='mb-3 mt-3'>
      <img src='src/images/pp.webp' className='img-carousel rounded-circle img-fluid'/>
    </div>
    <h5 className='fs-5' style={{color: '#007EE5'}}><strong>Fariq</strong></h5>
    <p className='fs-6 mb-4'>7Eleven Staff Assistant</p>

      <p className='fs-6'>
       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur eaque ullam, quos quidem dicta repudiandae in dolorum atque quam. "
      </p>
    
  </Col>;




  const carouselTwo = 
  <Col className='carousel-container'>
    <div className='mb-3 mt-3'>
      <img src='src/images/me.jpg' className='img-carousel rounded-circle img-fluid'/>
    </div>
    
      <p className='fs-6 mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur eaque ullam, quos quidem dicta repudiandae in dolorum atque quam.
      </p>
      <h5 className='fs-5'>Megat</h5>
      <p className='fs-6'>Officer Bank Negara Malaysia</p>
  </Col>

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.carousel-indicators');
  if (button) {
    button.textContent = 'This is a button';
  }
});

  return ( 
<Container fluid className='testimonials p-5' >
  
  {/* <h1 className='fs-4 mb-1
'>Testimonials</h1> */}
  <IconChatLeftQuoteFill className="text-black-200" width='100px' height='80px' style={{color: "white"}}/>


    <Carousel activeIndex={index} 
    onSelect={handleSelect} 
    data-bs-theme='light' 
    wrap={false} 
    touch={true} 
    interval={null}
    aria-hidden={false}
    className=''>
      <Carousel.Item className=''>
        {carouselOne}
      </Carousel.Item>
      
      <Carousel.Item className=''>
        {carouselTwo}
      </Carousel.Item>


    </Carousel>
</Container>


      // <button className='carousel-control-prev' type='button' data-bs-target="#carouselExample" data-bs-slide="prev">
      //   <span className='carousel-control-prev-icon' aria-hidden="true"></span>
      //   <span className='visually-hidden'>Previous</span>
      // </button>

  //     <button className='carousel-control-next' type='button' data-bs-target="#carouselExample" data-bs-slide="next">
  //       <span className='carousel-control-next-icon' aria-hidden="true"></span>
  //       <span className='visually-hidden'>Next</span>
  //     </button>
  //   </div>
    
  // </div>


   );
}
 
export default CarouselBootstrap;