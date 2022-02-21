import {
  Button,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  CardHeader,
  Avatar,
  Box,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import CncmLogo from "../../assets/Footer_logo.svg";
import WhatsApp from "../../assets/Phone.svg";

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  greenHeader: {
    color: "green",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    color: "#333",
  },
  drawerContainer: {
    // padding: "20px 30px",
    display: "inline",
  },
  burgermenu: {
    color: "#fff",
    fontSize: "2rem",
  },
  contact: {
    textAlign: "left",
  },
  phoneNumber: {
    fontWeight: 700,
    color: "#333",
  },
  GetIntouchButton: {
    height: "85px",
    color: "#fff",
    backgroundColor: "gray",
    borderRadius: 0,
  },
  logo: {
    height: 70,
    width: 200,
  },
}));

function DisplayMobile() {
  const {
    greenHeader,
    menuButton,
    toolbar,
    contact,
    GetIntouchButton,
    phoneNumber,
    burgermenu,
    drawerContainer,
    logo,
  } = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Toolbar className={toolbar}>
      <img src={CncmLogo} alt="logo" className={logo} />
      <IconButton
        edge="start"
        aria-label="menu"
        aria-haspopup="true"
        onClick={handleDrawerToggle}
      >
        <MenuIcon className={burgermenu} />
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <Box className={drawerContainer}>
            <ListItem>
              <Button className={greenHeader} fullWidth>
                Why legal Shields
              </Button>
            </ListItem>
            <ListItem>
              <Button className={menuButton} fullWidth>
                Personal
              </Button>
            </ListItem>
            <ListItem>
              <Button className={menuButton} fullWidth>
                Bussiness
              </Button>
            </ListItem>
            <ListItem>
              <Button className={menuButton} fullWidth>
                Law Firms
              </Button>
            </ListItem>
            <ListItem>
              <Button className={contact}>
                <CardHeader
                  avatar={<Avatar aria-label="phone" src={WhatsApp} />}
                  title="CONTACT US"
                  subheader={
                    <span className={phoneNumber}>(+251) 9-291-31622</span>
                  }
                />
              </Button>
            </ListItem>
            <ListItem>
              <Button fullWidth className={GetIntouchButton}>
                Get IN Touch
              </Button>
            </ListItem>
          </Box>
        </Drawer>
      </IconButton>
    </Toolbar>
  );
}

export default DisplayMobile;
