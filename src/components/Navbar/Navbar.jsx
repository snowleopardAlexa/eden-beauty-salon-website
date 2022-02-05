import { useState } from 'react';
import { Nav, NavContainer, NavLogo, NavIcon, MobileIcon } from './Navbar.elements';
import {FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';

const Navbar = () => {

const [click, setClick] = useState(false);

const handleClick = () => setClick(!click)

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
     <Nav>
         <NavContainer>
            <NavLogo as={Link} to="/">
                <NavIcon />
                 Eden
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
         </NavContainer>    
     </Nav>
     </IconContext.Provider>
    <div>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </>
  );
};

export default Navbar;
