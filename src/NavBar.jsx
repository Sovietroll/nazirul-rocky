import './assets/css/style.scss';


import { useState, useEffect } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { motion, AnimatePresence,useScroll,useTransform,useViewportScroll   } from "framer-motion";
import { Squash  as Hamburger } from 'hamburger-react';
import { Link as ScrollTo, animateScroll as Scroll,scrollSpy  } from 'react-scroll';
import {IconFontLogo,MyLogo} from './Icons';
import LightModeSwitch from './LightModeSwitch';

const NavBar = ({toggleDarkMode, setDarkMode, isDarkMode}) => {
    const [isOpen, setOpen] = useState(false);/* burger icon animation */
    const [hamburgerOpen, setHamburgerOpen] = useState(false);/* toggle burger */
    const [click, setClick] = useState(false);


    const ScrollLink = Scroll.ScrollLink;

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
            title: 'Expertises',
            className: 'skills'
        }
        ,
        {
            title: 'My Journey',
            className: 'experiences'
        }
        ,
        {
            title: 'Feedback',
            className: 'testimonials'
        }
    ]
    const begeIcon = 
    <div onClick={clicky}>
            <Hamburger rounded toggled={isOpen} toggle={setOpen} color='white' size={25}/>
    </div>


// !--------------------RETURN------------------------
return (
        
    <Container fluid className={hamburgerOpen? 'navbar-main-open' : 'navbar-main-closed'} >

        <Row className='d-flex p-1 row-navbar' >

        <Col className='col-md-3 col-6 d-flex justify-content-center fw-bold logo-name'> 

        <IconFontLogo fill='white' width='200px'/>

        <motion.div
            animate={{ 
                rotate: [180,270,0], 
                scale: [0,2,1]}}
            transition={{
                delay: .5,  
                type: "spring",
                stiffness: 150 
            }}
            whileTap= {{
                rotate: 2
            }}
            className='d-flex justify-content-center mx-1 align-items-center'
        >
        <MyLogo widthHeight={'30px'}/>
        </motion.div> 

        </Col>

        <Col className='col-md-6 d-md-flex d-none justify-content-center align-items-center'>   
        {bar.map((bars, index) => (
           <Col key={index}>
                   <ScrollTo to={bars.className} spy={true} smooth={true} offset={-50} duration={10}>
                    <Col>
                    {bars.title}
                    
                    </Col>
                    </ScrollTo> 
           </Col>
        ))}
        </Col>

        <Col className='col-md-2 col-4 justify-content-end align-items-center d-flex ps-1'>
            <LightModeSwitch {...{toggleDarkMode, isDarkMode, setDarkMode}} onClick={() => toggleDarkMode()}/>
        </Col>

        <Col className="col-2 d-md-none justify-content-center d-flex"> {/* Hamburger */}

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
                            <li xs={3} key={index} className='hamburger-center'>
                                <ScrollTo to={bars.className} spy={true} smooth={true} offset={-50} duration={10} onClick={clicky}>{bars.title}</ScrollTo>
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