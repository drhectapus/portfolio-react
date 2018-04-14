import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return(
      <div id='home'>
        <div id='image-container'>
          <img
            className='img-responsive'
            src='https://i.imgur.com/38nyHv6.jpg'
          />
        </div>
        <div className='home-text'>
          <div className='text-heading'>
            <h1>Hi, my name is Joseph Liu.</h1>
            <h3>I'm a Doctor turned Developer, who loves creating cool apps that can make an impact.</h3>
          </div>
        </div>
      </div>
    )
  }
}
