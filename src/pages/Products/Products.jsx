import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Typography, Paper, Pagination } from "@mui/material";

import apiData from "../../Redux/action";

export default function Products() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  let itemsPerPage = 6;

  useEffect(() => {
    dispatch(apiData());
  }, [page]);

  const getAPIdata = useSelector((state) => state.data.data);
  console.log(getAPIdata);
  const totalPages = Math.ceil(getAPIdata.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      <Box my={10}>
        <Typography variant="h4" sx={{color:"#D97D54"}} my={2}>Products</Typography>

        <Box display="flex" justifyContent="space-around">
          <Box ml={15}>
            <Grid container spacing={2}>
              {getAPIdata?.slice(startIndex, endIndex)?.map((element) => {
                return (
                  <>
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: 228,
                          height: 280,
                          padding: 2,
                        },
                      }}
                    >
                      <Paper sx={{ p: 2 }}>
                        <Box>
                          <img
                            src={element.image}
                            alt="product-image"
                            width={150}
                            height={150}
                          />
                          <Typography variant="body1">
                            {element.title}
                          </Typography>
                          <Typography variant="h6">{element.price}</Typography>
                        </Box>
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
                size='large'
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
