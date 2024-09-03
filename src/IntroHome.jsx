import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';

const IntroHome = ({TransitionText,TitleStart,myPic}) => {
  return ( 
    <Row  className="mt-2 mb-2 gap-3 about-me-one justify-content-center align-items-center">
          
    <Col className="col-md-4" >

      <Col>
        <Col className="col-12">
          <Col className="">
            <TransitionText delay = {.5}>
                <h1 className="fs-4 "><span>Hi, I'm </span>Nazirul Syafiq</h1> {/* NAME */}
            </TransitionText> 
          </Col>

          <Col className="">
            <TitleStart  className="about-me-one-desc-selftaught fs-1"/> {/* ROLES */}
          </Col>
        </Col>


      </Col>
    </Col>

    <Col className="col-md-6 col-12">
      {myPic} {/* PIC */}
    </Col>

  </Row>
   );
}
 
export default IntroHome;