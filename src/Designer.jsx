import {Row, Col, Container,Button, Popover,OverlayTrigger,Tooltip ,Overlay  } from 'react-bootstrap';
import { useState, useRef } from 'react';
import {IconAfterEffect,IconPhotoshop ,IconIllustrator ,IconPremierePro ,IconLightroom,IconDesigner} from './Icons';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";


const Designer  = 
  ({buttonRef,setIsClickedTwo,isClickedTwo,imgSrc, title, description, titleWhatIDo, iDo, tools,IconSkills,iconSizeDesktop}) => {
  
  //  const [isClicked, setIsClicked] = useState(false);

  const IconsAdobe = [
    {
      id: 1,
      label: 'After Effect',
      seticon: <IconAfterEffect/>
    }
    ,
    {
      id: 2,
      label: 'Photoshop',
      seticon: <IconPhotoshop/>
    }
    ,
    {
      id: 3,
      label: 'Illustrator',
      seticon: <IconIllustrator/>
    }
    ,
    {
      id: 4,
      label: 'Premiere Pro',
      seticon: <IconPremierePro/>
    }
    ,   {
      id: 5,
      label: 'Lightroom',
      seticon: <IconLightroom/>
    }
    ,
  ]
  const [selected, setSelected] = useState(IconsAdobe[0]);

 

  return ( //! -------------RETURN------------
    <Col className="skills-col" >

  <Col className='col-12'>
   <IconSkills icon = {IconDesigner}/>
  </Col >

  <Col className="skills-col-1 fs-4 fw-bold col-12 skills-title">
    {title}
  </Col >

  <Col className="skills-col-1-desc text-wrap 
  fs-6 col-12 mb-2 mt-2
  ">
    {description}
  </Col>
  <Col className="skills-col-2">
    <Col>
     <span className="fw-bold skills-title-do">
      {titleWhatIDo}</span>
    <Col>
      {iDo}
    </Col>
  <Col  className="skills-col-3 skills-ul">
    <span>{tools}</span>

      <ul 
      style={{listStyle: "none"}}
      className='d-flex justify-content-center p-0'>
{/* ----------------------------------------------------------- */}
      {IconsAdobe.map((adobe) => (
      <div 
      key={adobe.id} 
      className='icons-map'
      onClick={() => setSelected(adobe)}
    >
      <div 
      className='icons-map-div'
      style={{margin: '3px'}}
      onClick={() => setIsClickedTwo(true)}
      ref={buttonRef}
      >
       {adobe.seticon}

       <AnimatePresence mode='wait'>
       {adobe.label === selected.label && isClickedTwo? 
        (
          <motion.div
            key={selected.id}
            className='popUp-label'
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1,scale: 1}}
            whileTap={{scale:2}}
            exit={{y: 20, opacity: 0, scale: 0}}
            transition={{linear: 'easeInOut', duration: .3}}
          >
          {adobe.label}
          </motion.div>
        ) : ''
      }
      </AnimatePresence> 

      </div>
      
        
      </div>
      ))}
{/* ----------------------------------------------------------- */}


    </ul>
  </Col>
  </Col>
  </Col>
  
</Col>

   );
}
 
export default Designer ;