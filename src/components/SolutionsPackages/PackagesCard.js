import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles
= makeStyles((theme) => ({
  titleone: {
    fontWeight: 1000,
    color: "#4bec55",
    fontSize: "1.5rem",
  },
  titletwo: {
    fontWeight: 1000,
    fontSize: "2rem",
  },
  titlethree: {
    fontStyle: "italic",
    fontSize: "1.5rem",
  },
  desc: {
    fontSize: "1.5rem",
    height: "18rem",
    color: "gray",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
}));

function PackagesCard({ title1, title2, title3, description }) {
  const { titleone, titletwo, titlethree, desc } = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Card elevation={10}>
        <CardContent>
          <Box align="center" p={5}>
            <Typography className={titleone}>{title1}</Typography>
            <Typography className={titletwo}>{title2}</Typography>
            <Typography className={titlethree}>{title3}</Typography>
            <Box pt={5} />
            <Typography className={desc}>{description}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PackagesCard;
