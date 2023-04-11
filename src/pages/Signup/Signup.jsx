import React, { useState, useContext, useEffect } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  ImageListItem,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import login from "../../assets/login.svg";
import { SignUpContext } from "../../contextApi/SignUpContextApi";

function Signup() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const { setSignUpInfo, handleSignUp } = useContext(SignUpContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      handleSignUp(user.username, user.email, user.password);
    }
  }, [handleSignUp]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp(
      event.target.username.value,
      event.target.email.value,
      event.target.password.value
    );
    setSignUpInfo( event.target.username.value)
    navigate("/login");
  };

  return (
    <div
      style={{ padding: theme.spacing(3), width: "80%", margin: "70px auto" }}
    >
      <Typography variant="h4" gutterBottom my={3} sx={{ color: "#D97D54" }}>
        Sign Up
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
                  type="text"
                  label="Enter Name"
                  variant="outlined"
                  name="username"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enter Email"
                  variant="outlined"
                  name="email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enter Password"
                  type="password"
                  variant="outlined"
                  name="password"
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
                  Sign Up
                </Button>
              </Grid>
              <Link to='/login'>
              <Typography>have an account already ?</Typography>
              </Link>
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

export default Signup;
