import {
  Button,
  Stack,
  IconButton,
  AppBar,
  Toolbar,
  Avatar,
  Tabs,
  Tab,
  Badge,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import avatar from "../../assets/image-avatar.png";
import { useState, Dispatch, SetStateAction } from "react";
import { theme } from "../../theme";
import { ShopCard } from "../ShopCard/ShopCard";
import { DrawerComp } from "../DrawerComp/DrawerComp";
import { navItem } from "./navItem";
import MenuIcon from "@mui/icons-material/Menu";

export type navProps = {
  listItemValue: number;
  setListItemValue: Dispatch<SetStateAction<number>>;
};

export const Nav = ({ listItemValue, setListItemValue }: navProps) => {
  const [navKey, setNavKey] = useState<number | null>(0);
  const [toggleShopCard, setToggleShopCard] = useState<boolean>(true);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const useMedia = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="static"
        sx={{
          position: "relative",
          borderBottom: useMedia ? "none" : "1px solid lightGrey",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <ShopCard
          listItemValue={listItemValue}
          setListItemValue={setListItemValue}
          toggleShopCard={toggleShopCard}
        />
        <Stack direction="row">
          {useMedia ? (
            <Stack direction={"row"} alignItems={"center"}>
              <DrawerComp
                setOpenDrawer={setOpenDrawer}
                openDrawer={openDrawer}
              />
              <IconButton
                sx={{ "& > *": { fontSize: "2rem" } }}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <MenuIcon />
              </IconButton>
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    cursor: "default",
                  },
                }}
                disableRipple
              >
                <img src={logo} alt="logo" />
              </Button>
            </Stack>
          ) : (
            <>
              <Button
                sx={{
                  p: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                    cursor: "default",
                  },
                }}
                disableRipple
              >
                <img src={logo} alt="logo" />
              </Button>
              <Toolbar sx={{ ml: 3 }}>
                <Tabs
                  value={navKey}
                  TabIndicatorProps={{
                    sx: {
                      height: "4px",
                    },
                  }}
                >
                  {navItem.map((item, key: number) => (
                    <Tab
                      key={key}
                      onClick={() => setNavKey(key)}
                      href={"#"}
                      color="secondary"
                      disableRipple
                      sx={{
                        textTransform: "capitalize",
                        height: "110px",
                        "&:hover": {
                          color: `${theme.palette.primary.main}`,
                        },
                      }}
                      label={item}
                    />
                  ))}
                </Tabs>
              </Toolbar>
            </>
          )}
          <Stack
            direction="row"
            alignItems={"center"}
            sx={{ marginLeft: "auto" }}
          >
            <IconButton
              sx={{
                transform: "scale(1)",
                transition: theme.transitions.create(["transform"]),
                "&:hover": {
                  transform: "scale(1.3)",
                  transition: theme.transitions.create(["transform"]),
                },
              }}
              onClick={() => setToggleShopCard(!toggleShopCard)}
            >
              <Badge
                badgeContent={listItemValue}
                color="info"
                sx={{
                  alignSelf: "center",
                  "& > *": {
                    fontSize: "1.8rem",
                  },
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar
                onClick={() => setToggleShopCard(!toggleShopCard)}
                sx={{
                  outline: `0px solid ${theme.palette.primary.main}`,
                  transition: "outline .05s ease",
                  ":hover": {
                    outline: `3px solid ${theme.palette.primary.main}`,
                    cursor: "pointer",
                    transition: "outline .05s ease",
                  },
                }}
                src={avatar}
                alt="avatar"
              />
            </IconButton>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
};
