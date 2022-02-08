import styled from "styled-components";
import { GiButterflyFlower } from "react-icons/gi";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #aa076b;
  background: -webkit-linear-gradient(to right, #61045f, #aa076b);
  background: linear-gradient(to right, #61045f, #aa076b);
  height: 80px;
  font-family: "Dancing Script", cursive;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.2rem;
  align-items: center;
  margin-left: 20px;

  @media screen and (max-width: 960px) {
    margin-right: 1rem;
  }
`;

export const NavIcon = styled(GiButterflyFlower)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
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
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 15px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #aa076b;
    background: -webkit-linear-gradient(to right, #61045f, #aa076b);
    background: linear-gradient(to right, #61045f, #aa076b);
  }
`;

export const NavItem = styled.li`
    height: 80px;
    padding: 20px;

  &:hover {
    border-bottom: 3px solid #ffe000;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.2rem;
  font-family: "Playfair Display", serif;
  text-decoration: none;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    margin-left: 0px;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ffe000;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;
