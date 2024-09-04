import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import SkillRowContent from './SkillsRowContent';

const Skills = ({windowWidth}) => {


  const Lines = () => {
    const verticalLine =  <div className="vr p-0"></div>;
    const horizontalLine = <hr></hr>;
  
    return windowWidth > 767 ? verticalLine : horizontalLine 
  }

  const iconSizeDesktop = windowWidth > 768;


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
        toolsList1={'Bootstrap'}
        toolsList2={'Github'}
        toolsList3={'VS Code'}
        toolsList4={'Framer Motion'}
        iconSizeDesktop = {iconSizeDesktop}
      />

  <Lines/>

      <SkillRowContent
        imgSrc={'src/images/designer-01.svg'}
        title={'Designer'}
        description=
        {' I prioritize straightforward content organization, elegant design principles, and user experiences.'}
        titleWhatIDo={'Things I enjoy designing:'}
        iDo={'Poster, logo, photo manipulation, vector, video tribute'}
        tools={'Tools:'}
        toolsList1={'Photoshop'}
        toolsList2={'After Effect'}
        toolsList3={'Illustrator'}
        toolsList4={'Premiere'}
        toolsList5={'Lightroom'}
        // iconSizeDesktop = {iconSizeDesktop}
      />

  
    </Row>
  </Container>

    );
}
 
export default Skills;