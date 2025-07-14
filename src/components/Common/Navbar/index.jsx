import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
import { Menu, MenuItem, IconButton } from "@mui/material";

// Styled Components
const NavbarContainer = styled.nav`
  background: #000000ad;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width:100%;
  height: 7vh;
  min-height: 68px;
  z-index: 1000; 
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ToggleButtonSide = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  top: 10px;
  left: 10px;
  z-index: 1100;
  cursor: pointer;
  display: flex;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    // 🔒 Clear tokens or call logout API
    localStorage.removeItem("token");
    window.location.href = "/login"; // or use navigate
  };

  return (
    <NavbarContainer>
      {/* Left: Sidebar Toggle + Logo */}
      <div className="flex items-center">
        <ToggleButtonSide onClick={() => dispatch(toggleSidebar())}>
          {isSidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </ToggleButtonSide>
        <Logo className="ml-[60px]">MyApp</Logo>
      </div>

      {/* Right: Profile Dropdown */}
      <div>
        <IconButton
          onClick={handleProfileClick}
          size="large"
          edge="end"
          color="inherit"
        >
          <AccountCircleIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
