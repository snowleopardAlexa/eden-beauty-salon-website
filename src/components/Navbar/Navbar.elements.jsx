import styled from 'styled-components';
import { BsFlower3 } from 'react-icons/bs';
import { Container } from '../../globalStyles';
import { Link} from 'react-router-dom';

export const Nav = styled.nav `
  background: #de6fa1;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
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
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(BsFlower3) `
  margin-right: 0.5rem;
`;

