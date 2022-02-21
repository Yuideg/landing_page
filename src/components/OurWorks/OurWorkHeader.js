import React from "react";
import {
  Button,
  Grid,
  Box,
  makeStyles,
  CardHeader,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  secondText: {
    color: "#4bec55",
    fontSize: "1.5rem",
    fontWeight: 1000,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  thirdText: {
    fontWeight: 1000,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  greenButton: {
    background: "#4bec55",
  },
}));

function OurWorkHeader() {
  const { secondText, thirdText, greenButton } = useStyles();
  return (
    <Box pt={2}>
      <Grid>
        <Grid
          container
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <CardHeader
              title={<Typography className={secondText}>Our Works</Typography>}
              subheader={
                <Typography className={thirdText}>Cases We Handled</Typography>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box align="right">
              <Button>all</Button>
              <Button variant="contained" className={greenButton}>
                films
              </Button>
              <Button>music</Button>
              <Button>authors</Button>
              <Button>performance</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurWorkHeader;
