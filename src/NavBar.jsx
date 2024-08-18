import './CSS.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import {Row, Col, Container, Nav ,NavItem, Navbar, NavDropdown , NavLink, Dropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

import { Squeeze as Hamburger } from 'hamburger-react'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const [checked, setChecked] = useState(true);

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
const burger = <Hamburger toggled={isOpen} toggle={setOpen} />
    
    return (
        
    <Container fluid>

        <Row className='navbar-main'>

            <Col> {/*LOGO*/}
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

        <Col> {/* Navbar */}
    <Navbar variant="dark" expand="lg">
      <Container>
        
        {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbar-dark-example" />

        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <Dropdown.Item href="#/action-1" active>
            Action
            </Dropdown.Item>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
        </Col>
                 


        </Row>
    </Container>

    );
}
 
export default NavBar;