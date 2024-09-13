import {Row, Col, Container,Button,Overlay} from 'react-bootstrap';
import SkillRowContent from './SkillsRowContent';
import SkillRowContentTwo from './SkillsRowContentTwo';
import {IconVsCode,IconBootstrapFill, IconSquareGithub, IconFramer,IconReact} from './Icons';
import { useState, useRef } from 'react';


const Skills = ({windowWidth,isClicked,setIsClicked,buttonRef}) => {
  const Lines = () => {
    const verticalLine =  <div className="vr p-0"></div>;
    const horizontalLine = <hr></hr>;
  
    return windowWidth > 767 ? verticalLine : horizontalLine 
  }

  const iconSizeDesktop = windowWidth > 768;

  const Icons = [
    {
      id: 1,
      label: 'Bootstrap',
      seticon: <IconBootstrapFill/>
    }
    ,
    {
      id: 2,
      label: 'Github',
      seticon: <IconSquareGithub/>
    }
  ]
  const [selected, setSelected] = useState(Icons[0]);

  const renderIcons = 
    <>
    {Icons.map((icon) => (
  <div 
    key={icon.id} 
    className={icon.id === selected.id ? 'test' : ''}
    onClick={() => setSelected(icon)}
  >
    {icon.seticon}
    {/* {icon.id === selected.id && <p>{icon.label}</p>} */}
    </div>
    ))}

    {selected && (<div>{selected.label}</div>)}

    </>

return (

  <Container className="skills" >

    <Row className="g-1" >
      <SkillRowContent
        imgSrc={'src/images/code-01.svg'}
        title={'Developer'}
        description=
        {'I enjoy building projects from the ground up and love transforming concepts into reality in the browser.'}
        titleWhatIDo={'Languages I speak:'}
        iDo={'HTML, CSS, Javascript, JSX, SASS, Git'}
        tools={'Dev Tools:'}
        toolsList1={
        <IconBootstrapFill/> }
        toolsList2={<IconSquareGithub/>}
        toolsList3={<IconVsCode/>}
        toolsList4={<IconFramer/>}
        toolsList5={<IconReact/>}
        iconSizeDesktop = {iconSizeDesktop}
        {...{isClicked,setIsClicked,buttonRef}}
      />

  <Lines/>

      <SkillRowContentTwo
        imgSrc={'src/images/designer-01.svg'}
        title={'Designer'}
        description=
        {' I prioritize straightforward content organization, elegant design principles, and user experiences.'}
        titleWhatIDo={'I can design:'}
        iDo={'Poster, logo, photo manipulation, vector, video ads'}
        tools={'Tools:'}
        toolsList1={'Photoshop'}
        toolsList2={'After Effect'}
        toolsList3={'Illustrator'}
        toolsList4={'Premiere'}
        toolsList5={'Lightroom'}
        iconSizeDesktop = {iconSizeDesktop}
      />

  
    </Row>
  </Container>

    );
}
 
export default Skills;