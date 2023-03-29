import React from 'react';
import {Typography, Grid} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div style={{ padding: theme.spacing(3),  width:"80%", margin:"70px auto" }} >
      <Typography variant="h4" gutterBottom sx={{color:"#D97D54"}}>
        About Us
      </Typography>

      <Typography variant="h6" gutterBottom my={4}>
        Our eCommerce website was founded in 2010 with a mission to provide high-quality products at affordable prices.
      </Typography>

      <Grid container spacing={3} my={4}>
        <Grid item xs={12} sm={6} >
          <Typography variant="h6" gutterBottom my={2}>
            Our Story
          </Typography>

          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget sapien non purus faucibus imperdiet
            sed vel nisl. Sed at dui eget orci tristique pulvinar. Integer libero purus, pharetra vel ante nec,
            vestibulum ullamcorper mauris.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom my={2}>
            Our Products
          </Typography>

          <Grid container spacing={2}>
          
             <Typography variant="subtitle1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget sapien non purus faucibus imperdiet sed
        vel nisl. Sed at dui eget orci tristique pulvinar. Integer libero purus, pharetra vel ante nec, vestibulum
        ullamcorper mauris.
      </Typography>
          </Grid>
        </Grid>
      </Grid>

     
    </div>
  );
}

export default AboutUs;
