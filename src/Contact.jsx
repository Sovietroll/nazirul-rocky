import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Contact = () => {
  const [visible, setVisible] = useState(false);

  // when  the component 'mounts', it trigger the useEffect
  useEffect(() => {
    setVisible(true);
  }, []);


  return ( 
    <>
      <h1 className={`contact-main ${visible ? 'visible' : ''}`}>
        You can contact me here
      </h1>

    </>
   );
}
 
export default Contact;