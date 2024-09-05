import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import {AnimatePresence, motion, useAnimationControls,useSpring } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { initialTabs as tabs, lists } from './ExperiencesComponent';
import { useState } from 'react';

const Experiences = ({TransitionText}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const controls = useAnimationControls();
  const thisYear = new Date().getFullYear();

  const YearTotal = ({yearThen, yearAfter}) => {
    const total = yearThen - yearAfter;  
    const sum = Math.abs(total);
    return(sum)
  }

  const wrapperVariants = {
    dont: {
      x: 0,

    },
    move: {
      x: 10,

      
    }
  }
  return ( 
    <Container fluid className="experiences">

    {/* <TransitionText style={{marginTop: "20px", position: "relative"}}> */}




    <h1>My Experiences</h1>

          <Row className='experiences-tab'>
          {/* -------------------------EXPERIMENTS--------------------------------------------------- */}

       
          {tabs.map((item) => (
            <Col 
              key={item.label}
              className={item === selectedTab ? 'selected' : 'non-selected'}
              onClick={() => setSelectedTab(item)}
            >
            <span className='fs-6'>
              {`${item.label}`}
            </span>

              {item === selectedTab ? (
                <motion.div layoutId="underline" className='underline'/>
              ): null}

            </Col>
          ))}
       

          <Col className='tab-content col-12 d-flex justify-content-center align-items-center'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedTab? selectedTab.label : 'empty'}
                initial={{y:10, opacity: 0}}
                animate={{y:0, opacity: 1}}
                exit={{y: -20, opacity: 0, transition: 'ease', duration: .1}}
                transition={{type: 'spring', damping: 7, stiffness: 100, duration: .1}}
              >
                  
              {selectedTab && 
              (
              <>
                <span className='fw-bold'>{selectedTab.description}</span> <br/>

                {lists.filter((list) => list.id === selectedTab.id).map(
                  item => (
                    <ul key={item.id} className='fw-light fs-6'>
                      <li>{item.list}</li>
                      <li>{item.listTwo}</li>
                    </ul>
                  )
                )}

              </>
              )}

              
              </motion.div>
            </AnimatePresence>
          </Col>

          {/* ---------------------------EXPERIMENTS------------------------------------------------- */}

          </Row>


       
            {/* <Col className="Col">            
              <section>
                <Col>
                <h2>Self learn Web Developer</h2>
                </Col>
                <h3>2023 - Present {'\u00B7'} <YearTotal yearThen = {2023} yearAfter={2024}/> years </h3>

                  <ul className="">
                    <li>Learn the whole world about web design.</li>
                    <li>Targeting to become offical Full Stack developer at the height of my career.</li>
                  </ul>

              </section>
              <Col>
                <h4
                  style={{display: "flex",justifyContent: "center",
                  }}
                ><span style={{paddingRight: "15px"}}>Portfolio</span>
                    <a href="https://www.google.com/">
                    <motion.div
                      variants={wrapperVariants}
                      transition={{
                        type:"spring",
                        damping: 5,
                        mass: .3,
                        stiffness: 200}}
                      initial="dont"
                      animate={controls}
                      onClick = {()=> animationDuration()}
                      >
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} className="arrow-right"/>
                    </motion.div>
                    </a>
                    </h4> 

              </Col>
              </Col>

        

       
              <Col className="Col">
              <section>
              <Col>
                <h2>Graphic Designer / Video Editor / Motion Graphic</h2>
                <h3>2021 - 2024 {'\u00B7'} <YearTotal yearThen = {2021} yearAfter={2024}/> years </h3>
              </Col>
                  <ul>
                    <li>Create digital content.</li>
                    <li>Collaborate with clients or project managers.</li>
                  </ul>
              </section>
              </Col>
   
              <Col className="Col">
                <section>
                  <h2>Career Break</h2>
                  <h3>2020 - 2021 {'\u00B7'} <YearTotal yearThen = {2020} yearAfter={2021}/> year </h3>
                  <ul>
                    <li>Opened my first ever agriculture company.</li>
                  </ul>
                </section>
                </Col>
   
                <Col className="Col">
                <section>
                  <h2>Graphic Designer</h2>
                  <h3>2018 - 2019 {'\u00B7'} <YearTotal yearThen = {2018} yearAfter={2019}/>year</h3>
                  <ul>
                    <li>Design visually appealing graphics.</li>
                  </ul>
                </section>
                </Col>

      */}

    {/* </TransitionText> */}
    </Container>
   );
}
 
export default Experiences;