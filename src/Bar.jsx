import ProgressBar from 'react-bootstrap/ProgressBar';
import {useState, useEffect} from 'react';

const Bar = () => {
  const [scroll,setScroll] = useState('');
  addEventListener("scroll", (event) => {
    setScroll(window.scrollY);
  })

  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const HandleScroll = () => {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);

    return() => {
      window.removeEventListener('scroll', HandleScroll);
    }
  },[

  ])

  const endOfScrollY = (scrollHeight - windowHeight);
  return ( 
<>
  <ProgressBar 
    style={{
      position: "sticky",
      top: 0,
      height: "10px",
      width: "100%",
      zIndex: 100
    }}
    animated 
    variant="info" 
    max={endOfScrollY}
    now = {scroll}
    />
    
</>
  );
}
 
export default Bar;