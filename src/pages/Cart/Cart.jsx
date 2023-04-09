import React, { useState } from "react";
import { Grid, Box, Typography, Paper, Stack, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart, incrementQuantity } from "../../Redux/action";
export default function Cart() {
  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(1);
  const cartData = useSelector((state) => state.data.cart);
  const quantity = useSelector((state) => state.data.quantity);

  // console.log(quantities);
  const handleIncrementCardItem = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleRemoveCardItem = (itemId) => {
    dispatch(removeToCart(itemId));
  };

  return (
    <Grid>
      <Box mx={4} my={15}>
        {cartData.length == 0 ? (
          <Typography variant="h2">Your cart is empty.</Typography>
        ) : (
          <Box>
            {cartData?.map((product) => {
              return (
                <>
                  <Paper>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      m={3}
                      p={3}
                    >
                      <img
                        src={product.image}
                        alt="product-image"
                        width="100px"
                        height="100px"
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          width: "200px",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          width: "100px",
                        }}
                      >
                        RS. {product.price}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          width: "100px",
                        }}
                      >
                        {quantity} x {product.price}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          width: "100px",
                        }}
                      >
                        {quantity * product.price}
                      </Typography>
                      <Box sx={{ display: "flex" }}>
                        <Button
                          variant="outlined"
                          sx={{ width: "10px", height: "30px" }}
                        >
                          -
                        </Button>
                        <Typography variant="body1">{quantity}</Typography>
                        <Button
                          variant="outlined"
                          sx={{ width: "10px", height: "30px" }}
                          onClick={()=> handleIncrementCardItem(product.id)}
                        >
                          +
                        </Button>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{ width: "auto", height: "40px" }}
                        onClick={() => handleRemoveCardItem(product.id)}
                      >
                        Remove Product
                      </Button>
                    </Stack>
                  </Paper>
                </>
              );
            })}
          </Box>
        )}
      </Box>
    </Grid>
  );
}
