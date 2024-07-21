import {useEffect} from 'react'

const NavBar = () => {
    
  const bar = [
    {
    id: 0,
    title: 'Home',
    path: '/home',
    }
    ,
    {
    id: 1,
    title: 'About us',
    path: '/about',
    }
]
    
    return (
        <nav className="nav-bar">
            {bar.map((bars, index) => {
                <li key={index}>
                    {bars.id}
                    {bars.title}
                    {bars.path}
                </li>
            })}
        </nav>
    );
}
 
export default NavBar;