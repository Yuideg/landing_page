import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import WhatWeStandForCard from "./WhatWeStandFor/WhatWeStandForCard";

const useStyles = makeStyles((theme) => ({
  whatWeStandFor: {
    background: `#fff`,
  },
  greenButton: {
    background: "#4bec55",
    padding: 10,
  },
  greenBigText: {
    color: "#4bec55",
    fontWeight: 1000,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  grayBigText: {
    fontStyle: "italic",
  },
}));

function WhatWeStandFor() {
  const { whatWeStandFor, greenBigText, grayBigText } = useStyles();
  return (
    <section className={whatWeStandFor}>
      <Grid container>
        <Grid item xs={1} sm={1} />
        <Grid item xs={10} sm={10}>
          <Box align="center" pt={5}>
            <Typography className={greenBigText}>WHAT WE STAND FOR</Typography>
            <Typography className={grayBigText}>
              CNCM provides the community support, debate and faster the work of
              all members
            </Typography>
            <Box align="center" pt={10}>
              <WhatWeStandForCard />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} />
      </Grid>
      <Box pb={5} />
    </section>
  );
}

export default WhatWeStandFor;
