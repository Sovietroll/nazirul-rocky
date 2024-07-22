import {useEffect} from 'react'
import './NavBar.scss';


const NavBar = () => {
    
  const bar = [
    {
        title: 'Home',
        path: '/home',
    }
    ,
    {
        title: 'About me',
        path: '/about',
    }
    ,
    {
        title: 'My portfolio',
        path: '/portfolio'
    }
    ,
    {
        title: 'More',
        path: '/more'
    }
]
    
    return (
        <nav className='gfg'>
            
            {bar.map((bars, index) => (
                <ol key={index}>
                    {bars.title}
                    {/* {bars.path} */}
                </ol>
            ))}
            
        </nav>
    );
}
 
export default NavBar;