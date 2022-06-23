import { connect } from "react-redux";
import ResultBox from "./resultbox";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  listings: Object.values(state.entities.listings),
});
export const mDTP = (dispatch) => ({});

export const ResultBoxContainer = connect(mSTP, mDTP)(ResultBox);

export default ResultBoxContainer;
