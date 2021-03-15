import React from "react";

//HOC= accepts the original component and returns new component

let withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    //handler or method
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    //passing the props to the originalComponent
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} //passing the remaining props
        />
      );
    }
  }
  return WithCounter;
};

//setp-2 apply this HOC to click and Hover counter
export default withCounter;
