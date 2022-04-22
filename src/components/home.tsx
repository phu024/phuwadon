import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import working_space from "./images/working_space.png";

import "./home.css"
//----------------
import MediaControlCard from "./data/myCard";
import ComingSoon from "./data/coming";
import ContactSocial from "./listcontact";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid xl={6}>
              <Grid>
                <MediaControlCard />
              </Grid>
              <Grid sx={{ mt: 10 }}>
                <ComingSoon />
              </Grid>
            </Grid>
            <Grid xl={6}>
              <img src={working_space} alt="phu" className="responsive"/>
            </Grid>
            <Grid xl={12}>
              <ContactSocial />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
