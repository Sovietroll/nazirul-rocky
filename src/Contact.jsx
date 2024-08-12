import { useEffect, useState } from "react";


const Contact = () => {
  // const [url, setUrl] = useState('https://github.com/Sovietroll/myblog')

  const LinkedUrl = 'https://www.linkedin.com/in/nazirul-syafiq-young-rockie-359289311/';
  const GitHub = 'https://github.com/Sovietroll/myblog';
  const email = "nazirulrocky@gmail.com";

  return ( 
    <>
    <h1>TESTIMONIALS</h1>
      <h2><a href={GitHub}>Github</a></h2>
      <h2><a href={LinkedUrl}>LinkedLink</a></h2>
      <h2>Contact me at @gmail <a href={email}>nazirulrocky@gmail.com</a></h2>
    </>
   );
}
 
export default Contact;