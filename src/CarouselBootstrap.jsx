import {Row, Col, Container,Button,Collapse, Fade, Carousel,} from 'react-bootstrap';
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState } from 'react';
import CarouselContent from './CarouselContent';
import {IconChatLeftQuoteFill} from './Icons';


const CarouselBootstrap = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex (selectedIndex);
  }


  return ( 
<Container fluid className='testimonials p-2 overflow-hidden' >
  
  <IconChatLeftQuoteFill className="text-black-200 quotes-icon" width='100px' height='60px'/>


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
          imgSrc={'src/images/megat.jpeg'}
          caption = 
            {'"He was a pleasure to work with. His friendly approach and clear communication made collaboration easy."'}
          nameCaption={'Megat Zharif'}
          locationCaption={'Executive Bank Negara Malaysia'}
        />
      </Carousel.Item>

      <Carousel.Item>
        <CarouselContent
          imgSrc={'src/images/eyra.jpg'}
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