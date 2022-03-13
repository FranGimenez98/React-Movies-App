import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  position: fixed;
  z-index: 20;
  background-color: ${({ scrollNav }) => (scrollNav ? 'black' : "null")};
  box-shadow: ${({navScroll}) => (navScroll ? '0 10px 20px 0 rgba(0,0,0,.07)' : 'null')};
  transition: 0.2s;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;

  /* display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem; */
`;

export const NavLogo = styled(LinkR)`
  color: ${(props) => props.theme.colors.primary};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkR)`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    /* border-bottom: 3px solid ${(props) => props.theme.colors.secondary}; */
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const NavLinkS = styled(LinkS)`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    /* border-bottom: 3px solid ${(props) => props.theme.colors.secondary}; */
    color: ${(props) => props.theme.colors.secondary};
  }
`;