import { makeStyles, Grid, Box } from "@material-ui/core";
import React from "react";
import CoverCard from "./WhatWeCover/CoverCard";
import CoverHeader from "./WhatWeCover/CoverHeader";
import SmartLegalLogo from "./WhatWeCover/SmartLegalLogo";
import HowWeStarted from "./WhatWeCover/HowWeStarted";
import ExperienceList from "./WhatWeCover/ExperienceList";
import Theater from "../Lottie/Theather.json";
import Books from "../Lottie/Books.json";
import Movie from "../Lottie/Movie.json";
import Music from "../Lottie/Music.json";
import Photography from "../Lottie/Photography.json";

const useStyles = makeStyles(() => ({
  whatwecoverSection: {
    paddingTop: 30,
    paddingBottom: 30,
    background: `repeating-linear-gradient(#fff, #fff 39.9%, #333 10.1%, #333 100%)`,
  },
}));

function WhatWeCover() {
  const { whatwecoverSection } = useStyles();

  const Items = [
    {
      tittle: "Music",
      description:
        "Keeping the ownership of music production and giving rights for cover artists",
      image: Music,
      height: 120,
      width: 100,
    },
    {
      tittle: "Theater & Drama",
      description:
        "Giving the right credit for theaters & drama plays, to brodcast & show again",
      image: Theater,
      height: 100,
      width: 90,
    },
    {
      tittle: "Literature",
      description: "Copyright of authors and distributors related rights",
      image: Books,
      height: 120,
      width: 90,
    },
    {
      tittle: "Audio Visual & Film",
      description:
        "Keeping the right to creators of creative audiovisual & film industry",
      image: Movie,
      height: 100,
      width: 100,
    },
    {
      tittle: "Photography",
      description:
        "Keeping the roality of photo shoots and related rights for reusers",
      image: Photography,
      height: 120,
      width: 120,
    },
  ];

  return (
    <section className={whatwecoverSection}>
      <Grid container>
        <Grid item xs={1} sm={1} />
        <Grid item xs={10} sm={10}>
          <CoverHeader />
          <Box pb={5} />
          <Grid
            container
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            {Items.map((item, i) => (
              <CoverCard
                key={i}
                title={item.tittle}
                description={item.description}
                image={item.image}
                height={item.height}
                width={item.width}
              />
            ))}
          </Grid>
          <Box pt={5} />
          <Grid
            container
            justifyContent="space-around"
            direction="row"
            alignItems="center"
          >
            <Grid item xs={12} sm={4}>
              <SmartLegalLogo />
            </Grid>
            <Grid item xs={12} sm={5}>
              <HowWeStarted />
            </Grid>
            <Grid item xs={12} sm={3}>
              <ExperienceList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} />
      </Grid>
      <Box pb={5} />
    </section>
  );
}

export default WhatWeCover;
