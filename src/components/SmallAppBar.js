import React from "react";
import { Typography, Container, Toolbar, Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SocailMedia from "../assets/Social_Media_Icons.svg";
const useStyles = makeStyles((theme) => ({
  customizeToolbar: {
    backgroundColor: "#333",
    minHeight: 1,
    color: "white",
  },
  logo: {
    flexGrow: 1,
    display: "flex",
    marginRight: "10px",
    alignItems: "left",
    flexWrap: "wrap",
    padding: theme.spacing(1),
  },
  leftsmalltext: {
    textAlign: "right",
  },
  associatetext: {
    paddingLeft: 10,
    color: "lightgreen",
    textDecorationLine: "underline",
    fontWeight: 700,
  },
  smallNavbarIcons: {
    paddingLeft: 5,
  },
}));

function SmallAppBar() {
  const classes = useStyles();

  return (
    <Hidden smDown>
      <Box className={classes.customizeToolbar}>
        <Container>
          <Toolbar className={classes.customizeToolbar}>
            <Typography variant="body2" className={classes.logo}>
              Learn About{" "}
              <small className={classes.associatetext}>
                Becoming An Associate
              </small>
            </Typography>

            <Typography style={{ paddingRight: 10 }} variant="body2">
              Stay Connected:{" "}
            </Typography>
            <img src={SocailMedia} alt="social media" />
          </Toolbar>
        </Container>
      </Box>
    </Hidden>
  );
}

export default SmallAppBar;
