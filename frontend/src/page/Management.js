import React, { useState } from "react";
import { Box, Toolbar} from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

const Management = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: '#F5F5F5' }}>
      <Header handleDrawerToggle={handleDrawerToggle} style={{ backgroundColor: '#121621' }}/>
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      
      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* Your main page content */}
        <Outlet/>
      </Box>
    </Box>
  );
};

export default Management;
