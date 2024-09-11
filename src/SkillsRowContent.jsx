import {Row, Col, Container,Button, Popover,OverlayTrigger,Tooltip ,Overlay  } from 'react-bootstrap';
import { useState, useRef } from 'react';

const SkillRowContent = 
  ({imgSrc, title, description, titleWhatIDo, iDo, tools, toolsList1, toolsList2, toolsList3, toolsList4,toolsList5,iconSizeDesktop}) => {
 

    const Link = ({ id, children, title }) => (
      <OverlayTrigger 
        overlay={
        <Tooltip id={id}>{title}</Tooltip>
      }
      >
        <div className='tooltip-two'>
        {children}
        </div>
      </OverlayTrigger>
    );

  return ( 
    <Col className="skills-col" >

  <Col className='col-12'>
   <img src={imgSrc} className='icon-skills'/>
  </Col >

  <Col className="skills-col-1 fs-2 fw-bold col-12">
    {title}
  </Col >

  <Col className="skills-col-1-desc text-wrap 
  fs-6 col-12 mb-2 mt-2
  ">
    {description}
  </Col>
  <Col className="skills-col-2">
    <Col>
     <span className="fw-bold skills-title-do">
      {titleWhatIDo}</span>
    <Col>
      {iDo}
    </Col>
  <Col  className="skills-col-3 skills-ul">
    <span>{tools}</span>

   
    
      <ul 
      style={{listStyle: "none"}}
      className='d-flex justify-content-center p-0'
      >
         <Link title="Bootstrap" id="1">
         <li>{toolsList1}</li>
        </Link>
        <Link title="Github" id="2">
         <li>{toolsList2}</li>
        </Link>
        <Link title="Visual Studio Code" id="3">
         <li>{toolsList3}</li>
        </Link>
        <Link title="Framer Motion" id="4">
         <li>{toolsList4}</li>
        </Link>
        <Link title="React" id="5">
         <li>{toolsList5}</li>
        </Link>
    </ul>
  </Col>
  </Col>
  </Col>
</Col>
   );
}
 
export default SkillRowContent;