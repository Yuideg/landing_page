import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Project1 from "../../assets/Project_1.jpg";
import Project2 from "../../assets/Project_2.jpg";
import Project3 from "../../assets/Project_3.jpg";
import Project4 from "../../assets/Project_4.jpg";
import Project5 from "../../assets/Project_5.jpg";

const useStyles = makeStyles({
  casesImage: {
    width: 296,
    height: 371,
  },
});

const Items = [
  { image: Project1 },
  { image: Project2 },
  { image: Project3 },
  { image: Project4 },
  { image: Project5 },
];

function CasesCard() {
  const { casesImage } = useStyles();
  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      alignItems="center"
    >
      {Items.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3} lg={2}>
          <img src={item.image} alt="imagsse" className={casesImage} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CasesCard;
