import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const pages = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "About Us", link: "/about-us" },
  { name: "Contact", link: "/contacts" },
  { name: "Cart", link: "/cart" },
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  let userData = JSON.parse(localStorage.getItem("isLoggedIn"));

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerToggle}
        textAlign="center"
      >
        <IconButton sx={{ marginLeft: "auto" }} onClick={handleDrawerToggle}>
          <HighlightOffIcon />
        </IconButton>

        <List
          sx={{
            width: "170px",
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pages.map((page, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={page.link}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          ))}
        </List>

        {userData?.email ? (
          <>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
              }}
              width="250px"
            >
              <Box sx={{ p: 1, mb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#D97D54",
                    "&:hover": { bgcolor: "#D97D54" },
                  }}
                  onClick={handleLogout}
                  fullWidth
                >
                  Log Out
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Grid item xs={12} my={1} mx={4}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#D97D54",
                  "&:hover": { bgcolor: "#D97D54" },
                }}
                onClick={() => navigate("/login")}
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} my={1} mx={4}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#D97D54",
                  "&:hover": { bgcolor: "#D97D54" },
                }}
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
              </Button>
            </Grid>
          </>
        )}
      </Drawer>

      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
