import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <div>
      <p>LogIn/SignUp to see some juicy benches!!</p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign up!</Link>
    </div>
  );
  const loggedIn = () => (
    <div>
      <p>Hi, {currentUser.username}</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
  return currentUser ? loggedIn() : notLoggedIn();
};

export default Greeting;
