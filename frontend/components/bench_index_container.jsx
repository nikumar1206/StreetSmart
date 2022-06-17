import { connect } from "react-redux";
import { fetchBenches } from "../actions/bench_actions";
import BenchIndex from "./bench_index";

export const mapStateToProps = (state) => ({
  benches: state.entities.benches,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
