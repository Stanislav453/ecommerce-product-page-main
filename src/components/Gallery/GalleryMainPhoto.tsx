import React from "react";
import { GalleryData } from "./GalleryData";
import { GalleryDataType } from "./GalleryData";
import {
  ImageList,
  ImageListItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { galleryProps } from "./Gallery";
import { theme } from "../../theme";
import img_one from "./image/image-product-1.webp";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export const GalleryMainPhoto = ({
  setModalToggle,
  imageKey,
  modalToggle,
  modalKey,
  setImageKey,
}: galleryProps) => {
  const useMedia = useMediaQuery(theme.breakpoints.down("md"));

  const counterMobile = (number: number) => {
    return (
      setImageKey && setImageKey((mobileCount: number) => mobileCount + number)
    );
  };


  return (
    <React.Fragment>
      <ImageList
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          overflowY: "visible",
          m: 0,
        }}
        cols={1}
      >
        <ImageListItem
          sx={{
            width: "100%",
            height: "100%",
            minHeight: "500px",
            opacity: "0",
          }}
        >
          <img src={img_one} alt="one" />
        </ImageListItem>

        {GalleryData.map((item: GalleryDataType, itemKey: number) => {
          return (
            <ImageListItem
              onClick={() => setModalToggle && setModalToggle(true)}
              key={itemKey}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                minHeight: "500px",
                cursor: modalToggle ? "context-menu" : "pointer",
                transition: (theme) => theme.transitions.create(["opacity"]),
                ...(!modalToggle
                  ? {
                      zIndex: imageKey === itemKey ? 100 : 0,
                      opacity: imageKey === itemKey ? 1 : 0,
                    }
                  : {
                      zIndex:
                        modalKey === itemKey || imageKey === itemKey ? 100 : 0,
                      opacity:
                        modalKey === itemKey || imageKey === itemKey ? 1 : 0,
                    }),

                "& > *": {
                  borderRadius: useMedia ? 0 : "35px",
                },

                "&:hover": {
                  opacity: modalToggle ? 1 : 0.5,
                  transition: (theme) => theme.transitions.create(["opacity"]),
                },
              }}
            >
              <img src={item.src} alt={item.alt} />
            </ImageListItem>
          );
        })}
        {useMedia && (
          <>
            <IconButton
              onClick={() => counterMobile(+1)}
              sx={{
                position: "absolute",
                top: "40%",
                right: "0",
                zIndex: 1000,
                "& > *": {
                  fontSize: "4rem",
                  color: `${theme.palette.primary.light}`,
                },
              }}
            >
              <ArrowCircleRightIcon />
            </IconButton>
            <IconButton
              onClick={() => counterMobile(-1)}
              sx={{
                position: "absolute",
                top: "40%",
                left: "0",
                zIndex: 1000,
                "& > *": {
                  fontSize: "4rem",
                  color: `${theme.palette.primary.light}`,
                },
              }}
            >
              <ArrowCircleLeftIcon />
            </IconButton>
          </>
        )}
      </ImageList>
    </React.Fragment>
  );
};
