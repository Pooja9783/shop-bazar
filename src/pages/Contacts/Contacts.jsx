import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Contacts() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div
      style={{ padding: theme.spacing(3), width: "80%", margin: "70px auto" }}
    >
      <Typography variant="h4" gutterBottom my={2} sx={{color:"#D97D54"}}>
        Contact Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            For general inquiries or customer support, please fill out the form
            below or email us at{" "}
            <a href="mailto:info@ecommerce.com" style={{color:"#D97D54"}}>info@ecommerce.com</a>.
          </Typography>

          <form style={{ marginTop: theme.spacing(2) }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
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
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" sx={{
                  marginLeft: "10px",
                  bgcolor: "#D97D54",
                  "&:hover": { bgcolor: "#D97D54" },
                }}
                variant="contained" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Our headquarters is located at:
          </Typography>

          <Typography variant="body1" gutterBottom>
            123 Main St, Suite 200
            <br />
            Anytown, USA 12345
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            For business inquiries or partnership opportunities,
            <br/> please email us
            at <a style={{color:"#D97D54"}} href="mailto:sales@ecommerce.com">sales@ecommerce.com</a>.
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            For press or media inquiries, please email us at{" "}
            <a style={{color:"#D97D54"}} href="mailto:media@ecommerce.com">media@ecommerce.com</a>.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contacts;
