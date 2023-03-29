import React, { useState } from "react";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const pages = ["Products", "Services", "ABoutUs", "ContactUs"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        textAlign="center"
      >
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <HighlightOffIcon />
        </IconButton>
        <List sx={{ width: "150px" }}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon sx={{ margin: "auto" }}>
                <ListItemText bgcolor="red">{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
