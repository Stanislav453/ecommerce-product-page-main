import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import {
  card_button,
  card_message,
  card_name,
  price_discount,
  title,
} from "../../Data";
import { theme } from "../../theme";
import photo from "../Gallery/image/image-product-1.webp";
import DeleteIcon from "@mui/icons-material/Delete";

type showCardProps = {
  listItemValue: number;
  toggleShopCard: boolean;
  setListItemValue: Dispatch<SetStateAction<number>>;
};

export const ShopCard = ({
  listItemValue,
  toggleShopCard,
  setListItemValue,
}: showCardProps) => {

  const useMedia = useMediaQuery(theme.breakpoints.down("md"))
  const inventoryResult = listItemValue * price_discount;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: useMedia ? "100%" :"320px",
        px: useMedia ? 2 : 0,
        display: "flex",
        position: "absolute",
        right: "0",
        top: useMedia ? "73px" : "90px",
        zIndex: 10000,
      }}
    >
      <Box sx={{ width: "100%"}}>
        <Box
          sx={{
            maxHeight: toggleShopCard ? "0" : "100%",
            overflow: "hidden",
            boxShadow: "1px 1px 8px #e3e1e1",
            borderRadius: ".5rem",
            backgroundColor: `${theme.palette.primary.light}`,
            transition: theme.transitions.create(["max-height"]),
          }}
        >
          <Box>
            <Typography
              display={"block"}
              variant='h6'
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "capitalize",
                padding: "1rem",
                color: `${theme.palette.secondary.dark}`,
              }}
            >
              {card_name}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: `${theme.palette.secondary.main}`,
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                padding: "1rem",
              }}
            >
              {listItemValue === 0 ? (
                <Typography
                  variant='body2'
                  sx={{
                    color: `${theme.palette.secondary.main}`,
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {card_message}
                </Typography>
              ) : (
                <React.Fragment>
                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: ".5rem" }}
                  >
                    <Avatar alt='photo' src={photo} variant='rounded' />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        lineHeight={0}
                        variant='body2'
                        sx={{
                          color: `${theme.palette.secondary.main}`,
                          fontSize: ".8rem",
                          textTransform: "capitalize",
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        lineHeight={0}
                        variant='body2'
                        sx={{
                          color: `${theme.palette.secondary.main}`,
                          fontSize: ".9rem",
                          textTransform: "capitalize",
                        }}
                      >
                        {`$${price_discount} x ${listItemValue}`}
                        <Typography
                          lineHeight={0}
                          variant='caption'
                          sx={{
                            color: `${theme.palette.secondary.dark}`,
                            fontSize: ".9rem",
                            fontWeight: 600,
                            pl: "10px",
                          }}
                        >
                          {`$${inventoryResult}`}
                        </Typography>
                      </Typography>
                    </Box>
                    <IconButton
                      sx={{ padding: 0 }}
                      aria-label='delete list box'
                      onClick={() => setListItemValue(0)}
                    >
                      <DeleteIcon sx={{ fontSize: "1.2rem" }} />
                    </IconButton>
                  </Box>
                  <Button
                    sx={{
                      display: "block",
                      width: "100%",
                      mx: "1rem ",
                      py: ".8rem",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      backgroundColor: `${theme.palette.primary.main}`,
                      color: `${theme.palette.primary.light}`,
                      "&:hover": {
                        backgroundColor: `${theme.palette.primary.dark}`,
                      },
                    }}
                  >
                    {card_button}
                  </Button>
                </React.Fragment>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
