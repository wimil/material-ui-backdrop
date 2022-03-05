import React, { useState, Fragment } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import BackdropContext from "./BackdropContext";

const DEFAULT_OPTIONS = {
  backdropProps: {},
  progressProps: {},
};

export default ({ children, progress }) => {
  const [open, setOpen] = useState(false);
  const backdrop = {
    showBackdrop() {
      setOpen(true);
    },
    hideBackdrop() {
      setOpen(false);
    },
  };

  return (
    <Fragment>
      <BackdropContext.Provider value={backdrop}>
        {children}
      </BackdropContext.Provider>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        {progress ? progress : <CircularProgress color="inherit" />}
      </Backdrop>
    </Fragment>
  );
};
