import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux'


import reducers from './reducers';

const store = createStore(
    reducers

);

// const store = createStore(reducers)
export default store;