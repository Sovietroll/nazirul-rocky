import {useState} from 'react'
import {color, motion, useAnimationControls,useSpring, AnimatePresence } from "framer-motion";
import {Row, Col, Container,Button, Fade} from 'react-bootstrap';

const Collapse = ({isOpen,setIsOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);

  const handleOpening = () =>{
    setIsOpen((prev) => !prev);
    console.log(isOpen)
  }

  const variant = {
   hide: {
    opacity: 0,
    y: -50
   },
   appear: {
    opacity: 1,
    y: 0
   }
  }



  return ( 
   <>
   
    <div className='card'>
      <button type='button' onClick={handleOpening}>
        {isOpen ? 'now open' : 'now closed'}
      </button>
    </div>


  <AnimatePresence>

{isOpen &&  <motion.div
    variants={variant}
    initial={isOpen? 'hide' : 'appear'}
    animate={isOpen? 'appear' : 'hide'}
    exit={'hide'}
    transition = {{ease: 'easeInOut',
    }}
    className='fs-6'
  >
          In 2023, I started building a custom website on WordPress for fun and quickly got hooked on coding. Now, I'm learning different languages and tools to become a Front-End Developer, with the goal of eventually becoming a Full-Stack Developer.
  </motion.div>}
  
  </AnimatePresence>


   </> 

   );
}
 
export default Collapse;