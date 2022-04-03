import React, { useState } from "react";

import InfoIcon from "@mui/icons-material/Info";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";

const initialState = { open: false, image: "" };

function ImageResult({ values }) {
  const [dialogData, setDialogData] = useState(initialState);
  return (
    <>
      this is imageresult component
      {/* {JSON.stringify(values.images)} */}
      <ImageList cols={3} gap={8}>
        {values.images.map((image, index) => (
          <ImageListItem key={index} sx={{ borderRadius: 2, boxShadow: 4 }}>
            <img src={image.webformatURL} alt=''/>
            <ImageListItemBar
              title={`photo by ${image.user}`}
              subtitle={image.tags}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${image.user}`}
                  onClick={() =>
                    setDialogData({
                      ...dialogData,
                      open: true,
                      image: image.largeImageURL,
                    })
                  }
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}

        <Dialog
          open={dialogData.open}
          onClose={() =>
            setDialogData({
              ...dialogData,
              open: false,
            })
          }
          maxWidth="lg"
          scroll="paper"
        >
          <DialogTitle>
            Full Image
            <Button
              onClick={() =>
                setDialogData({
                  ...dialogData,
                  open: false,
                })
              }
            >
              Close
            </Button>
          </DialogTitle>
          <DialogContent>
            <img src={dialogData.image} style={{ width: "100%" }} alt=''/>
          </DialogContent>
        </Dialog>
      </ImageList>
    </>
  );
}

export default ImageResult;
