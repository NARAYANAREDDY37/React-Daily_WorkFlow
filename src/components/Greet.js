import React from 'react';

/* function Greet(){
  return <h1>Hello George</h1>
} */

/* let Greet = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
      {props.children}
    </div>
  )
}
 */

//Destructuring the props in functional components

//destructuring the props in the parameter
/* let Greet = ({name, heroName}) => {
  return(
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
  )
}
 */
//destructuring the props in the function body
let Greet = props => {
  let {name, heroName} = props
  return(
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
  )
}

export default Greet;