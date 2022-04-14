import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function ComingSoon() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info" variant="outlined">
        <AlertTitle>Coming Soon</AlertTitle>
        This is a work in progress. I'm working on it.
      </Alert>
    </Stack>
  );
}
