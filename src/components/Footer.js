import {
  Box,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import FooterLogo from "../assets/Footer_logo.svg";

const useStyles = makeStyles(() => ({
  footer: {
    background: "#3a3b3c",
    color: "#fff",
  },
  greenText: {
    color: "#4bec55",
    fontWeight: 700,
  },
  logo: {
    height: 70,
    width: 200,
  },
}));

export default function Footer() {
  const { footer, greenText, logo } = useStyles();
  return (
    <section className={footer}>
      <Box pt={5} />
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid
            container
            justifyContent="space-between"
            direction="row"
            spacing={5}
          >
            <Grid item xs={12} sm={4}>
              <img src={FooterLogo} alt="logo" className={logo} />
              <Box pt={2} />
              <Typography>
                Our aim is to collaborate with CMO's and other interested
                parties to ensure the collection of these rights are as
                efficient and streamlined as they can be and that all performers
                receive the income they are rightfully entitled to.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>Useful Links</Typography>
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>About</ListItem>
                <ListItem button>Our Story</ListItem>
                <ListItem button className={greenText}>
                  Professional Team
                </ListItem>
                <ListItem button>Services</ListItem>
                <ListItem button>Testimonials</ListItem>
                <ListItem button>Copyright</ListItem>
                <ListItem button>Contacts</ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>Contact Us</Typography>
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>Phone: +251 - 932 -334 -990</ListItem>
                <ListItem button>
                  Monday - Friday from 8.00 am to 6.00 pm <br />
                  Saturday from 9.00 am to 5.00 pm
                </ListItem>
                <ListItem button className={greenText}>
                  info@cncm.com
                </ListItem>
                <ListItem button className={greenText}>
                  support@cncm.com
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Box mt={5} mb={3} style={{ borderTop: "1px solid #d3d3d3" }} />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>
              © {new Date().getFullYear()}{" "}
              <span className={greenText}>CNCM</span> Copyright and neighboring
              right collective managment society of Ethiopia
            </Typography>

            <Typography>
              Design by <span className={greenText}>Yideg Misganew</span> 
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Box pb={5} />
    </section>
  );
}
