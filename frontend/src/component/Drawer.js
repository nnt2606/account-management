import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

export const UserDrawer = ({ user, open, onClose }) => {
  return (
    <>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 350, padding: 20 }}>
          <IconButton onClick={onClose} style={{ float: "right" }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">{user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
          {/* Logs */}
          <Typography variant="subtitle1" style={{ marginTop: 20 }}>
            Logs:
          </Typography>
          <List>
            {user.logs.length > 0 ? (
              user.logs.map((log, index) => (
                <ListItem key={index}>
                  <ListItemText primary={log.action} secondary={log.time} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No logs available" />
              </ListItem>
            )}
          </List>
          {/* CRUD Buttons */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 20 }}
          >
            Update User
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            style={{ marginTop: 10 }}
          >
            Delete User
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
