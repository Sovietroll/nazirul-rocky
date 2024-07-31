
import useFadeIn from "./useFadeIn.jsx";

const AboutMe = () => {

  const visible = useFadeIn();

  return ( 
    <div className={`about-me ${visible ? 'visible' : ''}`}>
 

      <img src="src/images/me bubble head.png" alt="head" 
        className='bubbleHead'/>



      <div className={`about-me-Description ${visible? 'visible' : 'none'}`}>

        <ul>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, alias.
        </ul>

      </div>


    </div>
   );
}
 
export default AboutMe;