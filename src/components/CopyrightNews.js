import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PostsCard from "./NewLetter/PostsCard";

const useStyles = makeStyles((theme) => ({
  copyright: {
    background: "#fff",
  },
  header: {
    fontSize: "2rem",
    color: "#4bec55",
    fontWeight: 1000,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  subheader: {
    fontSize: "2.5rem",
    fontWeight: 1000,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
  },
}));

function CopyrightNews() {
  const { copyright, subheader, header } = useStyles();
  return (
    <section className={copyright}>
      <Box pt={2} />
      <Grid container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Box align="center">
            <Typography className={header}>Copyright News</Typography>
            <Typography className={subheader}>
              DO NOT MISS OUR
              <br /> USEFULL POSTS
            </Typography>
          </Box>
          <Box pt={5} />
          <PostsCard />
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
      <Box pb={5} />
    </section>
  );
}

export default CopyrightNews;
