import {useEffect} from 'react'
import './NavBar.scss';
import {Link} from 'react-router-dom';


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
                    <Link
                    className='bars-link'
                    to={bars.path}>
                        {bars.title}
                        </Link>
                </ol>
            ))}
            
        </nav>
    );
}
 
export default NavBar;