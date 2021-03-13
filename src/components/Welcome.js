import React, { Component } from 'react'


/* class Welcome extends Component{
  render() {
    return <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
  }
} */

//Destructuring the props in class components

// 1.Destructuring the props in render method

class Welcome extends Component{
  render() {
    let {name, heroName} = this.props;
    // let {state1, state2} = this.state;
    //if you want to destructure the state
    return <h1>Hello {name} a.k.a {heroName}</h1>
  }
}
export default Welcome;


