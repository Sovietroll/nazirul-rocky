import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const CarouselBootstrap = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex (selectedIndex);
  }

  const images = [
   {
    id: 0, 
    loc: 'src/images/me.jpg',
    width: '100px',
    bd: "100%"
  },
  {
    id: 1,
    loc: 'src/images/pp.webp',
    width: '100px',
    bd: '100%'
  }
  ]

  const imageOne = 
  <>
    <div className=''>
    {images.map((img) => (
      <img
        key={img.id}
        src={img.loc}
        style={{width: img.width, borderRadius: img.bd}}
      />
    ))}
    </div>
    <div>
      <p className='fs-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, architecto.</p>
      <h5>Nia Irwan</h5>
      <p className='fs-6'>7Eleven staff</p>
    </div> 
  </>
  return ( 

    <Carousel activeIndex={index} 
    onSelect={handleSelect} 
    data-bs-theme='light' 
    wrap={false} 
    touch={true} 
    interval={null}
    className='mb-4 p-4'>
      <Carousel.Item className=''>
        {imageOne}
      </Carousel.Item>
      
      <Carousel.Item className=''>
        {imageOne}
        {/* <div className=''><img src='src/images/me.jpg' style={{width: "200px", borderRadius: "100%"}}/></div>
          <div>
            <p className='fs-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, architecto.</p>

            <h5>Babysuji</h5>
            <p className='fs-6'>7Eleven staff</p>
          </div> */}
      </Carousel.Item>
    </Carousel>

  // <div id='carouselExample' className="carousel slide" style={{backgroundColor: "green"}}>
  //   <div className='carousel-inner'>

  //       <div className='carousel-item'>
  //         <img src='src/images/pp.webp' style={{ width: "100px"}} className='d-block w-10' id={1}/>
  //         <h5>1st img</h5> <p>First slide</p>
  //       </div>

  //       <div className='carousel-item active'>
  //         <img src='src/images/me.jpg' style={{ width: "100px"}} className='d-block w-10' id={2}/>
  //         <h5>2nd img</h5> <p>Second slide</p>

  //   </div>

  //     <button className='carousel-control-prev' type='button' data-bs-target="#carouselExample" data-bs-slide="prev">
  //       <span className='carousel-control-prev-icon' aria-hidden="true"></span>
  //       <span className='visually-hidden'>Previous</span>
  //     </button>

  //     <button className='carousel-control-next' type='button' data-bs-target="#carouselExample" data-bs-slide="next">
  //       <span className='carousel-control-next-icon' aria-hidden="true"></span>
  //       <span className='visually-hidden'>Next</span>
  //     </button>
  //   </div>
    
  // </div>


   );
}
 
export default CarouselBootstrap;