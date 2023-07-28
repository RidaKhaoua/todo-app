import React, { useState } from "react";
import "./Login.css";
import img from "../../assets/images/todoImage-removebg-preview.png";
import Grid from "@mui/material/Unstable_Grid2";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Link,
  Checkbox,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
const user = {
  email: "reda@gmail.com",
  password: "1234",
};

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleInputEmail(e) {
    console.log(e);
    setInputValue({ ...inputValue, email: e.target.value });
  }

  function handleInputPassword(e) {
    console.log(e);
    setInputValue({ ...inputValue, password: e.target.value });
  }

  function handleLoginUser() {
    const { email, password } = user;
    if (email === inputValue.email && password === inputValue.password) {
      navigate("/");
    } else {
      alert("noo");
    }
  }

  return (
    <div className="Login">
      <Grid
        container
        color="primary"
        sx={{ height: "100vh", overflow: "hidden" }}
      >
        <Grid xs={6} sx={{ padding: 4 }}>
          <Typography variant="h4" sx={{ margin: "50px 0" }}>
            Sign in Todo
          </Typography>
          {/* Form */}
          <FormControl
            onChange={handleInputEmail}
            fullWidth
            sx={{ m: 0, marginBottom: 3 }}
          >
            <InputLabel name="email" htmlFor="outlined-adornment-amount">
              Email
            </InputLabel>
            <OutlinedInput id="outlined-adornment-amount" label="Email" />
          </FormControl>
          <FormControl
            onChange={handleInputPassword}
            fullWidth
            sx={{ m: 0, marginBottom: 3 }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Checkbox color="secondary" /> Remember me
            </div>
            <Link href="#">Forget Password</Link>
          </Box>
          {/* ===== End Form ====== */}

          <Button
            sx={{ margin: "10px 0", padding: "18px 0" }}
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleLoginUser}
          >
            Sign In
          </Button>
        </Grid>
        {/* Right Div */}
        <Grid xs={6} sx={{ backgroundColor: "#2D4356" }}>
          <Typography
            variant="h4"
            sx={{
              margin: "20px auto",
              color: "white",
              fontSize: "25px",
              width: "400px",
              lineHeight: "1.5",
            }}
          >
            You Can Today your Todo easy Make and stay focus for your goals.
          </Typography>
          <img src={img} alt="img todo" style={{ width: "500px" }} />
        </Grid>
        {/* ======= End Right Div */}
      </Grid>
    </div>
  );
}

export default Login;
