import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

// import GreetingsContainer from "./greeting_container";
import SignUpFormContainer from "./session/SignupFormContainer";
import LoginFormContainer from "./session/LoginFormContainer";
import Greeting from "./greeting";

export const App = () => (
  <div>
    <Greeting />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
