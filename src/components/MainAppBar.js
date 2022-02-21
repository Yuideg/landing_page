import {
  AppBar,
  Button,
  Container,
  Hidden,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
//assets
import Logo from "../assets/Logo.svg";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#fff",
    padding: 10,
  },
  logo: {
    // paddingRight: 100,
    height: 60,
  },
  greenHeader: {
    color: "green",
  },
}));

function MainAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navbar}>
      <Container>
        <Toolbar>
          <img src={Logo} alt="logo" className={classes.logo} />
          <Hidden xsDown>
            <Button className={classes.greenHeader}>Why legal Shields</Button>
            <Button>Personal</Button>
            <Button>Bussiness</Button>
            <Button>Law Firms</Button>

            <Typography>(+251)9-291-31622</Typography>
            <Typography>Get in touch</Typography>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainAppBar;
