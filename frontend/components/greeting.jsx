import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <div>
      <p>LogIn/SignUp to see some juicy apartments!!</p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign up!</Link>
    </div>
  );
  const loggedIn = () => (
    <div>
      <p>Hi, {currentUser.email}</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
  return currentUser ? loggedIn() : notLoggedIn();
};

export default Greeting;
