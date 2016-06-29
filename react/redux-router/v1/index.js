import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'


import MyContainer from './components/MyContainer.js'
import store from './store';

const rootEl = document.getElementById('root')
const history = syncHistoryWithStore(browserHistory, store);

console.log(store.getState().formState.status);


  ReactDOM.render(
      <Provider store={store}>
          <Router  history={history}>
              <Route path="/" component={MyContainer} />
          </Router>
      </Provider>    ,
    rootEl  
  )
