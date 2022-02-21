import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import Partner from "../assets/Partner.svg";

const useStyles = makeStyles((theme) => ({
  ourpartner: {
    background: "#fff",
  },
  mainText: {
    color: "#4bec55",
    fontSize: "1.5rem",
    fontWeight: 1000,
  },
  greenText: {
    fontWeight: 1000,
    fontSize: "2rem",
  },
  partnerImage: {
    height: 200,
    width: 600,
    [theme.breakpoints.down("sm")]: {
      height: 50,
      width: 300,
    },
  },
}));

function OurPartner() {
  const { ourpartner, mainText, greenText, partnerImage } = useStyles();
  return (
    <section className={ourpartner}>
      <Box pt={5} align="center">
        <Typography align="center" className={mainText}>
          Our Works
        </Typography>
        <Typography align="center" className={greenText}>
          Our Partners
        </Typography>
        <Box pt={5} />
        <img src={Partner} alt="partners" className={partnerImage} />
      </Box>
    </section>
  );
}

export default OurPartner;
