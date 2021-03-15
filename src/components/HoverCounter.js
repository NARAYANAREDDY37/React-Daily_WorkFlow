import React, { Component } from "react";
import withCounter from "./WithCounter";

class HoverCounter extends Component {
  render() {
    //let {count} = this.state //extracting the count value
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>;
  }
}
//export HOC
export default withCounter(HoverCounter, 10);
