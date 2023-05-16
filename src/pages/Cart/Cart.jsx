import React from "react";
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
import { removeToCart, incrementQuantity } from "../../Redux/action";
import SubTotal from "../../components/SubTotal/SubTotal";
export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.data.cart);
  const quantity = useSelector((state) => state.data.quantity);

  console.log(quantity);

  const handleIncrementCardItem = (itemId) => {
    console.log('handleIncrement id:', itemId);
    dispatch(incrementQuantity(itemId));
  };
  const handleRemoveCardItem = (itemId) => {
    dispatch(removeToCart(itemId));
  };

  return (
    <Grid>
      <Box mx={4} my={15}>
        {cartData.length === 0 ? (
          <Typography variant="h2">Your cart is empty.</Typography>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{bgcolor:"#e8e4e3"}}>
                  <TableRow > 
                    <TableCell sx={{ fontWeight: "bold" }}>Product Image</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Product Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Product Price</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Subtotal</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Update Quantity</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Remove Product</TableCell>
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
                      <TableCell >
                        <Typography sx={{

                          width: "200px"
                        }}>
                          {product.title}
                        </Typography>
                      </TableCell>
                      <TableCell>RS. {product.price}</TableCell>
                      <TableCell>{quantity}</TableCell>
                      <TableCell>
                        {quantity} X {quantity * product.price}
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Button
                            variant="outlined"
                            size="small"

                          >
                            -
                          </Button>
                          <Typography variant="body1">
                            {quantity}
                          </Typography>

                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleIncrementCardItem(product.id)}
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
            <SubTotal quantity={quantity}  />
            </Box>
          </>
        )}
      </Box>
   
    </Grid>
  );
}
