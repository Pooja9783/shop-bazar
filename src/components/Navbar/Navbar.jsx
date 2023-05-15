import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Box,
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { styled } from '@mui/material/styles';

import DrawerComp from "./Drawer";





function generateColor(name) {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.abs(name.charCodeAt(i) * Math.sin(i + 1)) % 16)];
  }
  return color;
}


const NameAvatar = styled(Avatar)(({ theme, color }) => ({
  backgroundColor: color,
  width: theme.spacing(6),
  height: theme.spacing(6),
}));


const Navbar = () => {
  const navigate = useNavigate();

  const cartData = useSelector((state) => state.data.cart);
  let userData = JSON.parse(localStorage.getItem("user"));
  const [value, setValue] = useState();
  const theme = useTheme();
  const color = generateColor(userData ? userData?.username : " ");
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#211f1b" }}>
        <Toolbar>
          <StorefrontIcon
            sx={{ transform: "scale(2)" }}
            onClick={() => navigate("/home")}
          />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                ShopBazar
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#D97D54",
                  },
                }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" onClick={() => navigate("/home")} />

                <Tab label="Products" onClick={() => navigate("/products")} />
                <Tab label="About Us" onClick={() => navigate("/about-us")} />
                <Tab label="Contact" onClick={() => navigate("/contacts")} />
                <Tab label="Cart" onClick={() => navigate("/cart")} />
                <Box
                  sx={{
                    position: "relative",
                    width: "30px",
                    margin: "auto",
                    right: 27,
                    bottom: 10,
                  }}
                >
                  <Typography
                    sx={{
                      bgcolor: "#D97D54",
                      height: "20px",
                      width: "20px",
                      margin: "auto",
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  >
                    {cartData.length}
                  </Typography>
                </Box>
              </Tabs>
              {userData ? (
                <>
                  <NameAvatar color={color} alt={userData?.username} src="/broken-image.jpg" />
                  <Typography sx={{m:"0 10px"}}>{userData?.username}</Typography>
                </>
              ) : (
                <>
                  <Button
                    sx={{
                      marginLeft: "auto",
                      bgcolor: "#D97D54",
                      "&:hover": { bgcolor: "#D97D54" },
                    }}
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    sx={{
                      marginLeft: "10px",
                      bgcolor: "#D97D54",
                      "&:hover": { bgcolor: "#D97D54" },
                    }}
                    onClick={() => navigate("/sign-up")}
                    variant="contained"
                  >
                    SignUp
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
