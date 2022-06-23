import { connect } from "react-redux";
import ResultDetails from "./resultdetails";

export const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  listings: Object.values(state.entities.listings),
});
export const mDTP = (dispatch) => ({});

export const ResultDetailsContainer = connect(mSTP, mDTP)(ResultDetails);

export default ResultDetailsContainer;
