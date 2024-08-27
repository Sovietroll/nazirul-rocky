import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState } from 'react';

const Carousel = ({ images,  }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [click, setClick] = useState(false);
  const [direction, setDirection] = useState(null);

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

    right: {x: 10},
    left: {x: -10}

  }

const imgCarousel =     
  <AnimatePresence>
    <motion.div
      variants = {variants}
      initial = {{opacity: 1}}
      animate = { direction === "right"? 'right' : 'left'}
      transition = {{duration: 1}}
      exit={{opacity: 0}}
    >    

      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className='carousel_img'
        style={{width: "100px"}}
      />
        
  </motion.div>
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

            {imgCarousel}


            <ContainerTestimonies
              name={testimonies[activeIndex].name}
              comment={testimonies[activeIndex].comment}
            />
            {buttons}
          </Col>
        </Row>


      </Container>
   )
}
 
export default Carousel;