import {Row, Col, Container,Button,Overlay} from 'react-bootstrap';
import Developer from './Developer';
import Designer from './Designer';
import {IconBootstrapFill,IconExpertise} from './Icons';
import { useState, useRef } from 'react';


const Skills = ({windowWidth,buttonRef,isClicked, setIsClicked,isClickedTwo,setIsClickedTwo,IconsTitle, isDarkMode}) => {
  const Lines = () => {
    const verticalLine =  <div className="vr p-0"></div>;
    const horizontalLine = <hr></hr>;
  
    return windowWidth > 767 ? verticalLine : horizontalLine 
  }

  const iconSizeDesktop = windowWidth > 768;

  const IconSkills = ({icon:IconComponents}) => {
    return (
    <>
    <IconComponents widthHeight = {iconSizeDesktop? '100px' : '80px'} fill={isDarkMode? 'white' : '#007567'}/>
    </>
    )
  }
return (

<Container className="skills" >
  <Row className="g-1" >
    <Col className='col-12 my-2 d-flex justify-content-center align-items-center'>
      <h1 className='mx-2 fw-bold '>Expertise</h1>  
      <IconsTitle icon={IconExpertise}/> 
    </Col>

    <Col>
      <Developer
        title={'Developer'}
        description=
        {'As a developer, I thrive on building projects from the ground up, transforming innovative concepts into fully functional and dynamic web experiences.'}
        titleWhatIDo={'Languages I speak:'}
        iDo={'HTML, CSS, Javascript, JSX, SASS, Git'}
        tools={'Tools:'}
        toolsList1={
        <IconBootstrapFill/> }
        {...{isClicked,setIsClicked,buttonRef,IconSkills,iconSizeDesktop}}
      />
    </Col>

  {/* <Lines/> */}

  <Col>
    <Designer
        imgSrc={'src/images/designer-01.svg'}
        title={'Designer'}
        description=
        {' I prioritize clear content organization, minimalist aesthetics, and elegant design principles, always with a focus on creating seamless and engaging user experiences.'}
        titleWhatIDo={'I can design:'}
        iDo={'Poster, logo, photo manipulation, vector, video ads'}
        tools={'Tools:'}
        {...{isClickedTwo,setIsClickedTwo,buttonRef,IconSkills,iconSizeDesktop,}}
      />
  </Col>



    </Row>
  </Container>

    );
}
 
export default Skills;