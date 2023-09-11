import React, { Dispatch, SetStateAction } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  IconButton,
} from "@mui/material";
import { navItem } from "../Nav/navItem";
import ClearIcon from "@mui/icons-material/Clear";

type DrawerCompProps = {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  openDrawer: boolean;
};

export const DrawerComp = ({ setOpenDrawer, openDrawer }: DrawerCompProps) => {
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <IconButton
          sx={{ marginRight: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <ClearIcon />
        </IconButton>
        <List>
          {navItem.map((item, key) => {
            return (
              <ListItemButton
                key={key}
                sx={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "900",
                  textTransform: "capitalize",
                }}
              >
                <ListItemIcon>
                  <ListItem sx={{ color: "#000" }}>{item}</ListItem>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </React.Fragment>
  );
};
