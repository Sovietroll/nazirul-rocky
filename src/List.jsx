import {IconGoogleDrive,IconGithub} from './Icons';
import { useState } from 'react';
import {Row, Col, Container,Button, Popover,OverlayTrigger,Tooltip ,Overlay  } from 'react-bootstrap';


const List = ({selectedTab,GifAnimation,GifStatic,GifSecond}) => {
 
  const PortfolioImage = ({links, icon: IconComponent}) => {
    return(
      <a className ='portfolio-links fw-semibold p-1 mt-1 rounded justify-content-center align-items-center d-flex' href={links}>
        Portfolio 
         <IconComponent width = '30px' height= '30px'/>
      </a>
    )
  }


  const plays = 
  [
    {
      id: 1,
      gifStatic: <GifStatic/>,
      gifPlay: <GifAnimation/>,
      link: 'https://www.google.com/'
    }
    ,
    {
      id: 2,
      gifStatic: <GifStatic/>,
      gifPlay: <GifSecond/>,
      link: 'https://www.bing.com/'
    }
    ,
    {
      id: 3,
      gifStatic: <GifStatic/>,
      gifPlay: <GifSecond/>,
      link: 'https://www.bing.com/'
    }
    ,
    {
      id: 4,
      gifStatic: <GifStatic/>,
      gifPlay: <GifSecond/>,
      link: 'https://www.bing.com/'
    }
    
  ]
  const [playGif,setPlayGif] = useState(plays[0]);

  const Gif = () => {

    return(
      <>
          {plays.map((play) => (
          <Col className='p-0 d-inline'
            key={play.id} 
            onMouseOver={() => setPlayGif(play.id)} 
            onMouseLeave={() => setPlayGif(false)}
          >
              <a href={play.link}>
              {playGif === play.id? play.gifPlay : play.gifStatic}
              </a>
            </Col>
     
          ))}
          </>
        // <IconComponent onMouseOver={() => setPlayGif(true)} onMouseLeave={() => setPlayGif(false)}/>
    
    )
  }

  const lists = [
    {
      
      id:1,
      list: 'Building responsive and dynamic apps and web experiences.',
      // listTwo: 'Targeting to become official Full Stack developer at the height of my career.',
      icon: 
      <PortfolioImage
        links={'https://github.com/Sovietroll'}
        icon={IconGithub}
      />
      ,
      icon2: <Gif/>,
      // icon3: <Gif icon={playGif? GifAnimation : GifStatic}/>
      // icon3: <GifImages/>,
      // icon4: <GifImages/>,
      // icon5: <GifImages/>
    }
    ,
    {
      id:2,
      list: 'Creating impactful digital media through design, video, and motion graphics. ',
      // listTwo: 'Collaborate with clients or project managers.',
      icon: 
      <PortfolioImage
        links={'https://drive.google.com/drive/folders/1W1z3KpBAFrqRBIr3EBMvUYBcNdbskzlt?usp=sharing'}
        icon={IconGoogleDrive}
      />
    }
    ,
    {
      id:3,
      list: 'Opened my first ever agriculture company.',
    }
    ,
    {
      id:4,
      list: 'Design visually appealing graphics.',
      icon: 
      <PortfolioImage
        links={'https://drive.google.com/drive/folders/1W1z3KpBAFrqRBIr3EBMvUYBcNdbskzlt?usp=sharing'}
        icon={IconGoogleDrive}
      />
    }
  ]



  return ( 
    <>
    <span className='fw-bold'>{selectedTab.description}</span> <br/>

    {lists.filter((desc) => desc.id === selectedTab.id).map(
      desc => (
        <Col key={desc.id}>
        <ul className='mainDesc '>

          <li>{desc.list}</li>
          <li>{desc.listTwo}</li>

          <li>{desc.icon}</li>
        
        

        </ul>

        {desc.icon2}                    


        </Col>
     
        
   
      
      )
    )}

  </>
   );
}
 
export default List;