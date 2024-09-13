import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { initialTabs as tabs, lists } from './ExperiencesComponent';
import { useState } from 'react';
import {IconPaperPlane} from './Icons';

const Experiences = ({windowWidth,IconsTitle}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);


  const centerText = 'justify-content-center align-items-center d-flex';
  const iconSizeDesktop = windowWidth > 768;



  return ( 
    <Container fluid className="experiences overflow-hidden">

          <Row className='experiences-tab'>
          <Col className='mt-1 mb-1'>
            <h1 className=''>Experiences</h1>
            <IconsTitle icon={IconPaperPlane}/>
          </Col>

          {/* -------------------------EXPERIMENTS--------------------------------------------------- */}

          <Col className='navbar-tab col-12 d-flex p-1 mt-2'>
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