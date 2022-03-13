import React from "react";
import SidebarSearch from "../SidebarSearch/SidebarSearch";
import {
  CloseIcon,
  Icon,
  Linkr,
  Links,
  LinksContainer,
  SidebarContainer,
  SidebarMenu,
  SidebarWrapper,
} from "./StyledSidebar";

const Sidebar = ({ isOpen, toggle }) => {
  // onClick={toggle}
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Linkr to="/" smooth={true} duration={500} onClick={toggle}>
            Home
          </Linkr>
          <Links to="movies" smooth={true} duration={500} onClick={toggle}>
            Movies
          </Links>
          <Links to="footer" smooth={true} duration={500} onClick={toggle}>
            Contact
          </Links>
          <SidebarSearch />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
