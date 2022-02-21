import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  getAccess: {
    background: `repeating-linear-gradient(#333, #333 50%, #fff 20.1%, #fff 110%)`,
    color: "#fff",
  },
  paper1: {
    padding: 20,
    background: "#3a3b3c",
    color: "#fff",
  },
  mainText: {
    fontWeight: 800,
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  secondText: {
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "gray",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  greenButton: {
    background: "#4bec55",
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
  },
}));

function GetAccess() {
  const { getAccess, mainText, paper1, secondText, greenButton } = useStyles();
  return (
    <section className={getAccess}>
      <Box pt={2} />
      <Grid container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Box align="center" p={2}>
            <Paper elevation={10} className={paper1}>
              <Box align="center" p={5}>
                <Typography className={mainText}>
                  Get access all over the country
                </Typography>
                <Typography className={secondText}>
                  Based in Addis reaching every corner where arrt flows.
                </Typography>
                <Box pt={2} />
                <Button className={greenButton} variant="contained">
                  Contact Us <ArrowForward />
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </section>
  );
}

export default GetAccess;
