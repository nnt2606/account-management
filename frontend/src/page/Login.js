import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useNavigate } from "react-router-dom";
import imgSrc from "../img/img.png";
import { useState } from "react";
import { userLogin } from "../APIs/authAPIs";

export default function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [check, setCheck] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError("");
    setCheck(true);
  };

  const handleSubmit = (event) => {
    setCheck(false);
    event.preventDefault();
    const {email, password} = formData;
    if(!email || !password) return;
    else login(email, password);
  };

  const login = async(email, password) => {
    const data={email, password}
    try{
      const response = await userLogin(data);
      if(response.status === 201){
        navigate("/management/user")
      }
    }catch{
      setError("Register failed! Try again!");
    }
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          width: "400px",
          height: "418px",
          paddingTop: "150px",
          gap: "32px",
        }}
      >
        <Button
          onClick={() => navigate("/")}
          sx={{
            width: "61px",
            height: "22px",
            gap: "8px",
            marginBottom: 5,
          }}
        >
          <ArrowBackIcon fontSize="small" />
          <Typography
            variant="body2"
            color="textPrimary"
            fontSize="14px"
            sx={{
              fontWeight: 500,
              textTransform: "none",
            }}
          >
            Back
          </Typography>
        </Button>

        <Box
          sx={{
            width: "400px",
            heigth: "364px",
            borderRadius: "20px 0px 0px 0px",
            backgroundColor: "var(--background-paper, #FFFFFF)",
            boxShadow: `
          0px 5px 22px 0px #0000000A,
          0px 0px 0px 0.5px #00000008            
        `,
          }}
        >
          <Box
            sx={{
              paddingTop: "32px",
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
                fontWeight: 600,
              }}
            >
              Log in
            </Typography>
            <Typography variant="body2" color="#6C737F">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                variant="body2"
                sx={{
                  color: "#635BFF",
                  textDecoration: "underline",
                  textTransform: "none",
                }}
              >
                Register
              </NavLink>
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              paddingRight: "24px",
              paddingLeft: "24px",
              paddingTop: "12px",
              paddingBottom: "32px",
            }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={
                check
                  ? false
                  : !emailRegex.test(formData.email)
                  ? true
                  : !formData.email
              }
              helperText={
                check
                  ? ""
                  : !formData.email
                  ? "Please fill this field"
                  : !emailRegex.test(formData.email)
                  ? "Invalid email format."
                  : ""
              }
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              error={check ? false : !formData.password}
              helperText={
                check ? "" : !formData.password ? "Please fill this field!" : ""
              }
            />
            {error && (
              <Typography
                variant="body2"
                fullWidth
                sx={{
                  color: "red",
                  justifyContent: "center",
                  paddingTop: "10px",
                  alignItems: "center",
                }}
              >
                {error}
              </Typography>
            )}{" "}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "12px",
                backgroundColor: "#635BFF",
                textTransform: "none",
              }}
            >
              Log in
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <NavLink
                to="/"
                variant="body2"
                sx={{
                  color: "#635BFF",
                  textDecoration: "underline",
                  textTransform: "none",
                }}
              >
                Forgot password ?
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
