import React from 'react';
// const React = require('react')

// function App () {
//   reuturn `<div className='App'>
//     <img src=${logo} />
//   </div>`
// }

function Greet (props) {
  console.log('props test:', props)
  // { student: 'david', day: 'Monday' }

  console.log('props.student test:', props.student)
  /// 'david'

  return <h1>Welcome to {props.day} !!! {props.student}</h1>
}

function App() {
  return <div>
    hello
    <Greet student='amy' day='Monday' /> {/* Greet('amy', 'Monday) */}
    <Greet student='david' day='Friday' /> {/* Greet('david', 'Friday') */}
   </div>
   
}

export default App;
