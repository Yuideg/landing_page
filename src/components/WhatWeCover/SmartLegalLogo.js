import React from "react";
import GreenLogo from "../../assets/Logo_green.svg";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  smartText: {
    fontSize: "1.3rem",
    fontWeight: 1000,
    color: "#fff",
  },
  smartGreenLogo: {
    height: 70,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
  },
  separtateBorder: {
    borderTop: "1px solid #fff",
    margin: 30,
  },
}));

function SmartLegalLogo() {
  const { smartText, smartGreenLogo, separtateBorder } = useStyles();
  return (
    <Box align="center">
      <img src={GreenLogo} alt="green logo" className={smartGreenLogo} />
      <Box className={separtateBorder} />
      <Typography className={smartText} align="center">
        We're Making Smart Legal
        <br /> Coverage Simple
      </Typography>
    </Box>
  );
}

export default SmartLegalLogo;
