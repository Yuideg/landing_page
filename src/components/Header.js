import { AppBar, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DisplayDesktop from "./Header/DisplayDesktop";
import DisplayMobile from "./Header/DisplayMobile";
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#fff",
    paddingRight: "79px",
    paddingLeft: "118px",
    [theme.breakpoints.down("sm")]: {
      color: "#fff",
      backgroundColor: "#333",
      paddingLeft: 0,
      paddingRight: 0,
      padding: 10,
    },
  },
}));

export default function Header() {
  const { header } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <header>
      <AppBar className={header} position="static">
        {mobileView ? <DisplayMobile /> : <DisplayDesktop />}
      </AppBar>
    </header>
  );
}
