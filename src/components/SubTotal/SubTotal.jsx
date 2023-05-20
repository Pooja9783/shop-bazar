import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function SubTotal({ subtotalItemCount, subtotalPrice }) {

  return (
    <Paper element="10">
      <Box sx={{ display: "flex", justifyContent: "end" }} p={5}>
        <Typography variant="h6">
          Subtotal : ({subtotalItemCount}
          {subtotalItemCount > 1 ? " Items" : " Item"})
         RS. {subtotalPrice}
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#D97D54",
            "&:hover": { bgcolor: "#D97D54" },
          }}
        >
          Proceed To Pay
        </Button>
      </Box>
    </Paper>
  );
}
