import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

//if ParentComp is not pure component then it re-renders even if there is no change
class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: 'George'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'George'
      })
    }, 2000)
  }
  

  render() {
    console.log('********Parent comp render*********')
    return (
      <div>
        Parent Component
        <MemoComp name= {this.state.name} />
        {/* <RegularComp name= {this.state.name} /> */}
        {/* <PureComp name= {this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
