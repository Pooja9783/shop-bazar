import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Box,
  Typography,
  Paper,
  Pagination,
  Button,
} from "@mui/material";
import {apiData} from "../../Redux/action";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiData());
  }, []);

  const getAPIdata = useSelector((state) => state.data.data);
  console.log(getAPIdata);
  return (
    <Grid sx={{ width: "80%", margin: "100px auto" }}>
      {getAPIdata
        ?.filter((e) => e.id == `${id}`)
        ?.map((element) => {
          return (
            <>
              <Box>
                <img
                  src={element.image}
                  alt="product-image"
                  width={190}
                  height={190}
                />
                <Typography variant="body2" mt={2}>{element.description}</Typography>
                <Typography variant="h6" mt={2}>{element.title}</Typography>
                <Typography variant="h6" mt={2}>RS. {element.price}</Typography>
                <Typography variant="h6" mt={2}>Rating : {element.rating.rate}</Typography>
                {/* <Button
                          sx={{
                            margin: "10px",
                            bgcolor: "#D97D54",
                            "&:hover": { bgcolor: "#D97D54" },
                          }}
                          variant="contained"
                        >
                          Add to Cart
                        </Button> */}
              </Box>
            </>
          );
        })}
    </Grid>
  );
}
