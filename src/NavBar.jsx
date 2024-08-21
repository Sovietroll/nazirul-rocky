import './CSS.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import {Row, Col, Container, Nav ,NavItem, Navbar, NavDropdown , NavLink, Dropdown} from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";
import { Squeeze as Hamburger } from 'hamburger-react';
import BurgerMenu from './BurgerMenu.jsx';

const NavBar = ({style}) => {
    const [isOpen, setOpen] = useState(false);/* burger icon animation */
    const [hamburgerOpen, setHamburgerOpen] = useState(false);/* toggle burger */
    const [click, setClick] = useState(0);

    // * Prevent scrolling
    isOpen? document.body.style.overflow = "hidden": document.body.style.overflow = "auto";

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    // const burgerburgerMenu = 
    //     hamburgerOpen? (
    //         document.body.style.overflow = "hidden",
    //         <motion.div 
    //             initial= {{opacity: 0}}
    //             animate = {{opacity: 1}}
   
    //         >
    //             <BurgerMenu/>
    //         </motion.div>
    //     ) :
    //     (
    //         document.body.style.overflow = "auto"
    //     );
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

            <Col> {/*LOGO*/}
                
                    
                    <img className="lg" 
                    src='src/images/lg.png' alt="logo" width={150} />
                
            </Col>
            

        <Col className=" col-2 col-lg-1 d-md-none"> {/* Hamburger */}

        <div className=''>
            <div onClick={toggleHamburger} style={{zIndex: 100}}><Hamburger toggled={isOpen} toggle={setOpen}/></div>
            <AnimatePresence>
                {hamburgerOpen && (<motion.div 
                initial= {{opacity: 0,
                    // x:100

                }}
                
                animate = {{
                    opacity: 1.,
                    // x:0
                    // filter: "blur(5px)",
                 }}
                exit= {{ 
                    opacity: 0,
                    // filter: "blur(5px)",
                    transition: { ease: "easeIn"}
                 }}
                >
                    <BurgerMenu hamburgerOpen = {hamburgerOpen}/>   
                </motion.div>)}
            </AnimatePresence>
            {/* {hamburgerOpen && burgerburgerMenu} */}
        </div>

        </Col>
                 


        </Row>
    </Container>

    );
}
 
export default NavBar;