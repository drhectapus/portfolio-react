import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
require('./style.scss');
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <div className='app-container'>
        <Nav />
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
  </Provider>,
  document.querySelector('#app')
);
