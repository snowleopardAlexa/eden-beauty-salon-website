import styled from 'styled-components';
import { GiButterflyFlower } from 'react-icons/gi';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav `
  background: #AA076B;  
  background: -webkit-linear-gradient(to right, #61045F, #AA076B); 
  background: linear-gradient(to right, #61045F, #AA076B);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled(Container) `
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link) `
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(GiButterflyFlower) `
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div `
  display: none;

@media screen and (max-width: 960px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
}
`