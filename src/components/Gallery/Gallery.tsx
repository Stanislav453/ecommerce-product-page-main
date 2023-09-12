import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Stack, useMediaQuery } from "@mui/material";
import { ModalContainer } from "../ModalContainer/ModalContainer";
import { GalleryMainPhoto } from "./GalleryMainPhoto";
import { GalleryInsight } from "./GalleryInsight";
import { GalleryData } from "./GalleryData";
import { theme } from "../../theme";

export type galleryProps = {
  imageKey?: number;
  modalToggle?: boolean;
  setImageKey?: Dispatch<SetStateAction<number>>;
  setModalToggle?: Dispatch<SetStateAction<boolean>>;
  modalKey?: number;
};

export const Gallery = () => {
  const [imageKey, setImageKey] = useState<number>(0);
  const [modalToggle, setModalToggle] = useState<boolean>(false);

  const galleryDataLength: number = GalleryData.length - 1;

  useEffect(() => {
    if (imageKey > galleryDataLength) {
      setImageKey(0);
    }

    if (imageKey < 0) {
      setImageKey(galleryDataLength);
    }
  }, [imageKey]);


  const useMedia = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Stack direction={"column"}>
        <GalleryMainPhoto
          setModalToggle={setModalToggle}
          modalToggle={modalToggle}
          imageKey={imageKey}
          setImageKey={setImageKey}
        />
        {!useMedia && (
          <GalleryInsight imageKey={imageKey} setImageKey={setImageKey} />
        )}
      </Stack>
      {modalToggle && !useMedia && (
        <ModalContainer
          setModalToggle={setModalToggle}
          modalToggle={modalToggle}
          imageKey={imageKey}
        />
      )}
    </React.Fragment>
  );
};
