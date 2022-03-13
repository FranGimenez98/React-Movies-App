import React, { useEffect, useState } from "react";
import {
  Input,
  InputContainer,
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinkS,
  NavLinks,
  NavLogo,
  NavMenu,
  NavSearch,
  SearchIcon,
} from "./StyledNavbar";
import { FaBars } from "react-icons/fa";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const scrollChange = () => {
    if (window.scrollY >= 20) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollChange);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/">MOVIES</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <Searchbar />
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinkS to="movies" smooth={true} duration={500}>Movies</NavLinkS>
          </NavItem>
          <NavItem>
            <NavLinkS to="footer" smooth={true} duration={500}>Contact</NavLinkS>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
