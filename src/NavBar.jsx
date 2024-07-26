import './NavBar.scss';
import {Outlet,Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


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
    <>

        <nav className='navbar-main'>

        <div
                className="lg-container">
                <img className="lg" 
                src='src/images/lg.png' alt="logo" width={90} />
            </div>

            {bar.map((bars, index) => (
                <div key={index}>
                    <Link
                        to={bars.path}
                    >
                        {bars.title}
                    </Link>
                    
                </div>
            ))
            }
        <div className='icon-container'>
            <FontAwesomeIcon icon={faMoon} inverse className="icon"/>
        </div>

        </nav>

    </>
    );
}
 
export default NavBar;