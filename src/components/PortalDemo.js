import React from 'react'
import ReactDOM from 'react-dom'


function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById('portal-root')
  )
}
//createPortal takes two parameters 1. the content which you want to display and id of DOM node
export default PortalDemo
