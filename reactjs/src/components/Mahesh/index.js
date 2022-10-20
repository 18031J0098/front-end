import './index.css'

import React, { Component } from 'react'

export default class Mahesh extends Component {
  render() {
    return (
      <div className='bg-container'>
        <div className='card-container'>
          <h1>Start Musical Night</h1>
          <hr />
          <div className='inner-card'>
            <img src="https://assets.ccbp.in/frontend/intermediate-rwd/musical-night-1-img.png" alt="logo" className='image' />
            <h3>We bring you online experiences to make sure you've got an exciting plan every day.</h3>
            <p>We still have fun and we are much more confident on this as we already had senn some happy faces in our previous multiple online events!</p>
            <h3>About the Event</h3>
            <p>We, humans, are social creatures. While many of us are making thebest of this time, we're much better together than apart.</p>
            <div>
              <img src="https://assets.ccbp.in/frontend/intermediate-rwd/musical-night-2-img.png" alt="logo" className='image1' />
              <img src="https://assets.ccbp.in/frontend/intermediate-rwd/musical-night-3-img.png" alt="logo" className='image1' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
