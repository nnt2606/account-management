import { Typography, Button, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          sx={{
            paddingTop: 2,
          }}
        >
          Home
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{
            paddingTop: 5,
          }}
        >
          <Button
            variant="contained"
            className="button"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
          <Button
            variant="outlined"
            className="button"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </Stack>
    </Container>
  );
}
