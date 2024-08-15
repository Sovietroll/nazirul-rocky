import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
// import { Player } from '@lordicon/react';


const Footer = () => {

  return ( 
    <Container fluid  className="footer">


      <Row>

        <Col><p>LOGO</p>
        {/* <lord-icon
    src="https://cdn.lordicon.com/rehjpyyh.json"
    trigger="hover"
    style={{width:"1000px",height:"1000px"}}>
</lord-icon> */}
        <Col className=".col-sm-2"><p>A self-driven developer pursuing full-stack skills.</p></Col>

        <Row>
          <Col>logo</Col>
          <Col>logo</Col>
          <Col>logo</Col>
        </Row>

        </Col>
        
      </Row>



    </Container>
   );
}
 
export default Footer;