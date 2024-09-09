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
          imgSrc={'src/images/pp.webp'}
          caption = 
            {'"Saya suka bini orang."'}
          nameCaption={'Megat'}
          locationCaption={'Bank Negara Malaysia Officer'}
        />
      </Carousel.Item>

      <Carousel.Item>
        <CarouselContent
          imgSrc={'src/images/pp.webp'}
          caption = 
            {'"Saya kaki lipaq tapi Nazirul hensem."'}
          nameCaption={'Fariq'}
          locationCaption={'7e Staff'}
        />
      </Carousel.Item>


    </Carousel>
</Container>

   );
}
 
export default CarouselBootstrap;