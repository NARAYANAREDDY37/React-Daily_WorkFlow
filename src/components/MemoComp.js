import React from 'react'

function MemoComp({name}) {
  console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)

//memo component is not re-rendered as the props and states are not changing
//React.memo(MemoComp) = Higher order component
