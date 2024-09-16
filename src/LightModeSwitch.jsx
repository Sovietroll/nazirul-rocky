import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from 'react';

const LightModeSwitch = ({toggleDarkMode, isDarkMode, setDarkMode}) => {
  // const [isDarkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!isDarkMode);
  // };

  return (
    <DarkModeSwitch
      // style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={25}
      sunColor='#e5de44'
      moonColor='#151633'
    />
  );
};

export default LightModeSwitch; 