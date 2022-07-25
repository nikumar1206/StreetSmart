import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavBars from "./headers/navs";
import Modal from "./modal/modal";
import HomePage from "./homepage/homepage";
import CreateListingForm from "./listing_forms/create_listing_form_container";
import EditListingForm from "./listing_forms/edit_listing_form";
import UserSavedContainer from "./user/user_saved";
import UserShowContainer from "./user/user_show";
import ListingsIndex from "./listings/listings_index";
import ListingShow from "./listing/listingshow";
import UserCreatedContainer from "./user/user_created";
import FooterComponent from "./headers/footer";

const App = () => (
  <>
    <NavBars />
    <Modal />

    <Switch>
      <Route exact path="/" component={HomePage} />

      <ProtectedRoute path="/listings/create" component={CreateListingForm} />

      <ProtectedRoute
        path="/listings/:listingId/edit"
        component={EditListingForm}
      />

      <ProtectedRoute
        path="/users/:userId/saved"
        component={UserSavedContainer}
      />

      <ProtectedRoute
        path="/users/:userId/created"
        component={UserCreatedContainer}
      />

      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />

      <ProtectedRoute
        path="/users/:userId/create"
        component={UserShowContainer}
      />

      <Route path="/listings/:listingId" component={ListingShow} />

      <Route path="/listings/" component={ListingsIndex} />
    </Switch>

    <FooterComponent />
  </>
);

export default App;
