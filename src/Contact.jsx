import { useEffect, useState } from "react";
import useFadeIn from "./useFadeIn.jsx";

const Contact = () => {

  const visible = useFadeIn();

  return ( 
    <>
      <h1 className={`contact-main ${visible ? 'visible' : 'Nonvisible'}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in.
      </h1>

    </>
   );
}
 
export default Contact;