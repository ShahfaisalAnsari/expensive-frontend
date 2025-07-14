import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, closeSidebar } from "@/store/slices/sidebarSlice"; // update path as needed

// Styled Components
const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "200px" : "60px")};
  background-color: #1e1e1e;
  height: 93vh;
  margin-top: 68px;
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  @media (max-width: 767px) {
    transform: ${(props) => (props.isMobileOpen ? "translateX(0)" : "translateX(-100%)")};
    width: 200px;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1100;
  cursor: pointer;
`;

const SidebarLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  transition: background 0.2s ease;

  &.active {
    background-color: #333;
  }

  &:hover {
    background-color: #444;
  }

  span {
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const isMobile = window.innerWidth < 768;

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleLinkClick = () => {
    if (isMobile) {
      dispatch(closeSidebar());
    }
  };

  return (
    <>
      {/* <ToggleButton onClick={handleToggle}>
        {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
      </ToggleButton> */}

      <SidebarContainer isOpen={isOpen} isMobileOpen={isOpen}>
        <SidebarLink to="/home" isOpen={isOpen} onClick={handleLinkClick}>
          <HomeIcon />
          <span>Home</span>
        </SidebarLink>
        <SidebarLink to="/work" isOpen={isOpen} onClick={handleLinkClick}>
          <InfoIcon />
          <span>Work</span>
        </SidebarLink>
        <SidebarLink to="/contact" isOpen={isOpen} onClick={handleLinkClick}>
          <ContactPhoneIcon />
          <span>Contact</span>
        </SidebarLink>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
