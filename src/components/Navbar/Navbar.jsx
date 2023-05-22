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
  Popover,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { styled } from "@mui/material/styles";
import DrawerComp from "./Drawer";

function generateColor(name) {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color +=
      letters[Math.floor(Math.abs(name.charCodeAt(i) * Math.sin(i + 1)) % 16)];
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
  let userData = JSON.parse(localStorage.getItem("isLoggedIn"));
  const [value, setValue] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const color = generateColor(userData ? userData?.email : " ");
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                    ShopBazar
                  </Typography>
                </Grid>
                {userData && (
                  <Grid item>
                    <NameAvatar
                      color={color}
                      alt={userData.email}
                      src="/broken-image.jpg"
                      onClick={handleClick}
                    />
                  </Grid>
                )}
              </Grid>
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
                <Tab label="Contact Us" onClick={() => navigate("/contacts")} />
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
                  <NameAvatar
                    color={color}
                    alt={userData?.email}
                    src="/broken-image.jpg"
                    onClick={handleClick}
                  />
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        placeItems: "center",
                      }}
                      width="250px"
                    >
                      <Box p={2}>
                        <NameAvatar
                          color={color}
                          alt={userData?.email}
                          src="/broken-image.jpg"
                          width="100px"
                          height="100px"
                        />
                      </Box>
                      <div
                        style={{
                          width: "100%",
                          height: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.12)",
                          margin: "8px 0",
                        }}
                      />
                      <Typography sx={{ p: 1 }}>{userData?.email}</Typography>
                      <div
                        style={{
                          width: "100%",
                          height: "1px",
                          backgroundColor: "rgba(0, 0, 0, 0.12)",
                          margin: "8px 0",
                        }}
                      />{" "}
                      <Box sx={{ p: 1, mb: 2 }}>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#D97D54",
                            "&:hover": { bgcolor: "#D97D54" },
                          }}
                          onClick={handleLogout}
                        >
                          Log Out
                        </Button>
                      </Box>
                    </Box>
                  </Popover>
                  <Typography sx={{ m: "0 10px" }}>
                    {userData?.email}
                  </Typography>
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
