import { Col } from 'react-bootstrap';

const CarouselContent = ({imgSrc, caption, nameCaption, locationCaption}) => {
  return ( 

    <Col className='carousel-container fw-normal'>
    <div className='mb-3 mt-3'>
      <img src={imgSrc} className='img-carousel rounded-circle m-2 '/>
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
