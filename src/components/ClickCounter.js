import React, { Component } from "react";
import withCounter from "./WithCounter";

class ClickCounter extends Component {
  render() {
    //let {count} = this.state //extracting the count value

    //destructuring using props
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>;
  }
}
//export HOC
export default withCounter(ClickCounter, 5);
