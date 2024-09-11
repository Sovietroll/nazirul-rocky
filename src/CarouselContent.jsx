import { Col } from 'react-bootstrap';

const CarouselContent = ({imgSrc, caption, nameCaption, locationCaption}) => {
  return ( 

    <Col className='carousel-container fw-normal mt-2'>
    <div className=''>
      <img src={imgSrc} className='img-carousel rounded-circle'/>
    </div>

      <p className='fs-6 mb-4 fw-light'>
        {caption}
      </p>

    <h5 className='fs-4 fw-bold carousel-name'>
       {nameCaption}
    </h5>
  
    <p className='fs-6 mb-4'>{locationCaption}</p>
  </Col>

   );
}
 
export default CarouselContent;
