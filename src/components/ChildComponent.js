import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* accessing the method in parent using props object and used arrow function to pass parameters */}
      <button onClick= {() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
