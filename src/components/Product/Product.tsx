import React, { Dispatch, SetStateAction } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Gallery } from "../Gallery/Gallery";
import { Description } from "../Description/Description";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../theme";

export type productProps = {
  setListItemValue: Dispatch<SetStateAction<number>>;
};

export const Product = ({ setListItemValue }: productProps) => {
  const useMedia = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <React.Fragment>
      <Container sx={{ p:0 }} maxWidth={"lg"}>
        <Stack direction={ useMedia ? "column" : "row"} spacing={ useMedia ? 2 : 10 } mt={ useMedia ? 0 : 10}>
          <Box flex={1}>
            <Gallery />
          </Box>
          <Box flex={1} display={"flex"} alignItems={"center"}>
            <Description setListItemValue={setListItemValue} />
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};
