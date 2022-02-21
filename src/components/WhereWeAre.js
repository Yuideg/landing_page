import { Grid, makeStyles, Box, Typography } from "@material-ui/core";
import React from "react";
import Ethiopia from "../assets/ET-AA.png";
const useStyles = makeStyles((theme) => ({
  whereWeAre: {
    paddingBottom: 30,
    background: `#333`,
    color: "#fff",
  },
  ethiopia: {
    height: 400,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
  title1: {
    color: "#4bec55",
    fontWeight: 1000,
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  title2: {
    fontWeight: 1000,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  },
  desc: {
    fontSize: "1.3rem",
  },
  comunity: {
    fontSize: "5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  comunity2: {
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  },
}));

function WhereWeAre() {
  const { whereWeAre, ethiopia, desc, title1, title2, comunity, comunity2 } =
    useStyles();
  return (
    <section className={whereWeAre}>
      <Box pt={5} />
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid
            container
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={6}>
              <Box align="center">
                <img src={Ethiopia} alt="location" className={ethiopia} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={title1}>Where We Are?</Typography>
              <Typography className={title2}>
                We're Building a <br />
                <small className={comunity}>Community</small>
                <br />
                <small className={comunity2}>of coverage</small>
              </Typography>
              <Typography className={desc}>
                With provider copyright and neighboring right across the
                Ethiopia, our professionals are both personally invested in{" "}
                <br /> your case and well acquainted with local laws and
                requaltions.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </section>
  );
}

export default WhereWeAre;
