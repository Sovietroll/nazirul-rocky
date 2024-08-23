import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';

const Contact = () => {


  const links = [
    {
      site: "Linkedin",
      url: "https://www.linkedin.com/in/nazirul-syafiq-young-rockie-359289311/",
    },
    {
      site: 'Github',
      url: 'https://github.com/Sovietroll/myblog',
    },
    {
      site: 'email',
      url: 'nazirulrocky@gmail.com'
    }
  ]


  return ( 
    <>
    <Container fluid>
      
      <Row>
        <h1>CONTACT HERE</h1>
      </Row>
    </Container>
    </>
   );
}
 
export default Contact;