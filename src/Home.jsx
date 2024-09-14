import {AnimatePresence, color, motion, useAnimationControls,useSpring } from "framer-motion";
import TransitionText from "./TransitionText";
import MotionFlip from "./MotionFlip";
import {useEffect, useState, useRef, useCallback} from 'react';
import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import './CSS.scss';
import Skills from './Skills';
import Experiences from './Experiences'
import IntroHome from './IntroHome';
import Text from './Text';
import CarouselBootstrap from "./CarouselBootstrap";


const Home = ({windowWidth,buttonRef}) => {

  const [hover, setHover] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Self Learn Dev","Graphic Designer", "Video Editor", "Motion Graphic"];
  // const [windowWidth, setWindowWidth] = useState(0);
  const [matches, setMatches] = useState(false);

  // const buttonRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  

  const windowScrollTo = () => {
    window.scrollTo(0,0);
  }

  const floating = {
    position: 'sticky',
    top: 0
  }
  
const animationDuration = () =>{
  controls.start('move');
  const animation = setInterval(() => {
    controls.start("dont");
    clearInterval(animation);
  },500)
  
  }

  // const handleWindowResize = useCallback(event => {
  //   setWindowWidth(window.innerWidth);
  // })

  const darkModeToggle = ({color}) => {
    document.body.style.backgroundColor = {color};
  }
  //! USEFFECT
  // useEffect(() => {
  //   handleWindowResize();
  //   window.addEventListener('resize', handleWindowResize);
  //   const handleClickOutside = (event) => {
  //     setIsClicked(false);
  //     setIsClickedTwo(false);
  //   }
  //   document.addEventListener('mousedown', handleClickOutside);
  //   // document.body.style.backgroundColor = 'white';

  
  //   return() => {
  //     window.removeEventListener('resize', handleWindowResize)
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // },[handleWindowResize][buttonRef]);

  const TitleStart  = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key={titleIndex}
          initial={{y:-10, opacity: 0}}
          animate={{y:0, opacity: 1}}
          exit={{x: -10, opacity: 0, transition: 'ease', duration: .1}}
          className="titleIndex"
        >
         {titles[titleIndex]}
        </motion.div>
      </AnimatePresence>
    )
  }


const myPic = 
  <motion.div
  initial ={{scale: 1.2, y: 10}}
  animate={{scale:1, y: 0}}
  transition={{
  ease: "linear",
  duration: .4}}>
    <img  src="src/images/me.jpg" className="img-me rounded img-fluid img-responsive"
    />
  </motion.div>



const IconsTitle = ({icon: IconComponents}) => {
 return (
  <>
  <IconComponents width='40px' height='40px' fill='orange'/>
  </>
 )
}
 
//!-----------RETURN---------------

return ( 
<Container  className={`about-me`}>

  <IntroHome {...{ TransitionText, TitleStart, myPic }} />
                  
  <Text/>

    {/* <hr className="line border-1 rounded"></hr> */}

  <Skills {...{ isClicked, setIsClicked,isClickedTwo,setIsClickedTwo}}/>
  
    {/* <hr className="line border-1 rounded"></hr> */}
  
  <Experiences  {...{windowWidth,IconsTitle}}/>
  
    <hr className="line border-1 rounded"></hr>

  <CarouselBootstrap IconsTitle={IconsTitle} />

</Container>
   );
}
 
export default Home;