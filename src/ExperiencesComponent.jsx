import {IconGoogleDrive,IconGithub} from './Icons';
import {AnimatePresence, motion, useAnimationControls } from "framer-motion";

export const allIngredients = [

    {
      id: 1, 
      icon: '🍅', 
      label: '2023', 
      labelSelected: '2024',
      description: 'Self learn Web Developer',
    },

    {
      id: 2,
      icon: '🍊',
      label: '2021',
      labelSelected: '2024',

      description: 
      'Graphic Designer / Video Editor / Motion Graphic',

    },

    {
      id: 3,
      icon: '🍎',
      label: '2020',
      labelSelected: '2021',

      description: 
      'Career Break',

    },

    {
      id: 4,
      icon: '🥬',
      label: '2018',
      labelSelected: '2019',

      description: 
      'Graphic Designer',

    }

  ]

  const PortfolioImage = ({links, icon}) => {
    return(
      <div className ='portfolio-links fw-semibold p-1 mt-1 rounded justify-content-center align-items-center d-flex'>
        Portfolio 
        <a href={links}>
          {icon}
        </a>
      </div>
    )
  }

  export const lists = [
    {
      id:1,
      list: 'Learn the whole world about web design.',
      listTwo: 'Targeting to become official Full Stack developer at the height of my career.',
      icon: 
      <PortfolioImage
        links={'https://www.youtube.com/'}
        icon={<IconGithub width='30px' height='30px'/>}
      />
    }
    ,
    {
      id:2,
      list: 'Create digital content.',
      listTwo: 'Collaborate with clients or project managers.',
      icon: 
      <PortfolioImage
      links={'https://www.youtube.com/'}
      icon={<IconGoogleDrive width='30px' height='30px'/>}
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
      links={'https://www.youtube.com/'}
      icon={<IconGoogleDrive width='30px' height='30px'/>}
    />
    }
  ]

  const [tomato,orange, apple, lettuce ] = allIngredients;

  export const initialTabs = [tomato, orange, apple, lettuce];

 