import {
  Button,
  Toolbar,
  makeStyles,
  CardHeader,
  Avatar,
  Container,
} from "@material-ui/core";
import CncmLogo from "./CncmLogo";
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
}));

function DisplayDesktop() {
  const {
    greenHeader,
    menuButton,
    toolbar,
    contact,
    phoneNumber,
    GetIntouchButton,
  } = useStyles();
  return (
    <Container>
      <Toolbar className={toolbar}>
        <CncmLogo />
        <div>
          <Button className={greenHeader}>Why legal Shields</Button>
          <Button className={menuButton}>Personal</Button>{" "}
          <Button className={menuButton}>Bussiness</Button>{" "}
          <Button className={menuButton}>Law Firms</Button>
        </div>
        <div>
          <Button className={contact}>
            <CardHeader
              avatar={<Avatar aria-label="phone" src={WhatsApp} />}
              title="CONTACT US"
              subheader={
                <span className={phoneNumber}>(+251) 9-291-31622</span>
              }
            />
          </Button>
          <Button className={GetIntouchButton}>Get IN Touch</Button>
        </div>
      </Toolbar>
    </Container>
  );
}

export default DisplayDesktop;
