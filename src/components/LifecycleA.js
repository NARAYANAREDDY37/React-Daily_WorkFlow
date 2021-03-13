import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  //1st method in mounting & updating = constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "George",
    };
    console.log("LifecycleA constructor");
  }

  //2nd method in mounting = static
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  //4th method in mounting = componentDidMount
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  //2nd method in updating = shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate")
    return true
  }

  //4th method in updating = getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleA getSnapshotBefore")
    return null
  }

  //5th method in updating = componentDidUpdate
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate")
  }

  changeState = () => {
    this.setState({
      name:'Random Things'
    })
  }

  //3rd method in mounting & updating = render
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
