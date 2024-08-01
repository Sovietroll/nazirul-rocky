import {motion} from "framer-motion";
import TransitionText from "./TransitionText";

const AboutMe = () => {


  return ( 

    <div className={`about-me`}>
      
      <motion.div
        initial ={{scale: 1.2, y: 10}}
        animate={{scale:1, y: 0}}
        transition={{
        ease: "linear",
        duration: .4}}>
          <img src="src/images/me bubble head.png" alt="head" 
            className='bubbleHead'/>
      </motion.div>

      <TransitionText>

          <div className= 'about-me-Description'>
            <p>My name is</p>  
              <TransitionText delay = {.5}>
                  <p>Nazirul Syafiq bin Young Rockie.</p>
              </TransitionText> 
          </div>

      </TransitionText>
    </div>

   );
}
 
export default AboutMe;