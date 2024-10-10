import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import { createMuiTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Management from "./page/Management";
import UserManagement from "./page/Usermanagement";
import Dashboard from "./page/Dashboard";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Inter',
      'serif'
    ].join(',')
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/management" element={<Management/>} >
            <Route index element={<Dashboard />} />
            <Route path="user" element={<UserManagement/>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
