import React from 'react'
import { Grid, Button, Typography } from '@mui/material';
import {  Link } from "react-router-dom";

export default function Checkout() {
  return (
    <>
    <Grid mt={20} height="60vh"> 
      <Typography variant='h3'>Thank you for shopping...</Typography>
      <Link to='/products'>
      <Typography my={5} variant='h5'>Continue for shopping</Typography>
      </Link>
      </Grid>
    </>
  )
}
