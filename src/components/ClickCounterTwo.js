import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  
  render() {
    let {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    )
  }
}       

export default ClickCounterTwo
