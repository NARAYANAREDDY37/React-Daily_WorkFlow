import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message: 'Hello'
    }
    //event handling in the class constructor
    this.clickHandler = this.clickHandler.bind(this)  
  }
  
  
 /*  clickHandler(){
    this.setState({
      message: 'Good bye!'
    })
    console.log(this)
  } */

  //class property as arrow functions
  clickHandler = () => {
    this.setState({
      message: 'Good bye!'
    })
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* there are 4 approches in event bindings */}
        {/* <button onClick= {this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick= {() => this.clickHandler()}>Click</button> */}
        <button onClick= {this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
