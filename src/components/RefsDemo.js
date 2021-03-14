import React, { Component } from 'react'

export class RefsDemo extends Component {

  constructor(props) {
    super(props)
    //creating Ref
    this.inputref = React.createRef()
    //creating callback Ref property
    this.callBackRef = null
    //creating method
    this.setCallBackRef = element => {
      this.callBackRef = element
    }
  }

  componentDidMount() {
    //adding focus to the current input
    /* this.inputref.current.focus()
    console.log(this.inputref) */

    if(this.callBackRef) {
      this.callBackRef.focus()
    }
  }
  
  clickHandler = () => {
    alert(this.inputref.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref = {this.inputref}/>
        <input type="text" ref = {this.setCallBackRef}/>
        <button onClick= {this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
