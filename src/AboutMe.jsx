
import useFadeIn from "./useFadeIn.jsx";
import { motion } from "framer-motion";

const AboutMe = () => {

  const visible = useFadeIn();

  return ( 
    <div className={`about-me ${visible ? 'visible' : ''}`}>
 

      <img src="src/images/me bubble head.png" alt="head" 
        className='bubbleHead'/>


      <motion.div animate={{ x:100 }} />
      <div className= 'about-me-Description'>
        <ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, alias.
        </ul>
      </div>


    </div>
   );
}
 
export default AboutMe;