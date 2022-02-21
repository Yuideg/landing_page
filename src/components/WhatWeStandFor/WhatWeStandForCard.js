import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Collaboration from "../../assets/Collaboration.svg";
import Royality from "../../assets/Royality.svg";
import Ownership from "../../assets/Ownership.svg";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  standImage: {
    height: 100,
    width: 100,
  },
});

const Items = [
  {
    image: Royality,
    title: "ROYALITY",
    description:
      "Handdling issues related with Royalites of Ethiopian art works, handing over Royality issues to the court process & properly executing the judgement process.",
  },
  {
    image: Collaboration,
    title: "COLLABORATION",
    description:
      "We work and collaborate with companies & associations like us and also with Government and Non Government Organizations.",
  },
  {
    image: Ownership,
    title: "OWNERSHIP",
    description:
      "We help the signage process of property ownership and getting legal enforcement of infringements to get justice",
  },
];

function WhatWeStandForCard() {
  const { root, standImage } = useStyles();
  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      spacing={5}
    >
      {Items.map((item, i) => (
        <Grid key={i} item xs={12} sm={4}>
          <Card className={root}>
            <CardActionArea>
              <Box align="center">
                <img src={item.image} className={standImage} alt={item.title} />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default WhatWeStandForCard;
