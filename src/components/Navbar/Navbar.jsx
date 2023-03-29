import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

import DrawerComp from "./Drawer";
const Navbar = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState();
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#211f1b" }} >
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
                <Tab label="About Us" onClick={() => navigate("/about-us")}/>
                <Tab label="Contact" onClick={() => navigate("/contacts")}/>
                <Tab label="Cart" onClick={() => navigate("/")}/>

              </Tabs>
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
                onClick={() => navigate("/sing-up")}

                variant="contained"
              >
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
