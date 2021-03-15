import React from 'react'

/* function ForwRefInput() {
  return (
    <div>
      <input type="text"/>
    </div>
  )
} */

//forwarding parent ref to child component
let ForwRefInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}) 

export default ForwRefInput
