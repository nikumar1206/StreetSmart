import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import BenchIndexContainer from "./bench_index_container";

import GreetingsContainer from "./greeting_container";
import SignUpFormContainer from "./SignupFormContainer";
import LoginFormContainer from "./LoginFormContainer";

export const App = () => (
  <div>
    <header>
      <h1>Welcome to Bench BnB</h1>
    </header>
    <GreetingsContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={BenchIndexContainer} />
    </Switch>
  </div>
);

export default App;
