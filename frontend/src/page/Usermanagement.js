import { Container, Typography } from "@mui/material";
import { drawerWidth } from "../constant";

const UserManagement = () => {
  return (
    <Container
      maxWidth={false}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
          fontWeight: 700,
        }}
      >
        User management
      </Typography>

    
    </Container>
  );
};

export default UserManagement;
