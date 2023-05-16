import React from 'react'
import { Box, Paper, Typography, Button } from '@mui/material';

export default function SubTotal({ quantity }) {

    return (
        <Paper element='10' >

            <Box sx={{ display: "flex", justifyContent: "end" }}  p={5}>
                <Typography variant='h6'>Subtotal : {quantity}
                    {
                        quantity < 1 ? " Items" : " Item"
                    }
                </Typography>
                <Button variant='contained'
                    sx={{
                        bgcolor: "#D97D54",
                        "&:hover": { bgcolor: "#D97D54" },
                    }}>
                    Proceed To Pay</Button>
            </Box>
        </Paper>

    )
}
