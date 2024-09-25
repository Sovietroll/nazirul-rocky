import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { initialTabs as tabs, /* lists */ } from './ExperiencesComponent';
import { useState } from 'react';
import {IconPaperPlane,IconJourney} from './Icons';
import List from './List';

const Experiences = ({windowWidth,IconsTitle}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);


  const centerText = 'justify-content-center align-items-center d-flex';
  const iconSizeDesktop = windowWidth > 768;



  return ( 
    <Container fluid className='experiences'>

          <Row className='experiences-tab'>
          <Col className='mt-1 mb-1 d-flex justify-content-center align-items-center'>
            <h1 className='mx-2 fw-bold fs-1'>My Journey</h1>
            <IconsTitle icon={IconJourney}/>
          </Col>

          {/* -------------------------EXPERIMENTS--------------------------------------------------- */}

          <Col className='navbar-tab col-12 d-flex p-1'>
          {tabs.map((item) => (
            <Col 
              key={item.label}
              className={item === selectedTab ? `selected ${centerText}`  : `non-selected ${centerText}`}
              onClick={() => setSelectedTab(item)}
            >

            <span style={{fontSize: '65%', transition:'ease-in-out'}}>
              {`${item.label}`} 
               {item === selectedTab ?
              (<>- {item.labelSelected}</>):null}
            </span>

           

            <br/>
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
                  
              <List {...{selectedTab}} />
 
              
              </motion.div>
            </AnimatePresence>
          </Col>

          {/* ---------------------------EXPERIMENTS------------------------------------------------- */}

          </Row>

    </Container>
   );
}
 
export default Experiences;