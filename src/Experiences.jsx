import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";
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

  // const handlePan = (event) => {
  //   controls.start({
  //     rotateX:0
  //   })
  // }
  return ( 
    <Container fluid className="experiences">

          <Row className='experiences-tab'>
          {/* <h1 className=''>EXPERIENCES</h1> */}

          {/* -------------------------EXPERIMENTS--------------------------------------------------- */}

          <Col className='col-6 p-0'>
          {tabs.map((item) => (
            <Col 
              key={item.label}
              className={item === selectedTab ? 'selected' : 'non-selected '}
              onClick={() => setSelectedTab(item)}
              // onPan={handlePan}
            >
            <span className='fw-bold' style={{fontSize: '65%'}}>
              {`${item.label}`}
            </span>

              {item === selectedTab ? (
                <motion.div layoutId="underline" className='underline'/>
              ): null}
            </Col>
          ))}
           </Col>

{/*           {tabs.map((item) => (
            
            <Col 
              key={item.label}
              className={item === selectedTab ? 'selected rounded' : 'non-selected '}
              onClick={() => setSelectedTab(item)}
              // onPan={handlePan}
            >
            <span className='fw-bold' style={{fontSize: '65%'}}>
              {`${item.label}`}
            </span>

              {item === selectedTab ? (
                <motion.div layoutId="underline" className='underline'/>
              ): null}

            </Col>
          ))} */}

       {/* <hr className='mt-2 mb-2'></hr> */}

          <Col className='tab-content col-6 d-flex justify-content-center align-items-center'>
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
                <span className='fw-bold '>{selectedTab.description}</span> <br/>

                {lists.filter((list) => list.id === selectedTab.id).map(
                  item => (
                    <ul key={item.id} className='fw-light mainDesc'>
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

    </Container>
   );
}
 
export default Experiences;