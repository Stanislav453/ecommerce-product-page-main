import { useState } from "react";
import Container from "@mui/material/Container";
import { Nav } from "./components/Nav/Nav";
import { Product } from "./components/Product/Product";
import { CssBaseline } from "@mui/material";

export const App = () => {
  const [listItemValue, setListItemValue] = useState<number>(0);


  return (
    <CssBaseline>
      <Container sx={{ p: 0, pb: 5 }} maxWidth={"lg"}>
        <Nav
          listItemValue={listItemValue}
          setListItemValue={setListItemValue}
        />
        <Product setListItemValue={setListItemValue} />
      </Container>
    </CssBaseline>
  );
};
