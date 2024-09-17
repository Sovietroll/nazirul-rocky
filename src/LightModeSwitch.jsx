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
      sunColor='#dbaf0f'
      moonColor='#8E99B5'
    />
  );
};

export default LightModeSwitch; 