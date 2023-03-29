import React from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  ImageListItem,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import login from "../../assets/login.svg";

function Signup() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div
      style={{ padding: theme.spacing(3), width: "80%", margin: "70px auto" }}
    >
      <Typography variant="h4" gutterBottom my={3} sx={{ color: "#D97D54" }}>
      Sign Up
      </Typography>

      <Grid container spacing={3} my={3}>
        {!isMobile && (
          <Grid item md={5} p={2} >
            <ImageListItem>
              <img src={login} alt="login" />
            </ImageListItem>
          </Grid>
        )}

        <Grid item xs={12} md={5} ml={10}>
          <Typography variant="h6" gutterBottom>
            Enter your email address and password to login to your account.
          </Typography>

          <form style={{ marginTop: theme.spacing(2) }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
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
