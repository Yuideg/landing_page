import { Grid, CssBaseline } from "@material-ui/core";
import { Fragment } from "react";
// components
import SmallAppBar from "./components/SmallAppBar";
import Hero from "./components/Hero";
import WhatWeCover from "./components/WhatWeCover";
import OurWorks from "./components/OurWorks";
import SolutionsPackages from "./components/SolutionsPackages";
import OurPartner from "./components/OurPartner";
import WhereWeAre from "./components/WhereWeAre";
import CopyRightNews from "./components/CopyrightNews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatWeStandFor from "./components/WhatWeStandFor";
import DownloadBroucher from "./components/DownloadBroucher";
import GetAccess from "./components/GetAccess";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Grid container direction="column">
        <Grid item>
          <SmallAppBar />
          <Header />
          <Hero />
          <WhatWeCover />
          <OurWorks />
          <WhatWeStandFor />
          <SolutionsPackages />
          <OurPartner />
          <DownloadBroucher />
          <WhereWeAre />
          <GetAccess />
          <CopyRightNews />
          <Footer />
        </Grid>
      </Grid>
      <ScrollTop />
    </Fragment>
  );
}

export default App;
