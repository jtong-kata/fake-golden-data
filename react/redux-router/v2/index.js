import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'


import MyContainer from './container/MyContainer.js'
import FormPreviewerPage from './container/FormPreviewerPage'
import FormEditorPage from './container/FormEditorPage'

import store from './store';

const rootEl = document.getElementById('root')
const history = syncHistoryWithStore(browserHistory, store);

console.log(store.getState().formState.status);


  ReactDOM.render(
      <Provider store={store}>
          <Router  history={history}>
              <Route path="/" component={MyContainer} >
                  <IndexRoute component={FormEditorPage} />
                  <Route path="/editor" component={FormEditorPage} />
                  <Route path="/preview" component={FormPreviewerPage} />
              </Route>
          </Router>
      </Provider>    ,
    rootEl
  )
