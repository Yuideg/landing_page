import React from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  greenText: {
    color: "#4bec55",
    fontWeight: 1000,
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  greenButton: {
    background: "#4bec55",
  },
  lightText: {
    color: "#d3d3d3",
    fontWeight: 1000,
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
  },
  paragraphText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 1000,
    color: "#ffffff",
  },
}));
function HowWeStarted() {
  const { greenText, lightText, paragraphText, greenButton } = useStyles();
  return (
    <Box>
      <Typography className={greenText}>HOW WE STARTED</Typography>
      <Typography className={lightText}>How we got CNCM here?</Typography>
      <Typography className={paragraphText}>
        CNCM's mission is to be the focal point for education and advocacy of
        copyright and neighboring rights, to provide a community for those
        working in this segment of industries
      </Typography>
      <Typography className={paragraphText}>
        Although the Rome Treaty has enabled neighbouring and related rights to
        be a surce of income for performers living in any country that has been
        a signatory since 1961.
      </Typography>
      <Button variant="contained" className={greenButton}>
        Learn More
      </Button>
    </Box>
  );
}

export default HowWeStarted;
