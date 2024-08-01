import ProgressBar from 'react-bootstrap/ProgressBar';
import {useState} from 'react';

const Bar = () => {
  const [scroll,setScroll] = useState('');

  addEventListener("scroll", (event) => {
    setScroll(window.scrollY);
  })
  
  return ( 
    <ProgressBar 
      style={{
        position: "sticky",
        top: 0,
        height: 5,
        width: "100%"
      }}
      animated 
      striped 
      variant="success" 
      max={350}
      now = {scroll}
      />
  );
}
 
export default Bar;