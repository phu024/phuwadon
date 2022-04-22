import React from "react";

import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import "./contactForm.css";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactUs = () => {
  const [open, setOpen] = React.useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        "service_u4jyvgp",
        "template_ic9sz8x",
        data,
        "yLbfm4QvtDEJ1wVps"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
          clearForm(e);
        },
        (error) => {
          console.log(error.text);
          setOpen(false);
        }
      );
  };

  //clear form after sendEmail success
  function clearForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = e.target as HTMLFormElement;
    data.reset();
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{ width: "100%", maxWidth: "600px", mx: "auto", mt: "50px" }}
      >
        <div>
          <p className="content-header">Contact Us</p>
        </div>
        <form onSubmit={sendEmail}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              name="from_name"
              label="Name"
              variant="outlined"
              required
              sx={{ width: "100%", mb: "10px", my: 2 }}
            />
            <TextField
              name="from_email"
              label="Email"
              variant="outlined"
              type="email"
              required
              sx={{ width: "100%", mb: "10px", my: 2 }}
            />
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              required
              multiline
              rows={4}
              sx={{ width: "100%", mb: "10px", my: 2 }}
            />
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Button
                type="submit"
                sx={{
                  color: "text.primary",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </form>
        <Snackbar open={open} autoHideDuration={2000}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your message has been sent successfully!
          </Alert>
        </Snackbar>
      </Box>
    </React.Fragment>
  );
};

export default ContactUs;
