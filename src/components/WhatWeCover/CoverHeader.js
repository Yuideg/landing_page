import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  topHeader: {
    fontWeight: "1000",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  smallHeader: {
    fontWeight: "1000",
    color: "#4bec55",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
}));

function CoverHeader() {
  const { topHeader, smallHeader } = useStyles();
  return (
    <Box>
      <Typography align="center" className={topHeader}>
        WHAT WE COVER
      </Typography>
      <Typography align="center" className={smallHeader}>
        we're taking legal represntation for different sectors
      </Typography>
    </Box>
  );
}

export default CoverHeader;
