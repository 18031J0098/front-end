import React, { Component } from 'react'
import Deepak from './deepak/Deepak'
import Ram from './ram/Ram'
import Sandeep from './sandeep/Sandeep'


class App extends Component {
  render() {
    return (
      <div>
        <Sandeep/>
        <Ram/>
        <Deepak/>
      </div>
    )
  }
}
export default App