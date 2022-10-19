import './index.css'

import React, { Component } from 'react'

export default class Deepak extends Component {
  render() {
    return (
      <div>
          <div class="bg-container">
          <div class="card-container">
              <h1 class="main-heading">Start Musical Night</h1>
              <div class="card-body">
                  <img src="https://assets.ccbp.in/frontend/intermediate-rwd/musical-night-1-img.png" class="image" />
                  <h1 class="musical-night">
                      We bring you online experiences to make sure you've got an exciting plan every day.
                  </h1>
                  <p class="description">
                      We still will have fun and we are much more confident on this as we alredy had seen some happy faces in our previous multiple online events!
                  </p>
                  <h2 class="musical-night">About the Event</h2>
                  <p class="description">
                      We, humans, are social creatures. While many of us are making the best of this time, we're much better together than apart.
                  </p>
                  <img src="https://assets.ccbp.in/frontend/intermediate-rwd/musical-night-2-img.png" class="muscial-night-singer" />
                  <img src="https://assets.ccbp.in/frontend/intermediate-rwd/musical-night-3-img.png" class="muscial-night-singer" />
              </div>
          </div>
        </div>
      </div>
    )
  }
}