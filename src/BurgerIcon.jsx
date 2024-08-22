import { Squeeze as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export const BurgerIcon = () => {
const [isOpen, setOpen] = useState(false);/* burger icon animation */


return <Hamburger toggled={isOpen} toggle={setOpen}/>


}