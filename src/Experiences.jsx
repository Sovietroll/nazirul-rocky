import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { initialTabs as tabs, lists } from './ExperiencesComponent';
import { useState } from 'react';

const Experiences = ({windowWidth}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const controls = useAnimationControls();
  const thisYear = new Date().getFullYear();

  const YearTotal = ({yearThen, yearAfter}) => {
    const total = yearThen - yearAfter;  
    const sum = Math.abs(total);
    return(sum)
  }

  const centerText = 'justify-content-center align-items-center d-flex';
  const iconSizeDesktop = windowWidth > 768;



  return ( 
    <Container fluid className="experiences mt-2 mb-2">

          <Row className='experiences-tab'>
          <h1 className=''>Experiences</h1>

          {/* -------------------------EXPERIMENTS--------------------------------------------------- */}

          <Col className='navbar-tab col-12 d-flex p-1'>
          {tabs.map((item) => (
            <Col 
              key={item.label}
              className={item === selectedTab ? `selected ${centerText}`  : `non-selected ${centerText}`}
              onClick={() => setSelectedTab(item)}
              // onPan={handlePan}
            >

            <span className='' style={{fontSize: '65%', transition: 'ease-in-out'}}>
              {`${item.label}`}  {item === selectedTab ?
              (<>- {item.labelSelected}</>):null}
            </span>

           

            <br/>
              {/* {`${item.description}`} */}
              {item === selectedTab ? (
                <motion.div layoutId="underline" className='underline'/>
              ): null}
            </Col>
          ))}
           </Col>


    


          <Col className='tab-content col-12 d-flex justify-content-center align-items-center'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedTab? selectedTab.label : 'empty'}
                initial={{x:-10, opacity: 0}}
                animate={{x:0, opacity: 1}}
                exit={{x: -10, opacity: 0, transition: 'ease', duration: .1}}
                transition={{type: 'spring', damping: 7, stiffness: 100, duration: .1}}
              >
                  
              {selectedTab && 
              (
              <>
                <span className='fw-bold'>{selectedTab.description}</span> <br/>

                {lists.filter((desc) => desc.id === selectedTab.id).map(
                  desc => (
                    <ul key={desc.id} className='mainDesc '>

                      <li>{desc.list}</li>
                      <li>{desc.listTwo}</li>

                  
                      {desc.icon}
                       
                   
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