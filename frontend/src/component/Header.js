import {
  AppBar,
  Avatar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { drawerWidth } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header({ handleDrawerToggle }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const naviage = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    console.log(setting);
    switch(setting){
      case 'Logout':
        dispatch(logout());
        naviage("/");
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#F5F5F5" }}>
        <Container
          maxWidth={false}
          sx={{
            paddingLeft: { xs: 0, sm: `${drawerWidth}` }, // No margin on mobile, margin on larger screens
            transition: "margin-left 0.3s ease",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 16px",
            }}
          >
            {/* Left side: Hamburger menu for small screens */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                display: { xs: "block", sm: "none" },
                color: "black",
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            {/* Search icon */}
            <IconButton
              type="button"
              sx={{ width: "24px", height: "24px", p: 1 }}
            >
              <SearchIcon sx={{ mr: 2, color: "black" }} />
            </IconButton>

            {/* Right side: User avatar and settings */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="https://picsum.photos/200" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
