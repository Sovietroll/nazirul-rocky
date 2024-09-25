import {Row, Col, Container,Button, Popover,OverlayTrigger,Tooltip ,Overlay  } from 'react-bootstrap';
import { useState, useRef } from 'react';
import {IconVsCode,IconBootstrapFill, IconSquareGithub, IconFramer,IconReact,IconDeveloper,IconNode} from './Icons';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";


const Developer = 
  ({buttonRef,isClicked,setIsClicked,imgSrc, title, description, titleWhatIDo, iDo, tools,IconSkills,}) => {
  


  const Icons = [
    {
      id: 1,
      label: 'Bootstrap',
      seticon: <IconBootstrapFill/>
    }
    ,
    {
      id: 2,
      label: 'Github',
      seticon: <IconSquareGithub/>
    }
    ,
    {
      id: 3,
      label: 'VS Code',
      seticon: <IconVsCode/>
    }
    ,
    {
      id: 4,
      label: 'Framer Motion',
      seticon: <IconFramer/>
    }
    ,   
    {
      id: 5,
      label: 'React',
      seticon: <IconReact/>
    }
    ,
    {
      id: 6,
      label: 'Node.js',
      seticon: <IconNode/>
    }
  ]
  const [selected, setSelected] = useState(Icons[0]);

  return ( //! -------------RETURN------------
    <Col className="skills-col" >

  <Col className='col-12'>
   <IconSkills icon={IconDeveloper}/>
  </Col >

  <Col className="skills-col-1 fs-2 col-12 skills-title">
    {title}
  </Col >

  <Col className="skills-col-1-desc text-wrap 
  fs-6 col-12
  ">
    {description}
  </Col>
  <Col className="skills-col-2">
    <Col>
     <span className="fw-bold">
      {titleWhatIDo}</span>
    <Col className='skills-col-2-do'>
      {iDo}
    </Col>
  <Col  className="skills-col-3 skills-ul">
    <span>{tools}</span>

      <ul 
      style={{listStyle: "none"}}
      className='d-flex justify-content-center p-0'>
        
      {Icons.map((icon) => (
      <div 
      key={icon.id} 
      className='icons-map'
      onClick={() => setSelected(icon)}
    >
      <div 
      className='icons-map-div'
      style={{margin: '3px'}}
      onClick={() => setIsClicked(true)}
      ref={buttonRef}
      >
       {icon.seticon}
       <AnimatePresence mode='wait'>
       {icon.label === selected.label && isClicked? 
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
          {icon.label}
          </motion.div>
        ) : ''
      }
      </AnimatePresence> 
      </div>
      </div>
      ))} 

      
    </ul>
  </Col>
  </Col>
  </Col>
  
</Col>

   );
}
 
export default Developer;