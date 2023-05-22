import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  ImageListItem,
  Box
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

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
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    let user = {
      email,
    };

    const userData = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(userData);
    if (userData !== undefined) {
      localStorage.setItem("isLoggedIn", JSON.stringify(userData));
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
         mt={5}
        >
          <Typography variant="h6" px={4} gutterBottom>
            Enter your email address and password to login to your account.
          </Typography>

          <form style={{ marginTop: theme.spacing(2) }} onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{px:{xs:0, md:4}}}>
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
              <Box sx={{ textAlign:"center"}}>
              <Link to="/sign-up" style={{color:"black"}}>
                <Typography variant="h6" m={2} color='black' >Don't have an account already ?</Typography>
              </Link>
              </Box>
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
