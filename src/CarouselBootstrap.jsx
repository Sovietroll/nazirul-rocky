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
<Container fluid className='testimonials p-2' >
  
  <IconChatLeftQuoteFill className="text-black-200" width='100px' height='60px' style={{color: "orange"}}/>


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
          imgSrc={'src/images/me.jpg'}
          caption = 
            {'Lorem ipsum dolor sit amet consectetur adipisicing elit Officii facere.'}
          nameCaption={'Nazirul'}
          locationCaption={'Front-End Developer'}
        />
      </Carousel.Item>

      <Carousel.Item>
        <CarouselContent
          imgSrc={'src/images/pp.webp'}
          caption = 
            {'Lorem ipsum dolor sit amet consectetur adipisicing elit Officii facere.'}
          nameCaption={'Fariq'}
          locationCaption={'7e Staff'}
        />
      </Carousel.Item>


    </Carousel>
</Container>

   );
}
 
export default CarouselBootstrap;