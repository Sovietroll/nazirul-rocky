import {Row, Col, Container,Button,Collapse, Fade, Carousel,} from 'react-bootstrap';
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState } from 'react';
import CarouselContent from './CarouselContent';
import {IconCarousel} from './Icons';
import megat from './images/megat.jpeg';
import eyra from './images/eyra.jpg';

const CarouselBootstrap = ({IconsTitle}) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex (selectedIndex);
  }


  return ( 
<Container fluid className='testimonials p-2 overflow-hidden' >
  <Col className='mt-1 mb-1 d-flex justify-content-center align-items-center'>
    <h1 className='mx-2'>Feedback</h1>
    <IconsTitle icon={IconCarousel}/>
  </Col>


    <Carousel activeIndex={index} 
    onSelect={handleSelect} 
    data-bs-theme='light' 
    wrap={false} 
    touch={true} 
    interval={null}
    aria-hidden={false}
    className=''>
      
      <Carousel.Item>
        <CarouselContent
          imgSrc={megat}
          caption = 
            {'"Nazirul was a pleasure to work with. His friendly approach and clear communication made collaboration easy."'}
          nameCaption={'Megat Zharif'}
          locationCaption={'Executive Bank Negara Malaysia'}
        />
      </Carousel.Item>

      <Carousel.Item>
        <CarouselContent
          imgSrc={eyra}
          caption = 
            {'"Amazing job on our website. Creativity and technical expertise made the site both beautiful and easy to use."'}
          nameCaption={'Syaheera'}
          locationCaption={'W&G CEO'}
        />
      </Carousel.Item>


    </Carousel>
</Container>

   );
}
 
export default CarouselBootstrap;