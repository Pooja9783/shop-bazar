import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Pagination,
  Button,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

import { useNavigate, Link } from "react-router-dom";
import { apiData, addToCart, removeToCart } from "../../Redux/action";

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("relevance");
  const [sortOrder, setSortOrder] = useState("relevance");
  const [quantity, setQuantity] = useState(0);

  //getting data from redux store
  const getAPIdata = useSelector((state) => state.data.data);
  const cartData = useSelector((state) => state.data.cart);


  useEffect(() => {
    dispatch(apiData());
  }, [getAPIdata]);

  // remove card data
  const handleRemoveCardItem = (itemId) => {
    dispatch(removeToCart(itemId));
  };

  //fitering for category
  const filteredProducts = getAPIdata.filter((product) => {
    if (selectedCategory === "relevance") {
      return true;
    } else {
      return product.category === selectedCategory;
    }
  });

  //sorting for price
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "relevance") {
      return a;
    } else if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  //pagination functionlities
  let itemsPerPage = 5;
  const totalPages = Math.ceil(getAPIdata.length / itemsPerPage);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //add to cart function
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Box my={10}>
        <Typography variant="h4" sx={{ color: "#D97D54" }} my={2}>
          Products
        </Typography>

        <Box my={5} sx={{ display: "flex", justifyContent: "end", mr: 12 }}>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Sort By
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="highToLow">Price Hight to Low</MenuItem>
              <MenuItem value="lowToHigh">Price Low to High</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="jewelery">Jewelery</MenuItem>
              <MenuItem value="men's clothing">Men's clothing</MenuItem>
              <MenuItem value="women's clothing">Women's clothing</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box display="flex" justifyContent="space-around">
          <Box ml={15}>
            <Grid container spacing={2}>
              {sortedProducts?.slice(startIndex, endIndex)?.map((element) => {
                return (
                  <>
                    <Grid
                      key={element.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: 228,
                          height: 320,
                          padding: 2,
                        },
                      }}
                    >
                      <Paper sx={{ p: 2 }}>
                        <Link
                          to={`/product-details/${element.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <Box>
                            <img
                              src={element.image}
                              alt="product-image"
                              width={150}
                              height={150}
                            />
                            <Typography
                              variant="body1"
                              sx={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {element.title}
                            </Typography>
                            <Typography variant="h6">
                              Rs. {element.price}
                            </Typography>
                          </Box>
                        </Link>

                        <Button
                            sx={{
                              margin: "10px",
                              bgcolor: "#D97D54",
                              "&:hover": { bgcolor: "#D97D54" },
                            }}
                            onClick={() => handleAddToCart(element)}
                            variant="contained"
                            disabled={cartData === 1 && true}
                          >
                            Add to Cart
                          </Button>
                      </Paper>
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                variant="outlined"
                color="primary"
                size="large"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
