import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Card,
  CardContent,
  Avatar,
  Typography
} from "@mui/material";
import { drawerWidth, SIDEBAR } from "../constant";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ mobileOpen, handleDrawerToggle }) {
const navigate = useNavigate();

  const drawerContent = (
    <div>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#121212",
          marginLeft: 2
        }}
      >
        <Avatar
          src="/path/to/avatar.jpg" // Replace with your avatar image path
          alt="User Avatar"
          sx={{ bgcolor: "lightgreen", margin: 2 }} // Adjust avatar styles
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" component="div" color="white">
            Loom
          </Typography>
          <Typography variant="body2" color="gray">
            Version 1.0
          </Typography>
        </CardContent>
      </Card>

      <Divider />
      <List>
        {SIDEBAR.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton onClick={() => navigate(text.path)}>
              <ListItemIcon sx={{ color: "#FFFFFF" }}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.label} sx={{ color: "#FFFFFF" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        backgroundColor: "#121621",
      }}
    >
      {/* The sidebar drawer for mobile screens */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#121212",
            color: "#FFFFFF",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* The permanent sidebar drawer for larger screens */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#121212",
            color: "#FFFFFF",
          },
          backgroundColor: "#121212",
          color: "#FFFFFF",
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
