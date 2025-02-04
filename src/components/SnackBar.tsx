"use client";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { SnackBarT } from "@/types/types";

interface SnackBarType {
  snackBarState: SnackBarT;
  handleClose: () => void;
}

function SnackBarComponent({ snackBarState, handleClose }: SnackBarType) {
  const { open, vertical, horizontal, snackBarMessage } = snackBarState;
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ backgroundColor: "#FB2E86" }}
      >
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );
}
export default SnackBarComponent;
