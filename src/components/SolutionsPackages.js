import { Typography, makeStyles, Box, Grid } from "@material-ui/core";
import React from "react";
import PackagesCard from "./SolutionsPackages/PackagesCard";

const useStyles = makeStyles((theme) => ({
  solutionsPackages: {
    background: `repeating-linear-gradient(#333, #333 89.9%, #fff 20.1%, #fff 100%)`,
    color: "#fff",
  },
  greenButton: {
    background: "#4bec55",
    padding: 10,
  },
  mainText: {
    fontSize: "2rem",
    fontWeight: 1000,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  greenText: {
    fontWeight: 1000,
    color: "#4bec55",
  },
}));

const Items = [
  {
    title1: "Allowing",
    title2: "Endorsement",
    title3: "opportunities",
    description: `Our aim is to collaborate with CMO's and other intersted 
    parties to ensure the collection of these rights are as efficient and 
    streamlined as they can be and that all performers receive the income 
    they are rightfully entitled to`,
  },
  {
    title1: "Creating",
    title2: "Trending",
    title3: "Culture",
    description: `Many people do not know what neighboring rights are and 
    therfore also do not know what their rights are in this area.We are 
    providing workshops and literature to help educate and demystify this 
    part of the industry`,
  },
];

function SolutionsPackages() {
  const { solutionsPackages, mainText, greenText } = useStyles();
  return (
    <section className={solutionsPackages}>
      <Grid container>
        <Grid item xs={1} lg={3} />
        <Grid item xs={10} lg={6}>
          <Box pt={5} />
          <Typography align="center" className={mainText}>
            Solutions & Packages
          </Typography>
          <Typography align="center" className={greenText}>
            CNCM Provides the community support debate and foster the work of
            all members.
          </Typography>
          <Box pt={5} />
          <Grid
            container
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            spacing={5}
          >
            {Items.map((item, i) => (
              <PackagesCard
                key={i}
                title1={item.title1}
                title2={item.title2}
                title3={item.title3}
                description={item.description}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1} lg={6} />
      </Grid>
    </section>
  );
}

export default SolutionsPackages;
