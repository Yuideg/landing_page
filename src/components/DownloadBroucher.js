import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  downloadBrouchers: {
    background: `repeating-linear-gradient(#fff , #fff 50%, #333 50%, #333 120%)`,
    color: "#fff",
  },
  paper1: {
    padding: 20,
    background: "#d3d3d3",
  },
  mainText: {
    fontWeight: 800,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  secondText: {
    fontWeight: 700,
    fontSize: "1rem",
    color: "gray",
  },
  greenButton: {
    background: "#4bec55",
    padding: 15,
  },
}));

function DownloadBroucher() {
  const { downloadBrouchers, mainText, secondText, paper1, greenButton } =
    useStyles();
  return (
    <section className={downloadBrouchers}>
      <Box pt={2} />
      <Grid container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Box align="center" p={2}>
            <Paper className={paper1} elevation={10}>
              <Paper elevation={0}>
                <Box align="center" p={5}>
                  <Typography className={mainText}>
                    DOWNLOAD BROUCHRE
                  </Typography>
                  <Typography className={secondText}>
                    Get in detail what we offer, we stand for your Royality
                  </Typography>
                  <Box pt={2} />
                  <Button className={greenButton} variant="contained">
                    Download Now
                  </Button>
                </Box>
              </Paper>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={false} sm={8} />
      </Grid>
    </section>
  );
}

export default DownloadBroucher;
