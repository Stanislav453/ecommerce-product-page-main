import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { IconButton, Container, Stack, Box } from "@mui/material";
import { theme } from "../../theme";
import CloseIcon from "@mui/icons-material/Close";
import { GalleryMainPhoto } from "../Gallery/GalleryMainPhoto";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { GalleryInsight } from "../Gallery/GalleryInsight";

type modalProps = {
  modalToggle: boolean;
  imageKey: number;
  setModalToggle: Dispatch<SetStateAction<boolean>>;
};

export const ModalContainer = ({
  imageKey,
  modalToggle,
  setModalToggle,
}: modalProps) => {
  const [modalKey, setModalKey] = useState<number>(imageKey);

  const ModalCounter = (number: number) => {
    return setModalKey((modalKey: number) => modalKey + number);
  };

  useEffect(() => {
    if (modalKey < 0) {
      setModalKey(3);
    } else if (modalKey > 3) {
      setModalKey(0);
    }
  }, [modalKey]);

  return (
    <Container
      maxWidth={false}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "999",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000000b9",
      }}
    >
      <Stack
        sx={{
          maxWidth: "500px",
          width: "100%",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => setModalToggle(false)}
          sx={{
            marginLeft: "95%",
            "& >*": { fontSize: "2rem", color: "primary.light" },
          }}
        >
          <CloseIcon />
        </IconButton>
        <IconButton
          onClick={() => ModalCounter(-1)}
          sx={{
            position: "absolute",
            top: "280px",
            left: "-40px",
            zIndex: "1000",
            fontSize: "3rem",
            color: "primary.light",
            transition: theme.transitions.create(["color"]),
            "&:hover": {
              color: "primary.main",
              transition: theme.transitions.create(["color"]),
            },
          }}
        >
          <ArrowCircleLeftIcon sx={{ fontSize: "4rem" }} />
        </IconButton>
        <IconButton
          onClick={() => ModalCounter(+1)}
          sx={{
            position: "absolute",
            top: "280px",
            right: "-40px",
            zIndex: "1000",
            fontSize: "3rem",
            color: "primary.light",
            transition: theme.transitions.create(["color"]),
            "&:hover": {
              color: "primary.main",
              transition: theme.transitions.create(["color"]),
            },
          }}
        >
          <ArrowCircleRightIcon sx={{ fontSize: "4rem" }} />
        </IconButton>
        <GalleryMainPhoto modalKey={modalKey} modalToggle={modalToggle} />

        <Box px={5}>
          <GalleryInsight
            modalKey={modalKey}
            setModalKey={setModalKey}
            modalToggle={modalToggle}
          />
        </Box>
      </Stack>
    </Container>
  );
};
