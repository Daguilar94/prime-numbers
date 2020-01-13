import form from './reducers/form';
import history from './reducers/history';
import { createStore } from 'redux';
import { combineReducers } from 'redux'

const appReducer = combineReducers({ form, history });

export default createStore(appReducer);