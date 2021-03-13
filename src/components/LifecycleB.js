import React, { Component } from 'react'

class LifecycleB extends Component {

  //1.lifecycle method = constructor
  constructor(props) {
    super(props)
  
    this.state = {
      name:'George'
    }
    console.log('LifecycleB constructor')
  }

  //2nd lifecycle method = static
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }
  
  //4th lifecycle method = componentDidMount
  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  //2nd method in updating = shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate")
    return true
  }

  //4th method in updating = getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleB getSnapshotBefore")
    return null
  }

  //5th method in updating = componentDidUpdate
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate")
  }

  //3rd lifecycle method = render
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB
