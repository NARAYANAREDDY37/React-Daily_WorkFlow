import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: true
    }
  }
  
  render() {

    //1.conditional formatting using if-else

    /* if(this.state.isLoggedIn){
      return(<div>Welcome George</div>)
    }
    else{
      return(<div>Welcome Guest</div>)
    } */

    //2.conditional formatting using element variables
    
    /* let message
    if(this.state.isLoggedIn){
      message = <div>Welcome George</div>
    }
    else{
      message = <div>Welcome Guest</div>
    }
    return <div>{message}</div> */

    //3.conditional formatting using ternary conditional operator
    //return(
      /* this.state.isLoggedIn ? 
      <div>Welcome George</div> :
      <div>Welcome Guest</div> */
      //or
      /* this.state.isLoggedIn ? 
      (<div>Welcome George</div>) :
      (<div>Welcome Guest</div>) */
    //)

    //4.conditional formatting using short circuit operator
    return this.state.isLoggedIn && <div>Welcome George</div>

    // return (
    //   <>
    //     <div> Welcome George</div>
    //     <div> Welcome Guest</div>
    //   </>
    // )

    
  }
}

export default UserGreeting
