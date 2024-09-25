import {IconGoogleDrive,IconGithub,GifStatic,GifAnimation} from './Icons';
import { useState } from 'react';


const List = ({selectedTab}) => {
  const [playGif,setPlayGif] = useState(false);

  const PortfolioImage = ({links, icon: IconComponent}) => {
    return(
      <a className ='portfolio-links fw-semibold p-1 mt-1 rounded justify-content-center align-items-center d-flex' href={links}>
        Portfolio 
         <IconComponent width = '30px' height= '30px'/>
      </a>
    )
  }

  const MouseIn = ({event,gif}) => {
    // <IconComponent/>
    console.log('IN')
  }

  const Gif = ({icon:IconComponent}) => {
    return(
      <IconComponent />

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
      icon2: 
      <div onMouseOver={() => setPlayGif(true)} onMouseLeave={() => setPlayGif(false)}>
          <Gif icon={playGif? GifAnimation : GifStatic}/>
      </div>
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
        <ul key={desc.id} className='mainDesc '>

          <li>{desc.list}</li>
          <li>{desc.listTwo}</li>

      
          {desc.icon}
          {desc.icon2}
           
       
        </ul>
      )
    )}

  </>
   );
}
 
export default List;