import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import newsFeedReducer from './reducers/newsFeedReducer';
import searchTermReducer from './reducers/searchTermReducer';

const logger = createLogger();
export default (initialState = {}) => (
     createStore(
       combineReducers({
         news: newsFeedReducer,
         searchTerm: searchTermReducer
       }),
       initialState,
       applyMiddleware(logger)
    )
);