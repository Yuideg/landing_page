import React from "react";
import { Box, Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  heroText: {
    textAlign: "center",
  },
  heroBigText: { color: "white", fontWeight: "1000" },
  heroGreenText: {
    color: "#4bec55",
    // fontSize: "2rem",
  },
  herolongtext: {
    padding: 30,
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "1000",
  },

  heroButtonGreen: {
    color: "#fff",
    backgroundColor: "#4bec55",
    marginRight: 10,
  },
  heroButtonOutline: {
    borderColor: "white",
    color: "white",
  },
}));

function HeroCarousel({ image }) {
  const classes = useStyles();
  return (
    <section
      className={classes.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${image})`,
      }}
    >
      <Box p={2}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "70vh" }}
        >
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="h6"
              className={classes.heroGreenText}
            >
              WORKING TOGTHER FOR
            </Typography>
            <Typography
              align="center"
              variant="h3"
              className={classes.heroBigText}
            >
              COPY RIGHT & NEIGHBORING RIGHTS
            </Typography>
            <Typography
              className={classes.herolongtext}
              variant="body2"
              align="center"
            >
              We are society for copyrights & Neighboring <br />
              rights for creative industry over all the country, striving <br />
              to attain a well mannered society avoiding stilling minds
            </Typography>
            <Box style={{ textAlign: "center" }}>
              <Button variant="contained" className={classes.heroButtonGreen}>
                View More
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                className={classes.heroButtonOutline}
              >
                contact us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box pb={5} />
    </section>
  );
}

export default HeroCarousel;
