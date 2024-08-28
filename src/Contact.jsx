import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';
import Carousel from './Carousel';
import CarouselBootstrap from './CarouselBootstrap';

const Contact = () => {


  

  const images = [
    'src/images/pp.webp',
    'src/images/me.jpg'
  ]
  
  return ( 
    <Container fluid className='testimonials'>
      <h1>Testimonials</h1>
      <h5>Peple I've worked with have said some nice things...</h5>

    <CarouselBootstrap/>
    {/* <Carousel images={images}/> */}
      
      {/* <Row>
        <h1>TESTIMONIALS</h1>
        <Col>
          {testimonies.map((test) => (
            <ContainerTestimonies
              key={test.id}
              name={test.name}
              comment={test.comment}
              pic={test.pic}
              />  
          ))}
        </Col>
      </Row> */}

    </Container>
   );
}
 
export default Contact;