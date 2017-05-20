import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return(
      <div id='home'>
        <div id='image-container'>
          <img
            className='img-responsive'
            src='http://i.imgur.com/qXqDaqq.jpg'
          />
        </div>
        <div className='home-text'>
          <div className='text-heading'>
            <h1>Hi, my name is Joseph Liu.</h1>
            <h3>I create health supplement formulas and learn code in my free time.</h3>
          </div>
        </div>
      </div>
    )
  }
}
