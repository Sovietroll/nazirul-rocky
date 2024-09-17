import {Col, Row, Container} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import {IconLinkedin, IconEmailOutline, IconGithub } from './Icons';

const Footer = ({}) => {

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

  const IconLink = ({icon: IconComponent, url }) => (
    <Col align="center" className='col-4'>
    <a href={url}>
      <IconComponent height={isDesktop? '50px' : '40px'} color='white' width='100px' className='footer-icons'/>
    </a>
    </Col>
  )

  const links = [

    {
      id:1,
      icon: IconLinkedin,
      url: 'https://www.linkedin.com/in/nazirul-syafiq-young-rockie-359289311/',

    }
    ,
    {
      id: 2,
      icon: IconEmailOutline,
      url:'mailto:nazirulrocky@gmail.com',

    }
    ,
    {
      id: 3,
      icon: IconGithub,
      url: 'https://github.com/Sovietroll',

    }
  ];
  
  return ( 
    <Container fluid className="footer p-2" id="footer">

       <Col className="col-12 mb-2 mt-4 fw-light">Website design and code by 
        <br/>
          <span className='footer-name'>nazirul rocky</span>
        </Col>
     
        <Col className='col-12 d-flex mt-4 mb-4'>
          
        {links.map((link) => (
          <IconLink
            key={link.id}
            icon={link.icon}
            url={link.url}
          />
          ))}
          
        </Col>

       
     



    </Container>
   );
}
 
export default Footer;