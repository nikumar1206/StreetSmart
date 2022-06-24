import { connect } from "react-redux";
import ListingShowComponent from "./listingshow";

const mapStatetoProps = (state, ownProps) => ({
  state,
});

const mapDispatchtoProps = (dispatch) => ({
  //   action,
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ListingShowComponent);
