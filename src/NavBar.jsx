import './CSS.scss';
import { useState, useEffect } from 'react';
import {Row, Col, Container, Nav ,NavItem, Navbar, NavDropdown , NavLink, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Squeeze as Hamburger } from 'hamburger-react';
import { Link as ScrollTo, animateScroll as Scroll } from 'react-scroll';

const NavBar = ({style}) => {
    const [isOpen, setOpen] = useState(false);/* burger icon animation */
    const [hamburgerOpen, setHamburgerOpen] = useState(false);/* toggle burger */
    const [click, setClick] = useState(false);

    // const ScrollLink = Scroll.ScrollLink;

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
            title: 'Skills',
            className: 'skills'
        }
        ,
        {
            title: 'Testimonials',
            className: 'testimonials'
        }
        ,
        {
            title: 'Experience',
            className: 'experiences'
        }
    
    ]
    const begeIcon = 
    <div className='div-burger-icon' 
        onClick={clicky} >
            <Hamburger toggled={isOpen} toggle={setOpen}/>
    </div>
// !--------------------RETURN------------------------
return (
        
    <Container fluid className='navbar-main' style={{backgroundColor: 'orange'}}>

        <Row className='d-flex ' /* style={{backgroundColor: "purple", border: '1px', borderStyle: 'solid'}} */>



        <Col className='col-9 col-md-6'> {/*LOGO*/}
            
            <img className="lg" 
                src='src/images/lg.png' alt="logo" width={150}
                onClick = {() => {window.scrollTo(0,0);}}
                />
            
        </Col>

        
        <Col className='d-md-flex d-none justify-content-center align-items-center'>
        {bar.map((bars, index) => (
           <Col key={index}>
                   <ScrollTo to={bars.className} spy={true} smooth={true} offset={-150} duration={10}>
                    <Col>
                    {bars.title}
                    
                    </Col>
                    </ScrollTo> 
           </Col>
        ))}
        </Col>

{/* ---------------------HAMBURGER------------------------------ */}

        <Col className="col-2 col-md-2 d-md-none flex-shrink-1 "> {/* Hamburger */}

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
                    <div className= 'hamburgerListDown '>
                        <ul>
                            {bar.map((bars, index) => (
                            <li xs={3} key={index} className='navbar-center'>
                                <ScrollTo to={bars.className} spy={true} smooth={true} offset={-150} duration={10} onClick={clicky}>{bars.title}</ScrollTo>
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