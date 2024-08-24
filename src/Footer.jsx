import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import twitter from 'react-useanimations/lib/twitter';
import { useState, useEffect } from 'react';


const Footer = () => {

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
  
  useEffect(()=> {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  },[matches,query])

  return matches
}

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const IconLink = ({icon: IconComponent, iconProps, url, }) => (
    <Col align="center">
    <a href={url}>
      <IconComponent {...iconProps} />
    </a>
  </Col>
  )
  const whiteColor = "white";

  const links = [
    {
      id: 1,
      icon: UseAnimations,
      iconProps: {
         animation: github, 
         size: isDesktop? 80: 50,
         strokeColor: whiteColor, 
         className: 'icon' },
      url: "https://www.linkedin.com/in/nazirul-syafiq-young-rockie-359289311/",
    },
    {
      id: 2,
      icon: UseAnimations,
      iconProps: { animation: linkedin, size: isDesktop? 80: 50, strokeColor: whiteColor, className: 'icon' },
      url: 'https://github.com/Sovietroll/myblog',
    },
    {
      id: 3,
      icon: UseAnimations,
      iconProps: { animation: twitter, size: isDesktop? 80: 50, strokeColor: whiteColor, className: 'icon' },
      url: 'nazirulrocky@gmail.com'
    }
  ];
  
  return ( 
    <Container fluid  className="footer" id="footer">


      <Row>

        <Col>
        <img className="lg" 
          src='src/images/lg.png' alt="logo" width={150} />
   
        <Col className=".col-sm-2"><p>A self-driven developer pursuing full-stack skills. [ongoing]</p>
        </Col>

        <Row>
        {links.map((link) =>(
          <IconLink
            key={link.id}
            icon={link.icon}
            iconProps={link.iconProps}
            url={link.url}
          />
          ))}
        </Row>

        </Col>
        
      </Row>



    </Container>
   );
}
 
export default Footer;