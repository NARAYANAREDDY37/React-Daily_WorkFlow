import React from 'react';

// using JSX 

let Hello = () => {
  
  //with JSX
  /* return (
    <div className: 'dummy-class'>
      <h1>Hello with JSX</h1>
    </div>
  ) */
  
  //without JSX or Regualr HTML
  return React.createElement('div', {ID:1, className: 'dummy-class'}, 
  React.createElement('h1', null,'Hello Without JSX'))
}


export default Hello;
