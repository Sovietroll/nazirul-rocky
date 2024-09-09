import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';


const SkillRowContent = ({imgSrc, title, description, titleWhatIDo, iDo, tools, toolsList1, toolsList2, toolsList3, toolsList4,toolsList5,iconSizeDesktop}) => {
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
  <Col  className="skills-col-3">
    <span>{tools}</span>
      <ul style={{listStyle: "none", padding: "0px"}}>
        <li>{toolsList1}</li>
        <li>{toolsList2}</li>
        <li>{toolsList3}</li>
        <li>{toolsList4}</li>
        <li>{toolsList5}</li>
    </ul>
  </Col>
  </Col>
  </Col>
</Col>
   );
}
 
export default SkillRowContent;