import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';

const Skills = ({windowWidth}) => {


  const Lines = () => {
    const verticalLine =  <div className="vr p-0"></div>;
    const horizontalLine = <hr></hr>;
  
    return windowWidth > 500 ? verticalLine : horizontalLine 
  }

  return (

    <Container className="skills" >

    <Row className="g-1" >

    <Col className="skills-col" >

          <Col>
            <img src="src/images/codeIcon.png" className="img-skills"/>
          </Col >

          <Col className="skills-col-1">
            Developer
          </Col >

          <Col className="skills-col-1-desc text-wrap 
          fs-6
         ">
           I enjoy building projects from the ground up and love transforming concepts into reality in the browser.
          </Col>

          <Col className="skills-col-2">
            <Col>
            <span style={{color: "pink"}}
              className=""
            >
              Languages I speak:</span>
              <Col>
                HTML, CSS, Javascript, JSX, SASS, Git
              </Col>

              <Col  className="skills-col-3">
              <span>Dev Tools:</span>
              <ul style={{listStyle: "none", padding: "0px"}}>
                <li>Bootstrap</li>
                <li>Github</li>
                <li>VS Code</li>
                <li>Framer Motion</li>
              </ul>
            </Col>

            </Col>

          </Col>
    
    </Col>
 
      <Lines/>


    <Col className="skills-col" id="test">

          <Col>
            <img src="src/images/designerIcon.png" className="img-skills"/>
          </Col>
        
          <Col className="skills-col-1" >
            Designer
          </Col >

          <Col  className="skills-col-1-desc">
            I prioritize straightforward content organization, elegant design principles, and user experiences.
          </Col>

          <Col className="skills-col-2">
            <Col>
              <span style={{color: "pink"}}>Things I enjoy designing</span>
              <Col>
                Poster, logo, photo manipulation, vector, video tribute 
              </Col>
              <Col className="skills-col-3">
              <span>Tools:</span>
                <ul style={{listStyle: "none", padding: "0px"}}>
                  <li>Photoshop</li>
                  <li>After Effect</li>
                  <li>Illustrator</li>
                  <li>Premiere Pro</li>
                  <li>Lightroom</li>
                </ul>
              </Col>
            </Col>
          </Col>
          </Col>
    

    </Row>
  </Container>

    );
}
 
export default Skills;