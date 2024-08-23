import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import twitter from 'react-useanimations/lib/twitter';
import { useState, useEffect } from 'react';


const Footer = () => {
  const [iconSize, setIconSize] = useState(56);

  const updateSize = () => {
    setIconSize(50);
  }
  const whiteColor = "white";

useEffect(() => {
  updateSize()
}, []);

  const links = [
    {
      id: 1,
      icon: <UseAnimations animation={github} size={iconSize} strokeColor={whiteColor}/>,
      url: "https://www.linkedin.com/in/nazirul-syafiq-young-rockie-359289311/",
    },
    {
      id: 2,
      icon: <UseAnimations animation={linkedin} size={iconSize} strokeColor={whiteColor}/>,
      url: 'https://github.com/Sovietroll/myblog',
    },
    {
      id: 3,
      icon: <UseAnimations animation={twitter} size={iconSize} strokeColor={whiteColor}/>,
      url: 'nazirulrocky@gmail.com'
    }
  ]
  return ( 
    <Container fluid  className="footer" id="footer">


      <Row>

        <Col>
        <img className="lg" 
          src='src/images/lg.png' alt="logo" width={150} />
   
        <Col className=".col-sm-2"><p>A self-driven developer pursuing full-stack skills. [ongoing]</p></Col>

        <Row>
        {links.map((link) =>(
            <Col align="center" key={link.id}>
              <a href={link.url}>

              {link.icon}

              </a>
            </Col>
          ))}
        </Row>

        </Col>
        
      </Row>



    </Container>
   );
}
 
export default Footer;