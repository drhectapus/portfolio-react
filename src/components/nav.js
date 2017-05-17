import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-inverse navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#navbar-portfolio'
              aria-expanded='false'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a href='#home' className='navbar-brand'>
              Joseph Liu
            </a>
          </div>

          <div
            className='collapse navbar-collapse'
            id='navbar-portfolio'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#about'>About</a></li>
              <li><a href='#work'>Work</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
