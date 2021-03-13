import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      parentName: 'Parent'
    }
    //binding the method in the constructor
    this.greetParent = this.greetParent.bind(this)
  }
  //creating a method
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} form ${childName}`)
  }
  
  render() {
    return (
      <div>
        {/* passing method as a prop to child component */}
        <ChildComponent greetHandler= {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
