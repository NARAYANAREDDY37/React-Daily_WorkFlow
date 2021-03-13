import React from 'react'

function InLine() {
  //creating object for Styles
  let headings = {
    fontSize: '72px', //properties should be cameCase
    color: 'Purple' ,  //values should be passes as string
    boxShadow: '0px 0px 10px 5px black'
  }
  return (
    <div>
      {/* <h1 className="error">Error</h1> */}
      <h2 style={headings}>InLine</h2>
    </div>
  )
}

export default InLine
