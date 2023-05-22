import React, { useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  removeToCart,
  incrementQuantity,
  decrementQuantity,
  calculateSubtotal,
} from "../../Redux/action";
import SubTotal from "../../components/SubTotal/SubTotal";


export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.data.cart);
  const subtotalPrice = useSelector((state) => state.data.subtotalPrice);
  const subtotalItemCount = useSelector((state) => state.data.subtotalItem);

  useEffect(() => {
    dispatch(calculateSubtotal());
  }, []);

  console.log(subtotalPrice, subtotalItemCount);
  const handleIncrementCardItem = (itemId) => {
    dispatch(incrementQuantity(itemId));
    dispatch(calculateSubtotal());

  };

  const handleDecrementCardItem = (itemId) => {
    dispatch(decrementQuantity(itemId));
    dispatch(calculateSubtotal());

  };

  const handleRemoveCardItem = (itemId) => {
    dispatch(removeToCart(itemId));
    dispatch(calculateSubtotal());

  };

  return (
    <Grid>
      <Box mx={4} my={15} height="100vh">
        {cartData.length === 0 ? (
          <Typography variant="h2">Your cart is empty.</Typography>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ bgcolor: "#e8e4e3" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Product Image
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Product Name
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Product Price
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Subtotal</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Update Quantity
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Remove Product
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartData.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img
                          src={product.image}
                          alt="product-image"
                          width="100px"
                          height="100px"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            width: "200px",
                          }}
                        >
                          {product.title}
                        </Typography>
                      </TableCell>
                      <TableCell>RS. {product.price}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>
                        {product.quantity} X {product.quantity * product.price}
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleDecrementCardItem(product.id)}
                            sx={{
                              color:"black",
                              borderColor: "#D97D54",
                              "&:hover": { borderColor: "#D97D54" },
                            }}
                          >
                            -
                          </Button>
                          <Typography variant="body1">
                            {product.quantity}
                          </Typography>

                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleIncrementCardItem(product.id)}
                            sx={{
                              color:"black",
                              borderColor: "#D97D54",
                              "&:hover": { borderColor: "#D97D54" },
                            }}
                            

                          >
                            +
                          </Button>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleRemoveCardItem(product.id)}
                          sx={{
                            bgcolor: "#D97D54",
                            "&:hover": { bgcolor: "#D97D54" },
                          }}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box mt={4}>
              <SubTotal subtotalItemCount={subtotalItemCount} subtotalPrice={subtotalPrice}/>
            </Box>
          </>
        )}
      </Box>
    </Grid>
  );
}
