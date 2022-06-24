import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import ModalContainer from "./modal/modal_container";
import HomeSplashContainer from "./homesplash/homesplash_container";
import MainNavContainer from "./headers/main_nav_container";
import UserNavContainer from "./headers/user_nav_container";
import FooterComponent from "./headers/footer";
import ListingsContainer from "./listings/listings_container";
import ListingShowContainer from "./listing/listingshow_container";
import Navs from "./headers/navs";
const App = () => (
  <div className="app">
    <ModalContainer />
    <Navs />
    <Switch>
      <Route exact path="/" component={HomeSplashContainer} />
      <Route path="/listings/search" component={ListingsContainer} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
    </Switch>
    <FooterComponent />
  </div>
);

export default App;
