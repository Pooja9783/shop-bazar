import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  ImageListItem,
} from "@mui/material";
import { useNavigate } from "react-router";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import login from "../../assets/login.svg";

function Login() {
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (event) => {
    let userData = JSON.parse(localStorage.getItem("user")) || {}

    event.preventDefault();
    if (email === userData.email && password === userData.password) {
      alert("Login successful!");
      navigate("/home");

    } else {
      alert("Email or password is incorrect.");
    }
  };

  return (
    <div
      style={{ padding: theme.spacing(3), width: "80%", margin: "70px auto" }}
    >
      <Typography variant="h4" gutterBottom my={3} sx={{ color: "#D97D54" }}>
        Login
      </Typography>

      <Grid container spacing={3} my={3}>
        {!isMobile && (
          <Grid item md={5} p={2}>
            <ImageListItem>
              <img src={login} alt="login" />
            </ImageListItem>
          </Grid>
        )}

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            ml: {
              sx: 0,
              md: 10,
            },
          }}
        >
          <Typography variant="h6" gutterBottom>
            Enter your email address and password to login to your account.
          </Typography>

          <form style={{ marginTop: theme.spacing(2) }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#D97D54",
                    "&:hover": { bgcolor: "#D97D54" },
                  }}
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>

      {isMobile && (
        <Grid
          container
          justify="center"
          style={{ marginTop: theme.spacing(3) }}
        >
          <img
            src={login}
            alt="login"
            sx={{ width: { xs: "100px", md: "300px" } }}
          />
        </Grid>
      )}
    </div>
  );
}

export default Login;
