import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState } from 'react';

const Carousel = ({ images,  }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [click, setClick] = useState(false);
  const [direction, setDirection] = useState('left');

  const controls = useAnimationControls();

  const nextSlide = () => {
    setDirection("right");
    setActiveIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  };

  const prevSlide = () => {
    setDirection("left")
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1  
    )
  };

  const handleClick = (index) => {
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  }

  // !-------------------------------------------

  const testimonies = [
    {
      id: 1,
      name: 'Slide 1',
      comment: 'This Comment 1',
    },
    {
      id: 0,
      name: 'Slide 2',
      comment: 'This another Comment 2',
    }
  ]

  const ContainerTestimonies = ({name, comment}) => (
    <div>
        <p>{name}</p>
        <p>{comment}</p>
    </div>
  )
  // ! CONTINUE CAROUSEL
  const variants = {
    hiddenRight: {
      x: "10%",
      opacity: 1,
    },
    hiddenLeft: {
      x: "-10%",
      opacity: 1,
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y:'200%',
      // scale: 0,
      transition: {
        type: "spring",
        ease: 'easeInOut',
        duration: 2,
        // delay: 5
      },
    },
  };

const imgCarousel =     
  <AnimatePresence /* key={activeIndex} */ style={{position: 'relative'}}>
    <motion.img style={{width: "200px", position: "absolute", top: "100px"}}
      key={activeIndex}
      src={images[activeIndex]}
      variants = {variants}
      initial = {direction === 'right'? 'hiddenRight' : 'hiddenLeft'}
      animate = 'visible'
      transition = {{
        ease: 'easeInOut',
        type: "spring",
        duration: 1,
        // delay: 2
      }}
      exit= {"exit"}
    >    
      {/* <Col className='m-4'> */}
      {/* <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className='carousel_img'
        style={{width: "200px"}}
      /> */}
      {/* </Col> */}

      {/* <Col>
      <ContainerTestimonies
        name={testimonies[activeIndex].name}
        comment={testimonies[activeIndex].comment}
      />
      </Col> */}

    </motion.img>
    <div style={{height: '500px'}}></div>
    <Col>
      <ContainerTestimonies
        name={testimonies[activeIndex].name}
        comment={testimonies[activeIndex].comment}
      />
      </Col>
  </AnimatePresence>



const buttons = 
  <>
    <button onClick={prevSlide} className='carousel_btn carousel_btn--prev'>
    &lt;</button>

    <button onClick={nextSlide} className='carousel_btn carousel_btn--next'>
    &gt;</button>
  </>




  return ( 
    <Container className="carousel">
        <Row>
          <h1>TESTIMONIALS</h1>
          <Col> 
            <Col className="d-block d-flex justify-content-center align-items-center" style={{}}>{imgCarousel}</Col>

            {buttons}
          </Col>
        </Row>


      </Container>
   )
}
 
export default Carousel;