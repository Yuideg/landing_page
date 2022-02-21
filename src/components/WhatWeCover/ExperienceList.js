import React from "react";
import {
  CardHeader,
  List,
  makeStyles,
  ListItem,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  mainText: {
    fontSize: "2rem",
    color: "#fff",
    fontWeight: 1000,
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "1.5rem",
    // },
  },
  secondText: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 1000,
  },
  thirdText: {
    color: "#4bec55",
    fontWeight: 1000,
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

function ExperienceList() {
  const { root, mainText, secondText, thirdText } = useStyles();
  return (
    <List className={root}>
      <ListItem>
        <CardHeader
          avatar={<Typography className={mainText}>16</Typography>}
          title={<Typography className={secondText}>Individual</Typography>}
          subheader={
            <Typography className={thirdText}>LEGAL FIRM MEMBERS</Typography>
          }
        />
      </ListItem>
      <ListItem>
        <CardHeader
          avatar={<Typography className={mainText}>5+</Typography>}
          title={<Typography className={secondText}>Year</Typography>}
          subheader={
            <Typography className={thirdText}>ON THE INDUSTRY</Typography>
          }
        />
      </ListItem>
      <ListItem>
        <CardHeader
          avatar={<Typography className={mainText}>100+</Typography>}
          title={<Typography className={secondText}>Cases</Typography>}
          subheader={
            <Typography className={thirdText}>
              LEGAL CASES HANDLED SUCCESSFULLY
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}

export default ExperienceList;
