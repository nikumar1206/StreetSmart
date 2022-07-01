import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import ModalContainer from "./modal/modal_container";
import HomePage from "./homepage/homepage";
import FooterComponent from "./headers/footer";
import UserShowContainer from "./user/user_show";
import ListingsIndexContainer from "./listings/listings_container";
import ListingShowContainer from "./listing/listingshow_container";
import CreateListingForm from "./created_listing/create_listing_form_container";
import UserShowSavedContainer from "./user/user_saved";
import NavsContainer from "./headers/navs";
const App = () => (
  <div className="app">
    <ModalContainer />
    <NavsContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <ProtectedRoute path="/listings/create" component={CreateListingForm} />
      {/* <ProtectedRoute
        path="/listings/:listingId/edit"
        component={ListingEditContainer}
      /> */}
      <ProtectedRoute
        path="/users/:userId/saved"
        component={UserShowSavedContainer}
      />
      {/* <ProtectedRoute
        path="/users/:userId/created"
        component={UserShowCreatedContainer}
      /> */}
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute
        path="/users/:userId/create"
        component={UserShowContainer}
      />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
      <Route path="/listings/" component={ListingsIndexContainer} />
    </Switch>
    <FooterComponent />
  </div>
);

export default App;
