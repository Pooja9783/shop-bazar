import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ background: "#211f1b", color:"white", py:4 }}>
      <Container maxWidth="lg">
        <Grid container sx={{display:"flex", justifyContent:"space-between"}}>
          <Grid item xs={12} sm={6} md={3} my={2}>
            <Typography variant="h6" gutterBottom>About Us</Typography>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis leo et laoreet dapibus.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}  my={2} >
            <Typography variant="h6" gutterBottom>Subscribe to Our Newsletter</Typography>
            <Box sx={{ display: 'flex',  justifyContent:"left" }}>
           
            <EmailIcon /> <Typography variant="body2" m={0} >Stay up to date with our latest news and promotions.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}  my={2}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box sx={{ display: 'flex', justifyContent:"center" }}>
              <FacebookIcon sx={{mr:1}}  />
              <TwitterIcon   sx={{mr:1}}/>
              <InstagramIcon  sx={{mr:1}} />
              <LinkedInIcon  sx={{mr:1}} />
              
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
