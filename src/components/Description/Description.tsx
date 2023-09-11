import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import {
  company,
  title,
  description,
  price_discount,
  price_discount_percentage,
  price_full,
} from "../../Data";
import { theme } from "../../theme";
import { productProps } from "../Product/Product";

export const Description = ({ setListItemValue }: productProps) => {
  const [buttonValue, setButtonValue] = useState<number>(0);

  const ButtonCounter = (value: number) => {
    setButtonValue((buttonValue: number) => buttonValue + value);
  };

  useEffect(() => {
    if (buttonValue < 0) {
      setButtonValue(0);
    }
  }, [buttonValue]);

  const useMedia = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Stack direction={"column"} spacing={useMedia ? 2 : 5} px={useMedia ? 2 : 0}>
      <Box>
        <Typography
          variant='overline'
          display='block'
          color={`${theme.palette.primary.main}`}
          sx={{ fontWeight: "600" }}
        >
          {company}
        </Typography>
        <Typography
          variant='h1'
          sx={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "900",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2' color={`${theme.palette.secondary.main}`}>
          {description}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={useMedia ? "row" : "column"}
        justifyContent={"space-between"}
        gap={1}
      >
        <Box display={"flex"} gap={3} alignItems={"center"}>
          <Typography variant='h4' sx={{ fontWeight: "900" }}>
            {"$"}
            {price_discount}
          </Typography>
          <Typography
            display={"inline"}
            sx={{
              fontWeight: "900",
              padding: ".2rem .6rem .2rem .6rem",
              backgroundColor: "#db6d293c",
              color: `${theme.palette.primary.main}`,
              borderRadius: ".5rem",
            }}
          >
            {price_discount_percentage}
            {"%"}
          </Typography>
        </Box>

        <Typography
          variant='h5'
          sx={{ fontWeight: "900", textDecoration: "line-through" }}
          color={theme.palette.secondary.main}
        >
          {"$"}
          {price_full}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={useMedia ? "column" : "row"}
        gap={useMedia ? 2 : 5}
      >
        <ButtonGroup
          variant='string'
          aria-label='button item counter'
          sx={{
            display: "flex",
            backgroundColor: `${theme.palette.secondary.contrastText}`,
            color: `${theme.palette.primary.main}`,
          }}
        >
          <Button
            onClick={() => ButtonCounter(1)}
            sx={{ padding: ".7rem 1.5rem .7rem 1.5rem", fontWeight: 900 }}
          >
            +
          </Button>
          <Button
            sx={{
              flex: 1,
              fontWeight: 900,
              backgroundColor: "transparent",
              color: "#000",
              "&:hover": {
                backgroundColor: "transparent",
                cursor: "context-menu",
              },
            }}
            disableRipple
          >
            {buttonValue}
          </Button>
          <Button
            onClick={() => ButtonCounter(-1)}
            sx={{ padding: "1.2rem 2rem 1.2rem 2rem", fontWeight: 900 }}
          >
            -
          </Button>
        </ButtonGroup>
        <Button
          onClick={() => setListItemValue(buttonValue)}
          variant='contained'
          sx={{
            flex: 1,
            color: `${theme.palette.primary.light}`,
            padding: "1.2rem 2rem 1.2rem 2rem",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: `0px 5px 20px ${theme.palette.primary.dark}`,
            },
          }}
          startIcon={<ShoppingCartIcon />}
        >
          Add to card
        </Button>
      </Box>
    </Stack>
  );
};
