import React from 'react'

function Columns() {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>SNo</td>
    </React.Fragment>
  ) 
}

{/* Here we should not write td in div tag we will get some wranings to avoid warinings we should use React fragments tag*/}

export default Columns
