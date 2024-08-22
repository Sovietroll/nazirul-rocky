import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import twitter from 'react-useanimations/lib/twitter';



const Footer = () => {

  return ( 
    <Container fluid  className="footer" id="footer">


      <Row>

        <Col>
        <img className="lg" 
          src='src/images/lg.png' alt="logo" width={150} />
   
        <Col className=".col-sm-2"><p>A self-driven developer pursuing full-stack skills. [ongoing]</p></Col>

        <Row>
          <Col align="center"><UseAnimations animation={github} size={56} strokeColor="white"/></Col>
          <Col align="center"><UseAnimations animation={linkedin} size={56} strokeColor="white"/></Col>
          <Col align="center"><UseAnimations animation={twitter} size={56} strokeColor="white"/></Col>
        </Row>

        </Col>
        
      </Row>



    </Container>
   );
}
 
export default Footer;