import './NavBar.scss';
import {Outlet,Link} from 'react-router-dom';


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

]
    
    return (
        <nav className='gfg'>
            
            {bar.map((bars, index) => (
                <ul key={index}>
                    <Link
                        to={bars.path}
                    >
                        {bars.title}
                    </Link>
                </ul>
            ))}
             <Outlet />
        </nav>
        
    );
}
 
export default NavBar;