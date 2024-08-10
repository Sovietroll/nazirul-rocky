import './CSS.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";

const NavBar = () => {


  const bar = [
    {
        title: 'Home',
        path: '/home',
    }
    ,
    {
        title: 'About me',
        path: '/about',
    }
    ,
    {
        title: 'Contact',
        path: '/contact'
    }
    ,

]
    
    return (
    <Container fluid>
        <Row className='navbar-main'>
        
        
            <Col>
                <div
                    className="lg-container">
                    <img className="lg" 
                    src='src/images/lg.png' alt="logo" width={150} />
                    {/* <Route>
                        <Redirect to= "/home"/>
                    </Route> */}
                </div>
            </Col>
            
             
            {/* {bar.map((bars, index) => (
                <Col  xs={3} key={index}
                className='navbar-center'>
                    <Link
                        to={bars.path}
                        
                    >
                        {bars.title}
                    </Link>
                </Col>
            ))
            } */}

        <Col>
            <p>
                burger here
            </p>
        </Col>

        <Col>
            <div className='icon-container'>
                <FontAwesomeIcon icon={faMoon} inverse className="icon"/>
            </div>
        </Col>
        
        </Row>
    </Container>

    );
}
 
export default NavBar;