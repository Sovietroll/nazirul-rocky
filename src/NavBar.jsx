import './CSS.scss';
import { useState, useEffect } from 'react';
import {Row, Col, Container, Nav ,NavItem, Navbar, NavDropdown , NavLink, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Squeeze as Hamburger } from 'hamburger-react';


const NavBar = ({style}) => {
    const [isOpen, setOpen] = useState(false);/* burger icon animation */
    const [hamburgerOpen, setHamburgerOpen] = useState(false);/* toggle burger */
    const [click, setClick] = useState(false);

    const [scroll, setScroll] = useState(false);
    const disableScroll = () => document.body.style.overflow = "hidden";
    const enableScroll = () => document.body.style.overflow = "auto";

    const clicky = () => {
        setHamburgerOpen(!hamburgerOpen);
        setOpen(!isOpen);
        setScroll(!scroll);
        hamburgerOpen? enableScroll(): disableScroll();
    }


    const bar = [
        {
            title: 'Home',
            path: '/',
        }
        ,
        {
            title: 'Contact',
            path: '/contact'
        }
        ,
        {
            title: 'Experience',
            path: '/exprience'
        }
    
    ]
    const begeIcon = 
    <div className='div-burger-icon' 
        onClick={clicky} >
            <Hamburger toggled={isOpen} toggle={setOpen}/>
    </div>

    return (
        
    <Container fluid>

        <Row className='navbar-main'>

        <Col> {/*LOGO*/}
            
            <Link to = "/">
            <img className="lg" 
                src='src/images/lg.png' alt="logo" width={150}/>
            </Link>
            
        </Col>
        
        <Col className='test-row'>
        {bar.map((bars, index) => (
           <Col key={index}>
                   <Link to={bars.path}>{bars.title}</Link> 
           </Col>
        ))}
        </Col>



        <Col className=" col-2 col-lg-1 d-md-none"> {/* Hamburger */}

        <div className='div-burger'>
            {begeIcon} {/* HAMBURGER ICON */}
            <AnimatePresence>
                {hamburgerOpen && 
                (<motion.div 
                    initial= {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{duration: .3}}
                    exit= {{ 
                        opacity: 0,
                        transition: { ease: "linear", duration: .2}
                    }}
                    >
                    <div className= 'hamburgerListDown'>
                        <ul>
                            {bar.map((bars, index) => (
                            <li xs={3} key={index} className='navbar-center'>
                                <Link to={bars.path} onClick={clicky}>{bars.title}</Link>
                            </li>
                            ))
                            }
   
                        </ul>
                    </div> 
                </motion.div>)}
            </AnimatePresence>
        </div>

        </Col>
                 


        </Row>
    </Container>

    );
}
 
export default NavBar;