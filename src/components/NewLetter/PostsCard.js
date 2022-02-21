import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { PlayCircleFilledRounded } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  greenPaper: {
    background: "#4bec55",
    color: "#fff",
    padding: 30,
  },
  halfPaper: {
    background: "#3a3b3c",
    color: "#fff",
    padding: 30,
  },
  greenText: {
    color: "#4bec55",
    fontWeight: 1000,
    fontSize: "1.4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  bigText: {
    fontSize: "2rem",
    fontWeight: 1000,
  },
  bigText2: {
    fontSize: "1.3rem",
    fontWeight: 1000,
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  greenButton: {
    background: "#4bec55",
    padding: 10,
    color: "#fff",
  },
  paraText: {
    fontStyle: "Italic",
    fontSize: "1.2rem",
    padding: 10,
  },
}));

function PostsCard() {
  const {
    greenPaper,
    bigText2,
    halfPaper,
    greenText,
    bigText,
    paraText,
    greenButton,
  } = useStyles();
  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Paper className={greenPaper}>
              <Box align="center">
                <Typography className={bigText2}>24 july</Typography>
                <Typography className={paraText}>
                  copyright protects all creations of the human mind whatever
                  their form or ment
                </Typography>
                <Typography>Prof. Simon Zuckerberg</Typography>
              </Box>
            </Paper>
          </Grid>
          {/* brodacasting */}
          <Grid item xs={6} sm={6}>
            <Paper className={halfPaper}>
              <Box align="center">
                <Typography>
                  <PlayCircleFilledRounded />
                </Typography>
                <Typography className={bigText2}>Broadcasting</Typography>
                <Typography className={greenText}>18 June</Typography>
              </Box>
            </Paper>
          </Grid>
          {/* music card */}
          <Grid item xs={6} sm={6}>
            <Paper className={halfPaper}>
              <Box>
                <Typography className={bigText2}>
                  The Young Music Industry
                </Typography>
                <Typography className={greenText}>18 June</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      {/* last card */}
      <Grid item xs={12} sm={6}>
        <Paper className={halfPaper}>
          <Box>
            <Typography className={greenText}>24 July</Typography>
            <Typography className={bigText}>A Career in Packaging</Typography>
            <Typography>
              We're looking for both junior and seior buying candidates to join
              our client's fast paced, purchasing department within the pacaking
              industry.
            </Typography>
            <Box pt={10} />
            <Button variant="contained" className={greenButton}>
              read more
            </Button>
            <Box align="right" pt={3}>
              - - -
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PostsCard;
