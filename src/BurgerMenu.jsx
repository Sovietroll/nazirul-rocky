import {Link} from "react-router-dom";
import { Squeeze as Hamburger } from 'hamburger-react';
import { useState } from "react";
import {BurgerIcon} from './BurgerIcon';

const BurgerMenu = ({hamburgerOpen, toggleHamburger }) => {
  const [isOpen, setOpen] = useState(false);/* burger icon animation */


  const bar = [
    {
        title: 'Home',
        path: '/',
    }
    ,
    {
        title: 'Contact',
        path: '/contact'
    }
    ,

]

  return ( 
    
    <div className= 'hamburgerListDown' onClick={toggleHamburger}>
      <ul>
             {bar.map((bars, index) => (
              <li xs={3} key={index} className='navbar-center'>
                <Link to={bars.path}>{bars.title}</Link>
              </li>
               ))
              }
   
      </ul>
    </div>
   );
}
 
export default BurgerMenu;