import {Link} from "react-router-dom";


const BurgerMenu = () => {


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
    <nav className='hamburgerListDown'>
      <ul>
             {bar.map((bars, index) => (
                <div  xs={3} key={index}
                className='navbar-center'>
                    <Link
                        to={bars.path}
                        
                    >
                        {bars.title}
                    </Link>
                </div>
            ))
            }
   
      </ul>
    </nav>
   );
}
 
export default BurgerMenu;