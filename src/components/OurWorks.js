import React from "react";
import { Grid, makeStyles, Box, Button } from "@material-ui/core";
import OurWorkHeader from "./OurWorks/OurWorkHeader";
import CasesCard from "./OurWorks/CasesCard";

const useStyles = makeStyles(() => ({
  ourWorks: {
    background: `#fff`,
  },
  greenButton: {
    background: "#4bec55",
    padding: 10,
  },
}));

function OurWorks() {
  const { ourWorks, greenButton } = useStyles();
  return (
    <section className={ourWorks}>
      <Grid container>
        <Grid item xs={1} sm={1} />
        <Grid item xs={10} sm={10}>
          <OurWorkHeader />
          <CasesCard />
          <Box align="center" p={5}>
            <Button className={greenButton}>View More Projects</Button>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} />
      </Grid>
    </section>
  );
}

export default OurWorks;
