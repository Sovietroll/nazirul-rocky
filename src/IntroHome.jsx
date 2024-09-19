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



    <Col className='f-1 col-12 col-md-6 text-start'>
    {greeting}

    A self-taught web developer with a strong passion for creating tailored, innovative digital solutions!
    </Col>
    

    <Col className='col-12 col-md-6'>
    sdsdsd
    </Col>


 
 
    



  </Row>
</Container>
   );
}
 
export default IntroHome;