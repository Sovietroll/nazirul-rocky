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
  <ProgressBar className="progressBar"
    style={{
      position: "sticky",
      top: '0px',
      height: "10px",
      width: "100%",
      zIndex: 2,
      borderRadius: "2px",
      filter: "drop-shadow(0px 4px 8px #1f2028)"
    }}
    label={`Go top`}
    variant="info" 
    max={endOfScrollY}
    now = {scroll}
    />
    
</>
  );
}
 
export default Bar;