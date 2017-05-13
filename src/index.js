import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
require('./style.scss');
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/work' component={Work} />
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);
