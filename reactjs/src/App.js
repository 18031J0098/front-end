import React, { Component } from 'react'
import Ram from './ram/Ram'
import Sandeep from './sandeep/Sandeep'

class App extends Component {
  render() {
    return (
      <div>
        <Sandeep/>
        <Ram/>
      </div>
    )
  }
}
export default App