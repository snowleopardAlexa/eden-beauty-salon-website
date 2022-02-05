import { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink, 
  NavItemBtn,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from '../../globalStyles';
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu  = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo as={Link} to='/' onClick={closeMobileMenu}>
              <NavIcon style={{float: 'left'}} />
              Eden
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click} style={{float: 'right'}}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                   Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" onClick={closeMobileMenu}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services" onClick={closeMobileMenu}>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" onClick={closeMobileMenu}>Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>Sign up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Sign up
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      <div>
      </div>
    </>
  );
};

export default Navbar;
