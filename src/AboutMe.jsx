import {motion} from "framer-motion";
import TransitionText from "./TransitionText";
import {useState} from 'react';
// import { ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";


const AboutMe = () => {



const [hover, setHover] = useState(false);

const MouseHover = () => {
  const sum = hover? 
  (<motion.div style={{cursor: "pointer"}}
    initial = {{ opacity: 0, y: 10}}
    animate = {{opacity: 1, y: 0}}>
    Graphic Designer
  </motion.div>
    )
  : 
  (<motion.div
    initial = {{ opacity: 0, y: 10}}
    animate = {{opacity: 1, y: 0}}>
    Web Developer 
  </motion.div>)
    return sum
 }

const thisYear = new Date().getFullYear();

const YearTotal = ({yearThen, yearAfter}) => {
  const total = yearThen - yearAfter;  
  const sum = Math.abs(total);
  return(sum)
}


  return ( 

    <div className={`about-me`}>

      <div className="about-me-one">
        <div className= 'about-me-one-desc'>

          <TransitionText >

            <div 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="about-me-one-desc-selftaught"
            >
              <MouseHover />
              {/* GRAPHIC DESIGNER / SELF TAUGHT WEB DEVELOPER HERE */}
              </div> 

          </TransitionText>

          <TransitionText delay = {.5}>
              <p 
                style={{color: "grey"}}>Nazirul Syafiq bin Young Rockie.</p>
          </TransitionText> 
          </div>
          <motion.div
            initial ={{scale: 1.2, y: 10}}
            animate={{scale:1, y: 0}}
            transition={{
            ease: "linear",
            duration: .4}}>
              <img src="src/images/me bubble head.png" alt="head"
              style={{width: "400px"}} 
                className='bubbleHead'/>
          </motion.div>


      </div>

      arrow here

      <TransitionText
      style={{marginTop: "50px"}}>

        


          <div className="about-me-section-container">

          < img src="src/images/01G1.png" style={{width: "400px", backgroundColor: "white"}}/>
          
          <div className="about-me-section-container-body">
            <h1>My Experiences</h1>
                <section>
                  <h2>Graphic Designer cum Video Editor cum Motion Graphic</h2>
                  <h3>2021 - 2024 {'\u00B7'} <YearTotal yearThen = {2021} yearAfter={2024}/> years </h3>

                    <ul>
                      <li>Create digital content</li>
                      <li>Create visually appealing design for various mediums</li>
                      <li>Collaborate with clients or project managers</li>
                      <li>Utilize WorPress to manage and update website content</li>
                    </ul>
                </section>

                <section>
                  <h2>Career Break</h2>
                  <h3>2021 - 2024 {'\u00B7'} <YearTotal yearThen = {2020} yearAfter={2021}/> year </h3>
                  <p>Opened my first ever agriculture company</p>
                </section>

                <section>
                  <h2>Graphic Designer</h2>
                  <h3>2018 - 2019 {'\u00B7'} <YearTotal yearThen = {2018} yearAfter={2019}/>year</h3>
                  <ul>
                    <li>Design visually appealing graphics</li>
                  </ul>
                </section>
          </div>
        
          </div>
      </TransitionText>
    </div>

   );
}
 
export default AboutMe;