import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MediaControlCard from "./data/myCard";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import working_space from "./images/working_space.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ flexGrow: 1 ,mt:2}}>
          <Grid container spacing={2}>
            <Grid item xl={6}>
              <MediaControlCard />
            </Grid>
            <Grid item xl={6}>
              <img src={working_space} alt="phu" width="900" />
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
            <Grid item xs={8}>
              
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
