import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div id='work'>
        <h1>Work</h1>
        <div id='portfolio'>
          <div className='thumbnail'>
            <a href='https://weather-react-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/LgQnQCr.png' alt='weather react app' /></a>
            <div className='caption'>
              <h3><strong>Weather App</strong></h3>
              <p>Weather app project from FreeCodeCamp made with React using OpenWeatherMap and Google Maps APIs.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/Weather-App-React-' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div className='thumbnail'>
            <a href='https://wiki-react-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/fk5RZOV.png' alt='wikipedia app' /></a>
            <div className='caption'>
              <h3><strong>Wikipedia Widget</strong></h3>
              <p>Wikipedia app project from FreeCodeCamp made with React using Wikipedia API.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/Wiki-React-App' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div className='thumbnail'>
            <a href='https://twitch-react-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/a8MKniL.png' alt='twitch app' /></a>
            <div className='caption'>
              <h3><strong>Twitch Streaming Widget</strong></h3>
              <p>Twitch streaming app project from FreeCodeCamp made with React using the Twitch API and implementing flexbox for responsive layout.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/twitch-react' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div className='thumbnail'>
            <a href='https://calc-react-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/QB790xW.png' alt='calculator app' /></a>
            <div className='caption'>
              <h3><strong>Calculator</strong></h3>
              <p>The calculator project from FreeCodeCamp redesigned in React using lodash and mathjs libraries.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/Calculator-React' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div className='thumbnail'>
            <a href='https://react-pomodoro-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/NkVE8bq.png' alt='pomodoro clock app' /></a>
            <div className='caption'>
              <h3><strong>Pomodoro Clock</strong></h3>
              <p>The pomodoro clock project from FreeCodeCamp redesigned in React amd SCSS.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/react-pomodoro' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div className='thumbnail'>
            <a href='https://react-simon-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/vGT6ivr.png' alt='simon game app' /></a>
            <div className='caption'>
              <h3><strong>Simon Game</strong></h3>
              <p>The Simon game project from FreeCodeCamp redesigned in React and SCSS.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/react-simon-game' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div className='thumbnail'>
            <a href='https://react-tictactoe-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/p3wiyhH.png' alt='tic tac toe app' /></a>
            <div className='caption'>
              <h3><strong>Super Simple Tic Tac Toe</strong></h3>
              <p>A very basic version of Tic Tac Toe made in React with SCSS.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/react-tictactoe' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div className='thumbnail'>
            <a href='https://markdown-previewer-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/4Dfk8VJ.png' alt='markdown app' /></a>
            <div className='caption'>
              <h3><strong>Markdown Previewer</strong></h3>
              <p>Markdown Previewer challenge from FCC made in React and SCSS using marked.js library.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/markdown-previewer' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div className='thumbnail'>
            <a href='https://d3-barchart-drhectapus.herokuapp.com/' target='_blank'><img src='http://i.imgur.com/9dKYKex.png' alt='D3 Barchart app' /></a>
            <div className='caption'>
              <h3><strong>D3 Barchart</strong></h3>
              <p>Barchart project from FCC made with D3 and React.</p>
              <div className='github-icon'><a href='https://github.com/drhectapus/d3-barchart' target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
