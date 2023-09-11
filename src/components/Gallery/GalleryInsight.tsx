import React, { Dispatch, SetStateAction } from "react";
import { ImageList, ImageListItem, Box } from "@mui/material";
import { GalleryData, GalleryDataType } from "./GalleryData";
import { theme } from "../../theme";

type insightProps = {
  imageKey?: number;
  setImageKey?: Dispatch<SetStateAction<number>>;
  modalKey?: number;
  setModalKey?: Dispatch<SetStateAction<number>>;
  modalToggle?: boolean;
};

export const GalleryInsight = ({
  setImageKey,
  imageKey,
  setModalKey,
  modalKey,
  modalToggle,
}: insightProps) => {
  return (
    <React.Fragment>
      <ImageList
        sx={{
          width: "100%",
          overflowY: "visible",
          "& > *": {
            minHeight: "107px",
          },
        }}
        cols={4}
        gap={20}
      >
        {GalleryData.map((item: GalleryDataType, itemKey: number) => {
          return (
            <ImageListItem
              onClick={() =>
                !modalToggle
                  ? setImageKey && setImageKey(itemKey)
                  : setModalKey && setModalKey(itemKey)
              }
              key={itemKey}
              sx={{
                position: "relative",
                height: "107px",
                "& > *": {
                  position: "absolute",
                  borderRadius: "25px",
                  top: "0",
                  left: "0",
                  height: "100%",
                  minHeight: "107px",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                sx={{
                  ...(!modalToggle
                    ? {
                        zIndex: imageKey === itemKey ? 10 : 0,
                        outline:
                          imageKey === itemKey
                            ? `6px solid ${theme.palette.primary.main}`
                            : `0px solid ${theme.palette.primary.main}`,
                        transition: (theme) =>
                          theme.transitions.create(["outline"]),
                      }
                    : {
                        zIndex: modalKey === itemKey ? 10 : 0,
                        outline:
                          modalKey === itemKey
                            ? `6px solid ${theme.palette.primary.main}`
                            : `0px solid ${theme.palette.primary.main}`,
                        transition: (theme) =>
                          theme.transitions.create(["outline"]),
                      }),

                  width: "100%",
                  backgroundColor: `${theme.palette.secondary.light}`,
                }}
              ></Box>
      
                <img src={item.src} alt={item.alt} loading='lazy' />
          
            </ImageListItem>
          );
        })}
      </ImageList>
    </React.Fragment>
  );
};
