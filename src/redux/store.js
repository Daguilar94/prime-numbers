import calculator from './reducers/calculator';
import history from './reducers/history';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'

const appReducer = combineReducers({ calculator, history });

export default createStore(appReducer, applyMiddleware(thunk));