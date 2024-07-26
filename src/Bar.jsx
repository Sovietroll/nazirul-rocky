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
        top: 30,
        height: 8
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