import {Row, Col, Container,Button,/* Collapse */ Fade} from 'react-bootstrap';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { initialTabs as tabs, /* lists */ } from './ExperiencesComponent';
import { useState } from 'react';
import {IconPaperPlane,IconJourney} from './Icons';
import List from './List';
import StaticOne from './images/thumbnail1project-01.jpg';
import StaticTwo from './images/thumbnail2project-01.jpg';

// 
const Experiences = ({windowWidth,IconsTitle}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);


  const centerText = 'justify-content-center align-items-center d-flex';
  const iconSizeDesktop = windowWidth > 768;

  const GifRepo = ({src}) => {
    return(
      <img src={src} style={{borderRadius: '10px',width: '150px', height: '250px', margin: '5px'}}/>
    )
   }
  
   const GifOneAnimated = ({width}) => {
    return (
      <GifRepo src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNqYnpuNmtzeHYzYWU0ZnE1azIxOW1kcXMybzlsbDQ4aWNtMnp5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GVDxefwHDmUGVhLbgM/giphy.gif'}
      />
    )
   }
   const GifOneStatic = ({width}) => {
    return (
      <GifRepo src={StaticOne}/>
    )
  }
  const GifTwoStatic = ({width}) => {
    return (
      <GifRepo src={StaticTwo}/>
    )
  }

   const GifSecondAnimated = ({width}) => {
    return(
      <GifRepo src={'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWtzcnB5aWNpeXkwb3VjcXU0bXJzZ3IwaDhzbXR3Mm16ZWZjNWU5biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N0fXlymbNPizIRiqEZ/giphy.gif'}
      />
    )
  }


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
                  
              <List {...{selectedTab,GifOneAnimated,GifOneStatic,GifOneStatic,GifTwoStatic,GifSecondAnimated}} />
 
              
              </motion.div>
            </AnimatePresence>
          </Col>

          {/* ---------------------------EXPERIMENTS------------------------------------------------- */}

          </Row>

    </Container>
   );
}
 
export default Experiences;