import {
  Drawer,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid2,
  TextField,
  Avatar,
  Chip,
  InputAdornment,
} from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as React from "react";

const getColor = (value) => {
  switch (value) {
    case "Premium":
      return { backgroundColor: "#E9D5FF", color: "#7C3AED" }; // Light purple background, dark purple text
    case "Activated":
      return { backgroundColor: "#15B79E1F", color: "#107569" }; // Light blue background, dark blue text
    case "Waiting":
      return { backgroundColor: "#F790091F", color: "#6B7280" }; // Light gray background, dark gray text
    default:
      return { backgroundColor: "#E5E7EB", color: "#374151" }; // Default gray
  }
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const UserDrawer = ({ user, open, onClose, onAction }) => {
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (onAction === "View") setView(true);
    else setEdit(true);
  }, []);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box role="presentation" sx={{ paddingX: 5, width: "790px" }}>
          <Typography variant="h6" fontWeight="700" paddingY="20px">
            {user.name}
          </Typography>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChangeTab}>
                <Tab label="Overview" {...a11yProps(0)} />
                <Tab label="Log" {...a11yProps(1)} />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <Grid2 container spacing={0} rowGap={1.5}>
                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    User ID
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    value={user._id}
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                  ></TextField>
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Avatar
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <Avatar
                    variant="square"
                    src={user.img ? user.img : ""} // Replace with your avatar image path
                    alt="User Avatar"
                    sx={{
                      bgcolor: "lightgreen",
                      width: "80px",
                      height: "80px",
                    }} // Adjust avatar styles
                  />
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Email
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    value={user.email}
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                  ></TextField>
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Full name
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    value={user.name}
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                  ></TextField>
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Phone
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    value={user.phone}
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                  ></TextField>
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Role
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    value={user.role}
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                  ></TextField>
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Account type
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    value=""
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Chip
                            label={user.account_type ? user.account_type: 'PREMIUM'}
                            sx={{
                              ...getColor('Premium'),
                              borderRadius: "12px",
                              fontWeight: "700",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Nationality
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    value={user.nationality ? user.nationality : 'Vietnamese'}
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                  ></TextField>
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Status
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                    value=""
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Chip
                            label={user.status ? "ACTIVATED" : "WAITING"}
                            sx={{
                              backgroundColor: user.status
                                ? "#15B79E1F"
                                : "#F790091F",
                              color: user.status ? "#107569" : "#B54708",
                              fontWeight: "700",
                              borderRadius: 5,
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </Grid2>

                <Grid2 size={2} sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{ colors: "#6C737F", fontWeight: 500 }}
                  >
                    Langugage
                  </Typography>
                </Grid2>
                <Grid2 size={10}>
                  <TextField
                    fullWidth
                    size="small"
                    disabled
                    value={user.language ? user.language : 'English'}
                    sx={{
                      backgroundColor: "#E5E7EB",
                      color: "#8A94A6",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                  ></TextField>
                </Grid2>
              </Grid2>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}></CustomTabPanel>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
