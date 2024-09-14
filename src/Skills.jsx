import {Row, Col, Container,Button,Overlay} from 'react-bootstrap';
import Developer from './Developer';
import Designer from './Designer';
import {IconVsCode,IconBootstrapFill, IconSquareGithub, IconFramer,IconReact,IconDesigner} from './Icons';
import { useState, useRef } from 'react';


const Skills = ({windowWidth,buttonRef,isClicked, setIsClicked,isClickedTwo,setIsClickedTwo,toggleLightMode, lightMode}) => {
  const Lines = () => {
    const verticalLine =  <div className="vr p-0"></div>;
    const horizontalLine = <hr></hr>;
  
    return windowWidth > 767 ? verticalLine : horizontalLine 
  }

  const iconSizeDesktop = windowWidth > 768;

  const IconSkills = ({icon:IconComponents}) => {
    return (
    <>
    <IconComponents widthHeight = {iconSizeDesktop? '100px' : '80px'} fill={lightMode? '#007567' : 'white'}/>
    </>
    )
  }
return (

<Container className="skills" >
  <Row className="g-1" >
    <Col>
      <Developer
        title={'Developer'}
        description=
        {'I enjoy building projects from the ground up and love transforming concepts into reality in the browser.'}
        titleWhatIDo={'Languages I speak:'}
        iDo={'HTML, CSS, Javascript, JSX, SASS, Git'}
        tools={'Tools:'}
        toolsList1={
        <IconBootstrapFill/> }
        {...{isClicked,setIsClicked,buttonRef,IconSkills,iconSizeDesktop}}
      />
    </Col>

  <Lines/>

  <Col>
    <Designer
        imgSrc={'src/images/designer-01.svg'}
        title={'Designer'}
        description=
        {' I prioritize straightforward content organization, minimalism, elegant design principles, and user experiences.'}
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