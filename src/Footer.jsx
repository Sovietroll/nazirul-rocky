import {Col, Row, Container} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import {IconLinkedin, IconEmailOutline, IconSquareGithub } from './Icons';

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

  const IconLink = ({icon: IconComponent, iconProps }) => (
    <Col align="center" className='col-4'>
    <a>
      <IconComponent {...iconProps} />
    </a>
    </Col>
  )

  const links = [

    {
      id:1,
      icon: IconLinkedin,
      iconProps: {
        color: 'white',
        height : isDesktop? '50px' : '40px',
        width: '100px',
        className: 'text-black-200'
      }
    }
    ,
    {
      id: 2,
      icon: IconEmailOutline,
      iconProps: {
        color: 'white',
        height : isDesktop? '50px' : '40px',
        width: '100px',
        className: 'text-black-200'
      }
    }
    ,
    {
      id: 3,
      icon: IconSquareGithub,
      iconProps: {
        color: 'white',
        height : isDesktop? '50px' : '40px',
        width: '100px',
        className: 'text-black-200'
      }
    }
  ];
  
  return ( 
    <Container fluid  className="footer mt-5" id="footer">


      <Row>

        <Col>
        <Col className=".col-sm-2"><p>A self-driven developer pursuing full-stack skills. [ongoing]
        </p>
        </Col>

        <Row>
          
        {links.map((link) => (
          <IconLink
            key={link.id}
            icon={link.icon}
            iconProps={link.iconProps}
          />
          ))}
          
        </Row>

        </Col>
        
      </Row>



    </Container>
   );
}
 
export default Footer;