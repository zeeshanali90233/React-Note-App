import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import noteReducer from './Reducer/noteReducer';

const store=createStore(noteReducer,applyMiddleware(logger));

export default store;