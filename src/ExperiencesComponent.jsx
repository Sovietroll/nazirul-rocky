import {IconGoogleDrive,IconGithub} from './Icons';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";

export const allIngredients = [

    {
      id: 1, 
      icon: '🍅', 
      label: 'Now', 
      labelSelected: '2024',
      description: 'Self-taught Web Developer.',
    },

    {
      id: 2,
      icon: '🍊',
      label: '2024',
      labelSelected: '2021',

      description: 
      'Graphic Designer / Video Editor / Motion Graphic',

    },

    {
      id: 3,
      icon: '🍎',
      label: '2021',
      labelSelected: '2020',

      description: 
      'Career Break',

    },

    {
      id: 4,
      icon: '🥬',
      label: '2020',
      labelSelected: '2018',

      description: 
      'Graphic Designer',

    }

  ]

  const PortfolioImage = ({links, icon: IconComponent}) => {
    return(
      <a className ='portfolio-links fw-semibold p-1 mt-1 rounded justify-content-center align-items-center d-flex' href={links}>
        Portfolio 
         <IconComponent width = '30px' height= '30px'/>
      </a>
    )
  }

  export const lists = [
    {
      id:1,
      list: 'Building responsive and dynamic web experiences.',
      // listTwo: 'Targeting to become official Full Stack developer at the height of my career.',
      icon: 
      <PortfolioImage
        links={'https://reactsvgicons.com/'}
        icon={IconGithub}
      />
    }
    ,
    {
      id:2,
      list: 'Creating impactful digital media through design, video, and motion graphics.',
      // listTwo: 'Collaborate with clients or project managers.',
      icon: 
      <PortfolioImage
        links={'https://reactsvgicons.com/'}
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
        links={'https://reactsvgicons.com/'}
        icon={IconGoogleDrive}
      />
    }
  ]

  const [tomato,orange, apple, lettuce ] = allIngredients;

  export const initialTabs = [tomato, orange, apple, lettuce];

 