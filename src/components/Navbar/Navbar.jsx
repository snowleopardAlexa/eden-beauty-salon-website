import { Nav, NavContainer, NavLogo, NavIcon } from './Navbar.elements';


const Navbar = () => {
  return (
    <>
     <Nav>
         <NavContainer>
            <NavLogo to="/">
                <NavIcon />
                 Eden
            </NavLogo>
         </NavContainer>    
     </Nav>
    </>
  );
};

export default Navbar;
