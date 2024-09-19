import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';

const IntroHome = ({TransitionText}) => {



  const greeting = 
  <TransitionText delay = {.5}>
  <h1 className="fs-1">

    <span className='fw-bold'>Hello, I'm </span> <br/>
    <span className='fs-2'>Nazirul Syafiq</span>
    
  </h1>
  </TransitionText>; 

  return ( 
<Container fluid className='my-4'>
  <Row>



    <Col className='f-1 col-12'>
    {greeting}
    </Col>
    

    <Col className='col-12'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium non est ex similique nisi cupiditate error ratione fuga inventore!
    </Col>


 
 
    



  </Row>
</Container>
   );
}
 
export default IntroHome;