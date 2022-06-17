import React from "react";
import BenchIndexItem from "./bench_index_item";
class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBenches();
  }
  render() {
    const { benches } = this.props;
    return (
      <div>
        {Object.values(benches).map((bench) => {
          console.log(bench);
          return <BenchIndexItem key={bench.id} bench={bench} />;
        })}
      </div>
    );
  }
}

export default BenchIndex;
