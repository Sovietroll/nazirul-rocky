import {Row, Col, Container,Button,Collapse, Fade} from 'react-bootstrap';

const Contact = () => {


  const testimonies = [
    {
      id: 1,
      name: 'megat',
      comment: 'I am megat',
      pic: 'src/images/pp.webp'
    },
    {
      id: 2,
      name: 'eyra',
      comment: 'I am eyra',
      pic: 'src/images/pp.webp'
    }
  ]

  const ContainerTestimonies = ({name, comment, pic}) => (
    <Col>
      <div>
        <img src={pic} alt={name} style={{width: "100px"}}/>
        <p>{name}</p>
        <p>{comment}</p>
      </div>
  </Col>
  )
  
  return ( 
    <Container fluid>
      
      <Row>
        <h1>TESTIMONIALS</h1>
        <Col>
          {testimonies.map((test) => (
            <ContainerTestimonies
              key={test.id}
              name={test.name}
              comment={test.comment}
              pic={test.pic}
              />  
          ))}
        </Col>
      </Row>

    </Container>
   );
}
 
export default Contact;