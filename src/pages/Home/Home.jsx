import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SimpleImageSlider from "react-simple-image-slider";
import {apiData} from "../../Redux/action";

import { Box, Typography, Paper } from "@mui/material";

const images = [
  {
    url: "https://coolwallpapers.me/picsup/3103896-board_book_brown_business_business-technologies_coffee_communication_computer_computer-technology_conceptual_cup_dark_design_desk_display_fabric_floor_gadgets_inside_internet_ipad_iphone_laptop_m.jpg",
  },

  {
    url: "https://wallpapercave.com/wp/wp1877578.jpg",
  },
  {
    url: "https://wallpaperaccess.com/full/685273.jpg",
  },
  { url: "https://wallpapercave.com/wp/wp2154269.jpg" },
  { url: "https://wallpaper.dog/large/984630.jpg" },
  { url: "https://wallpapercave.com/wp/wp7339132.jpg" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiData());
  }, []);

  const getAPIdata = useSelector((state) => state.data.data);
  console.log(getAPIdata);

  const setData = getAPIdata?.map((element) => {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 328,
                height: 250,
                padding: 2,
              },
            }}
          >
            <Paper elevation={3}>
              <Box>
                <img
                  src={element.image}
                  alt="product-image"
                  width={150}
                  height={150}
                />
                <Typography variant="body1">{element.title}</Typography>
                <Typography variant="h6">{element.price}</Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </>
    );
  });

  return (
    <>
      <Box>
        <SimpleImageSlider
          width={"100%"}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </Box>
      <Box>
        <Typography variant="h3" pt={7} sx={{color:"#D97D54"}}>
          Products
        </Typography>
      </Box>
      <Box >
        <Carousel responsive={responsive}>{setData}</Carousel>
      </Box>
    </>
  );
}
