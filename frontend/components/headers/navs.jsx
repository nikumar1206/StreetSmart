import React from "react";
import { connect } from "react-redux";
import MainNav from "./main_nav";
import UserNav from "./user_nav";
import { logout } from "../../actions/sessions_actions";
import { openModal } from "../../actions/modal_actions";

function Navs(props) {
  return (
    <div className="navs-container">
      <UserNav
        currentUser={props.currentUser}
        logout={props.logout}
        openModal={props.openModal}
      />
      <MainNav currentUser={props.currentUser} />
    </div>
  );
}

// container
export const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
});

export const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(Navs);
